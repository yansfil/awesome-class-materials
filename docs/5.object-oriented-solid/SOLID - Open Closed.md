# SOLID - Open Closed

## 개념

`Open Closed Principle(개방 폐쇄 원칙)`은 객체의 확장에는 열려있고, 수정에는 닫혀있게 해야 한다는 법칙입니다.

기존의 코드를 변경하지 않으면서 기능을 추가할 수 있도록 설계되어야 합니다. OCP에서 중요한 부분은 요구사항이 변경되었을 때 코드의 변경되어야 할 부분과 그렇지 않아야 할 부분이 명확하게 구분되어 있어야 한다는 점입니다. 

보통 이를 지키기 위해선 인터페이스나 추상 클래스를 통해 추상화시키고 이를 상속, 구현하게 됩니다. 새로운 기능을 추가한다고 할 때, 다형성을 사용해 기존 코드를 변경하지 않으면서 (변경에 닫혀있음), 추상 클래스를 상속받아 쉽게 코드를 추가할 수 있습니다(확장에 열려있음)

## AS-IS

```python
class Developer:
    def coding(self):
        print("코딩을 합니다")

class Designer:
    def design(self):
        print("디자인을 합니다")

class Analyst:
    def analyze(self):
        print("분석을 합니다")

class Company:
    def __init__(self, employees):
        self.employees = employees

    # employee가 다양해질수록 코드를 계속 변경해야 한다.
    def make_work(self):
        for employee in self.employees:
            if type(employee) == Developer:
                employee.coding()
            elif type(employee) == Designer:
                employee.design()
            elif type(employee) == Analyst:
                employee.analyze()
```

## TO-BE

```python
# 각 객체들의 역할을 아우르는 추상 클래스(고수준)을 생성합니다.
class Employee(metaclass=abc.ABCMeta):
    @abc.abstractmethod
    def work(self):
        ...

class Developer(Employee):
    def work(self):
        print("코딩을 합니다")

class Designer(Employee):
    def work(self):
        print("디자인을 합니다")

class Analyst(Employee):
    def work(self):
        print("분석을 합니다")

#상속을 통해 쉽게 구현이 가능함 -> 확장에 열려있다.
class Manager(Employee):
    def work(self):
		print("매니징을 합니다")

class Company:
    def __init__(self, employees: List[Employee]):
        self.employees = employees

    # employee가 늘어나더라도 변경에는 닫혀있다.
    def make_work(self):
        for employee in self.employees:
            employee.work()
```