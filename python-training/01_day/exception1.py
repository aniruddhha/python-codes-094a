from cgitb import reset


print('🔥 Exception Handling')

try:
    num1 = int(input('👉 Enter Num1: ')) # "30"
    num2 = int(input('👉 Enter Num2: ')) # "50"
    res = num1/num2
    # print(f' Result is {res}')
except ZeroDivisionError:
    print(f' your num2 is worng')
except ValueError:
    print(f' you are inputting wrong data')
else:
   print(f'Well there is exception')
   print(f' Result is {res}')
finally:
    print(f'I execute everytime')
