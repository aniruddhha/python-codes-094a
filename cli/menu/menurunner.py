import menu.admin as admin
from ipdata.appinput import AppInput

class MenuRunner:

    def __init__(self) -> None:
        self.ip = AppInput()

    def show_menu(self):
        while True:
            admin.show_menu()
            ch = self.ip.user_choice()
            print(f'User Choice {ch}')
            if ch >= 3:
                exit(1)



