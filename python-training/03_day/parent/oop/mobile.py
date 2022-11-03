class Battery:
    def call(self): ...
    def sms(self): ...

def create_new_mobile():
    return Battery()

print(f'My name is {__name__}')