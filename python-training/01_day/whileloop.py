print('🔥 While Loop')
number = 100
isRunning = True

while isRunning:
    ip = input('👉 Whats your guess ?')
    guess = int(ip)

    if guess == number:
        print(f'You guessed correctly {guess}')
        isRunning = False
    elif guess > number:
        print(f'Little Higher {guess}') 
        isRunning = True
    elif guess< number:
        print(f'You are about to guess {guess}') 
        isRunning = True
    else:
        print(f'Bad Guess {guess}')
        isRunning = True
