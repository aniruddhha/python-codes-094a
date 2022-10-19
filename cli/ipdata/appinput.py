class AppInput:

    def user_choice(self) -> int:
        ch: int = int(input('Enter Your Choice'))
        return ch

    def amount(self, msg) -> int:
        amt: int = int(input(msg))
        return amt
