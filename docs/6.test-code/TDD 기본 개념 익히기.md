# TDD 기본 개념 익히기

## TDD 정의

TDD(Test Driven Development)는 테스트가 개발을 이끌어가는 방법론입니다. 즉, 테스트가 개발보다 선행하게 됩니다. 

개발해야 하는 사항을 미리 정의하고, 각 기능의 입/출력을 미리 정한 뒤, 기능을 구현하는 프로세스는 아주 일반적인 개발 과정입니다. 이때 TDD 방식으로 개발하게 된다면, 테스트 코드를 먼저 작성함으로써 개발사항과 각 기능의 입/출력 요구사항을 코드로 문서화한 후 기능을 개발하게 됩니다.

<br>

## TDD 예제

간단하게 실습해 보겠습니다. 이전 시간의 예제와 동일합니다. 

간단한 쇼핑몰 웹 사이트의 백엔드 서버에서 로그인 기능을 개발해야 하는 상황을 가정하겠습니다. 다음과 같은 요구사항이 있습니다.

- `POST /login` 으로 `user_id` 와 `user_password` 를 json을 실어 요청하면, `token` 을 응답받아야 합니다.
- `token`은 `user_id` 에 `"_verifed"` 가 붙은 문자열입니다.

이제 위 요구사항 구현을 TDD로 진행해봅시다.


### 1. 테스트 작성하기

위 요구사항을 테스트 코드로 작성하면 다음과 같습니다.

```python
import requests
def test_login_endpoint():
    # given
    api_host = "http://localhost:8000"
    payload = {
        "id": "grab",
        "password": "1234"
    }
    
    # when
    res = requests.post(url=f"{api_host}/login", json=payload)
    
    # then
    assert res.data() == {
        "token": "grab_verified"
    }
```

이 테스트 코드를 실행하면 당연히 실패할 것입니다. 아직 저희는 테스트 코드만 작성하고, 테스트할 대상을 작성하지 않았기 때문입니다.



### 2. 테스트 대상 구현하기

이제 테스트할 대상인 서버를 구현해봅시다.

```python
from fastapi import FastAPI

app = FastAPI()

class LoginRequest(BaseModel):
    id: str
    password: str
        
        
@app.get("/login")
def login_endpoint(req: LoginRequest):
    user_id = req.id
    user_password = req.password
    
    user_repository = UserRepository()  # DB와 연동되어 User 정보를 저장하고 불러오는 객체
    user = user_repository.find_by_id(user_id)
    if user_id == user.id and user.password == user_password:
        token = user_id + "_verified"
   	else:
        raise Exception("로그인 인증에 실패했습니다.")
        
    return {
        "token": token
    }
```

테스트가 통과하도록 서버 로직을 구현했습니다. 이제 서버를 실행시킨 뒤, 테스트 코드를 실행하면 테스트는 성공할 것입니다.



### 3. 테스트 대상 리팩토링하기

테스트는 성공해서 모든 일이 끝난 것처럼 보입니다. 하지만 위 서버 코드는 현재 하나의 모듈에 너무 많은 내용을 담고있는거 같아서, SRP 원칙에 위배하는 것 같습니다. 기존 코드를 좀 더 구조적으로 리팩토링하고 싶습니다. 다음처럼 코드를 분리하고 하고싶다고 합시다.

- http 요청과 응답을 주고 받는 책임을 담당하는 함수
- 로그인 로직을 실행을 담당하는 함수
- 토큰 생성 로직을 담당하는 함수

http 요청과 응답을 주고 받는 책임을 담당하는 함수" 부터 명확하게 만들어봅시다. 기존의 `login_endpoint` 가 이 책임을 담당하고 있었으므로, 다음처럼 리팩토링 합니다.

```python
from fastapi import FastAPI

app = FastAPI()

class LoginRequest(BaseModel):
    id: str
    password: str
        
        
@app.get("/login")
def login_endpoint(req: LoginRequest):
    # 로그인 로직은 login() 함수에게 위임합니다.
    token = login(user_id=req.id, user_password=req.password)
    return {
        "token": token
    }
```

이제 "로그인 로직을 실행을 담당하는 함수"를 `login()` 으로 정의해봅시다. 테스트 코드로 `login()` 함수의 입/출력을 정의하는 것으로 시작합니다.

```python
def test_login_successful():
    # given
    user_id = "grab"
    user_password = "1234"
    
    # when
    actual = login(user_id, user_password)
    
    # then
    assert actual == "grab_verified"
    
    
def test_login_failed():
    # given
    user_id = "grab"
    user_password = "wrong password"
    
    # when & then
    with pytest.raises(Exception):
        login(user_id, user_password)
```

아직 `login()` 함수를 구현하지 않았기 때문에 위 두 테스트는 실패합니다.  
이제 `login` 함수를 다음처럼 구현합니다.

```python
def login(user_id: str, user_password: str) -> str:
    user_repository = UserRepository()  # DB와 연동되어 User 정보를 저장하고 불러오는 객체
    user = user_repository.find_by_id(user_id)
    if user_id == user.id and user.password == user_password:
        # 토큰 생성 로직은 create_token() 함수에게 위임합니다.
        return create_token(user_id)
    else:
        raise Exception("로그인 인증에 실패했습니다.")
```

마지막으로 "토큰 생성 로직을 담당하는 함수"를 `create_token()` 으로 정의해봅시다. 마찬가지로 테스트 코드로 `create_token()` 함수의 입/출력 정의하는 것으로 시작합니다.

```python
def test_create_token():
    actual = create_token("grab")
    expected = "grab_verified"
    assert actual == expected
```

이제 `create_token()` 함수의 구현을 작성해봅시다.

