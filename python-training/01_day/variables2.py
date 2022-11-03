print('🔥 Static Typing')

address: str = 'abc'
# address = 90

def clarity() -> int:
    return 10

def traditional() -> bool:
    # return 10
    return 'hi'
    # return True

def add(num1: int, num2: int) -> int:
    return num1 + num2
