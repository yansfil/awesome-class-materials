# SOLID - Interface Segregation

## 개념
`Interface Segregation Principle(인터페이스 분리 원칙)`은 클라이언트가 자신이 이용하지 않는 메소드는 의존하지 않아야 한다는 원칙입니다. 

SOLID의 1 원칙인 Single Responsibility Principle은 객체가 하나의 책임만을 가져야 한다고 했는데, 여기서는 인터페이스(혹은 추상 클래스)가 하나의 책임만을 가져야 한다고 보시면 됩니다. 

인터페이스를 책임에 맞게 잘 쪼개둔다면, 클라이언트 입장에서는 필요한 역할만 구현(혹은 상속)하여 사용할 수 있습니다. 

- 파이썬에는 인터페이스가 없으므로 추상 클래스를 예로 들겠습니다.

## AS-IS

```python{21,22}
from abc import *

class Smartphone(metaclass=ABCMeta):
	@abstractmethod
	def call(self):
		...

	@abstractmethod
	def send_message(self):
		...
	
	@abstractmethod
	def see_youtube(self):
		...
	
	@abstractmethod
	def take_picture(self):
		...

#카메라가 없는 클래스에서 take_picture는 불필요한 메소드가 된다.
class PhoneWithNoCamera(Smartphone):
	...
```

## TO-BE

```python{21,22}
#인터페이스를 역할 단위로 나눈다. 
class Telephone(metaclass=ABCMeta):
	@abstractmethod
	def call(self):
		...

	@abstractmethod
	def send_message(self):
		...
	
class Camera(metaclass=ABCMeta):
	@abstractmethod
	def take_picture(self):
		...

class Application(metaclass=ABCMeta):
	@abstractmethod
	def see_youtube(self):
        ...

class PhoneWithNoCamera(Telephone, Application):
	...
```