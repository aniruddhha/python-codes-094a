# print(1, 2, 3, 5)
# print(1, 3)
# print()
# print('abc', 'par', 'lmn')


def accept_credit_card(*nums):
    print(len(nums))

# accept_credit_card('abc', 'lmn', 'pqr')
# accept_credit_card('abc')
# accept_credit_card()

def accept_crypto(**coins):
    for coin in coins.items():
        print(coin[0])
        print(coin[1])
        # print(coin[2])

accept_crypto(curr='eth', price=78.0)
print('calling 2nd time')
accept_crypto(curr='eth', price=78.0, isUp=True)