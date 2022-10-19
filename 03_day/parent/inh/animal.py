class Animal:
    def run(self): 
        print('animal is running')
    def eat(self): 
        print('animal is eating')
    def walk(self):
        print('animal is walking')

class Tiger(Animal): 
    def run(self): 
        super().run()
        print('tiger is running')
    def eat(self): 
        super().eat()
        print('tiger is eating')
    def walk(self):
        super().walk()
        print('tiger is walking')

class Lion(Animal):
    def run(self): 
        super().run()
        print('lion is running')
    def eat(self): 
        super().eat()
        print('lion is eating')
    def walk(self):
        super().walk()
        print('lion is walking')

tg: Tiger = Tiger()
tg.eat()
tg.run()
tg.walk()

# tiger obj = animal obj + tiger obj

an1: Animal = Tiger()
an2: Animal = Lion()