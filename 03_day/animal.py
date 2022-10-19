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

tg : Tiger = Tiger()
tg.eat()
tg.run()
tg.walk()