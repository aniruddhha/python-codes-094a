print('🔥 Function Basics')
res = 90
print(f'OutSide : Result is {res}')
def add(num1 = 10, num2 = 10):
    global res
    # print(f'Global One {res}')
    res = 20
    resIn = 90
    print(f'Local One {res}')

add(10, 90)
print(f'OutSide : Result is {res}')
add()