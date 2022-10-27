def my_decorator(*args, **kwargs): # accepts the function
    def wrapper(func):
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
        return func
    return wrapper # also returns the function

@my_decorator(a = 10, b = 20) # sugaring syntax
def oth_fn():
    print('I am other function')

# wrapper = my_decorator(a = 10, b = 20)
# in_fn = wrapper(oth_fn)

def add(num1, num2) :
    return num1 + num2