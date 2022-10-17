print('🔥 Conditionals')
number = 100

ip = input('👉 Whats your guess ?')
# print(f'Type {type(guess)}')
guess = int(ip)

if guess == number:
    print(f'You guessed correctly {guess}')
elif guess > number:
    print(f'Little Higher {guess}') 
elif guess< number:
  print(f'You are about to guess {guess}') 
else:
    print(f'Bad Guess {guess}')
   
