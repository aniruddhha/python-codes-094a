import array as arr

print('🔥 Array')

a = arr.array('i', [1,9,4,90, 67, 45])

for i in range(0, len(a)):
    print(f'I = {a[i]}')

print(a)
a.insert(2, 888)
print(a)
a.remove(888)
print(a)