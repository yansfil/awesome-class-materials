# SOLID - Dependency Inversion

## 개념

`Dependency Inversion Principle(의존성 역전 원칙)`은 의존성을 항상 고수준으로 향하게 하여 예측할 수 없는 의존성의 변화를 줄이자는 원칙입니다. 

일반적으로 의존성을 가지는 대상이 변경되면 의존하는 주체도 함께 변경됩니다. 만약 자주 바뀌는 구현체(저수준)를 의존하게 된다면 코드의 변경이 잦을 것이며, 버그와 사이드 이펙트가 날 확률이 높아집니다. 이때 코드가 덜 바뀌는 인터페이스나 추상 클래스(고수준)를 의존한다면 상대적으로 안정적인 코드를 작성할 수 있습니다. 

:::tip

고수준은 상위 수준 + 추상화되어 있는 개념입니다. 일반적으로 잘 변하지 않는 특성을 가집니다. 코드 개념에서 고수준은 인터페이스, 추상클래스 등을 예로 들 수 있습니다. 

저수준은 추상화된 개념을 구체적으로 구현하는 개념입니다. 인터페이스, 추상클래스를 구현하는 구현체(클래스)나 함수 등 실제 동작에 관여하는 코드라고 보시면 됩니다.  

:::
<br/>

기본 코드 
```python
import abc

class Database:
    @abc.abstractmethod
    def connect(uri: str):
        ...
    
    @abc.abstractmethod
    def store_data(data: any):
        ...

class InMemoryDatabase(Database):
    def __init__(self):
        self.data = None
    
    def store_data(self, data):
        print("inmemory에 저장합니다")

class Mysqldatabase(Database):
    def connect(uri: str):
        print(f"{uri}에 연결합니다")
    
    def store_data(self, data):
        print("mysql에 저장합니다")

```

## AS-IS
```python
class App():
    def __init__(self):
        self.inmemory_db = InMemoryDatabase() #구현체에 의존하고 있습니다.
    
    def save_user(self, data):
        self.inmemory_db.store_data(data)

if __name__ == "__main__":
    app = App()
    app.save_user({"id":1,"name":"grab"})
```

만약 App에서 다른 데이터베이스를 사용하고 싶다면, 코드를 직접 변경해야 합니다. 또한 App을 테스트하는 코드를 작성할 때도 의존성이 강하게 결합되어 테스트가 쉽지 않습니다.  

## TO-BE

### 1. 의존성 역전

```python
class App():
    def __init__(self):
        # 고수준을 의존하지만 구현체를 구현하는 코드가 함께 들어있어 반쪽짜리 의존성 역전입니다. 
        self.inmemory_db : Database = InMemoryDatabase() 
    
    def save_user(self, data):
        self.inmemory_db.store_data(data)

if __name__ == "__main__":
    app = App()
    app.save_user({"id":1,"name":"grab"})
```

### 2. 의존성 주입과 함께

일반적으로 의존성 역전을 하면서 의존성 주입을 함께 사용합니다. 

의존성 주입을 사용하게 되면 객체의 생성을 외부에 맡기게 됩니다. 그러면 해당 클래스는 외부 의존성에 조금 더 자유롭게 되며 테스트를 작성할 때도 용이합니다. 

```python
class App():
    def __init__(self, database: Database): #고수준에 의존합니다. 
        self.database = database
    
    def save_user(self, data):
        self.database.store_data(data)

if __name__ == "__main__":
    inmemory_db = InMemoryDatabase()
    app = App(inmemory_db)  # 외부에서 의존성을 생성 후 주입해 줍니다. 
    app.save_user({"id":1,"name":"grab"})
```

:::tip
의존성 주입을 해주기 위해선 결국 이를 사용하는 클라이언트에서 의존성들을 일일이 넣어줘야 합니다. 만약 잘못 코드를 작성하면 의존성 관계가 복잡해질 수 있습니다.

그래서 보통 의존성 주입을 별도로 관리해주는 라이브러리나 프레임워크를 사용합니다.
:::