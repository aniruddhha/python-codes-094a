def create_cat():
    return Cat()

class Cat:
    # eyes = 2 # state
    # legs = 4

    # constructor
    def __init__(self, eyes, legs) -> None: 
        self.eyes = eyes
        self.legs = legs
        abc = 10

    def lets_print_the_cat(self) -> None:
        print(f'Legs {self.legs},Eyes {self.eyes}')

    def walk(self) -> None:
        # behaviour
        print('cat is walking')
        print(self)
        self.legs = self.legs + 3

    def eat(self, is_fish: bool) -> None: 
         print('cat is eating')
    
    def play(self) -> None: 
        print('cat is playing')
    
    def sleep(self) -> None: 
        print('cat is sleeping')

legs: int = int(input('Legs : '))
eyes: int = int(input('Eyes : '))

ct = Cat(legs, eyes)
ct.lets_print_the_cat()
ct.legs = 10
# print('cat object created')
# print(ct)
# ct.eat(True)
# ct.walk()
# ct.play()
# ct.sleep()