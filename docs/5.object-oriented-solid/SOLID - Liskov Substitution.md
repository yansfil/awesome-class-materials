# SOLID - Liskov Substitution

## 개념

`Liskov Substitution Principle(리스코브 치환 원칙)`은 부모 객체의 역할은 자식 객체도 할 수 있어야 된다는 원칙입니다.

B 객체가 A 객체의 자식이라면 B객체의 타입을 A로 바꾸더라도 작동에 문제가 없어야 합니다. 상위 타입에서 정한 명세를 하위 타입에서도 그대로 지킬 수 있을 때 상속을 해야 합니다

일반적으로 Liskov Substitution Principle이 지켜지지 않으면 Open Closed Principle을 위반하게 됩니다. 

## 위반한 사례1

```python
import abc

class Employee(metaclass=abc.ABCMeta):
    @abc.abstractmethod
    def work(self):
        ...

class Developer(Employee):
    def work(self):
        print("코딩을 합니다")
        return ["if..", "for..."]

class FrontEndDeveloper(Developer):
    def work(self):
        print("프론트엔드 개발을 합니다")
        #결과를 반환하지 않음

if __name__ == "__main__":
    def make_code(developer: Developer):
        code = developer.work()
        print(f"총 {len(code)}줄의 코드를 작성하였습니다")

    make_code(Developer())
    make_code(FrontEndDeveloper())
```

## 위반한 사례2

```python
# 유명한 직사각형, 정사각형 사례
# 일반적으로 정사각형은 직사각형입니다. 즉 정사각형 is 직사각형의 관계이며, 이는 상속이 가능합니다. 
class Rectangle:
    def get_width(self):
        return self.width;

    def get_height(self):
        return self.height;

    def set_width(self, width):
        self.width = width
    
    def set_height(self, height):
        self.height = height

class Square(Rectangle):
    def set_width(self, width):
        self.width = width
        self.height = width
    
    def set_height(self, height):
        self.width = height
        self.height = height

if __name__ == "__main__":
	square = Square()
	square.set_width(20)
	square.set_height(30)
	check = square.get_width() == 20 && square.get_height() == 30 #부모의 명세와 다름
	
```