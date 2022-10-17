
res = 90
print(f'OutSide : Result is {res}')
def add(num1, num2):
    # global res
    print(f'Global One {res}')
    res = 20
    print(f'Local One {res}')

add(10, 90)