```python
def create_token(user_id: str) -> str:
    return user_id + "_verified"
```

이제 모두 구현되었기 때문에 작성한 모든 테스트는 성공합니다.

:::tip
예시에서 코드를 Top-Down 방식으로 작성하였습니다. Bottom-Up 방식으로 내부 로직부터 코드를 작성하는 방식으로도 진행할 수 있습니다.    
:::

<br>

## TDD와 레드-그린-리팩토링

![](https://miro.medium.com/max/1024/1*749GtQGqamkOqfOe40o_Tg.png)

위 예제에서 우리가 진행한 방식은 TDD에서 말하는 "레드-그린-리팩토링" 입니다. 레드-그린 리팩토링의 과정은 다음과 같습니다.

1. 테스트를 먼저 작성합니다.
    - 테스트할 대상은 아직 구현되지 않았으므로, 테스트는 실패합니다. (실패는 보통 빨간색으로 표현됩니다)
2. 테스트가 통과되도록 코드를 작성합니다.
    - 구현이 완료되면 테스트는 성공합니다 (성공은 보통 초록색으로 표현됩니다)
3. 기존 코드를 필요에따라 리팩토링합니다.
    - 리팩토링은 기존 사용자 입장에서의 동작에 영향을 주면 안됩니다. 다시 말하면, 입/출력은 변하지 않고, 내부적인 동작만 바꾸어야 합니다.
    - 리팩토링은 종종 사이드이펙트를 불러오기도 합니다. 
    - 하지만 테스트 코드로 이런 사이드 이펙트를 확인할 수 있습니다. 리팩토링하다가 동작에 문제가 생긴다면, 테스트는 실패할 것입니다.
    - 한편, 리팩토링을 성공적으로 했다면 기존 테스트 역시 성공합니다.
    - 여기서 기존 테스트 코드는 건드리지 않았다는 게 중요합니다.

이처럼 TDD를 하게되면 실패 -> 성공 -> 리팩토링의 순환을 가지는 "레드-그린-리팩토링" 순서로 개발을 진행하게 됩니다.

> ***로버트 마틴의 TDD 3가지 법칙**
> 
> 1. 실패한 단위 테스트를 만들기 전에는 제품 코드를 만들지 않는다.
> 2. 컴파일이 안 되거나 실패한 단위 테스트가 있으면 더 이상 단위 테스트를 만들지 않는다.
> 3. 실패한 단위 테스트를 통과하는 이상의 제품 코드는 만들지 않는다.

<br>

## TDD의 장단점

TDD로 인한 장점은 다음과 같습니다.

- 개발하고자 하는 대상에서 기대하는 것을 테스트 코드로 미리 명확하게 정의할 수 있습니다.
    - 소프트웨어를 개발할 때 중요한 것은 이 소프트웨어가 "어떻게"가 돌아가느냐가 아니라 "무엇을" 제공해줄 것이냐 입니다.
    - 테스트 코드로 먼저 작성하면 입/출력과 발생하는 예외를 무엇으로 정의해야 할지 먼저 명확하게 정의할 수 있습니다.
    - 덕분에 좀 더 사용하는 쪽의 코드나 사람 입장에서 사용하기 좋은 코드를 작성할 수 있게 됩니다.
- 테스트를 훨씬 꼼꼼히 작성하게 됩니다.
    - 테스트 코드는 사실 작성하기 번거로운 존재입니다. 특히 구현을 먼저하고 테스트를 작성하면, 테스트 작성에 느슨해지고, 자칫 예외나 몇몇 시나리오에 대한 테스트를 놓칠 수 있습니다.
    - TDD로 진행하게 되면, 테스트를 먼저 작성하기 때문에, 테스트 코드를 누락시킬 빈도가 낮아집니다.
    - 테스트 코드가 탄탄하게 있기 때문에, 리팩토링도 겁먹지 않고 진행할 수 있습니다.
- 테스트 코드가 깔끔한 코드 사용 문서가 됩니다.
    - TDD에서 테스트 코드는 테스트할 대상의 구현을 모른 채 작성되기 때문에, 철저히 사용자 중심적으로 작성됩니다.
    - 따라서 테스트 코드는 코드를 사용하기 위해 필요한 최소한의 내용만 담게 됩니다.

TDD로 인한 단점은 다음과 같습니다.

- 테스트 가능하도록 코드를 설계하는 것은 어렵습니다.
    - TDD를 진행하게 되면 모든 코드들이 테스트 가능하도록 설계해야 합니다.
    - 테스트 가능하도록 코드를 설계하려면, 추상화, 의존성 주입 등을 잘 활용해야 합니다.
    - 또한 테스트 환경을 제대로 구축하는 것 (Docker compose, DB 데이터 초기화 등) 역시 꽤나 성가신 일입니다.
- 익숙하지 않은 채 TDD를 진행하면, 개발 프로세스가 느려질 수 있습니다.
    - 위에서 말했듯, 테스트 가능한 코드와 테스트 환경을 만드는 것 자체가 어려운 일입니다.
    - 구현 로직보다 테스트 코드를 작성하고 고민히는데 훨씬 시간이 많이 들 수 있습니다.

<br>

## 정리

- TDD는 테스트가 구현을 선행하는 개발 프로세스입니다.
- TDD를 하게 되면 보통 레드-그린-리팩토링 순서로 개발을 진행하게 됩니다.
- TDD를 하면 꼼꼼한 테스트를 통해 코드 품질과 테스트 코드의 문서화 품질이 올라갑니다.
- 하지만 그만큼 테스트 가능한 코드와 테스트 환경을 갖추는 일은 어렵습니다.

