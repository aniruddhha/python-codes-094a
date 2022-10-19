class Cat:
    eyes = 2 # state
    legs = 4

    def walk(self):
        # behaviour
        print('cat is walking')
        print(self)
    def eat(self, is_fish): 
         print('cat is eating')
    def play(self): 
        print('cat is playing')
    def sleep(self): 
        print('cat is sleeping')

ct = Cat()
print('cat object created')
print(ct)
ct.eat(True)
ct.walk()
ct.play()
ct.sleep()