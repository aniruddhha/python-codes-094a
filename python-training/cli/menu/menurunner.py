import menu.admin as admin
import menu.customer as customer
import menu.first as first

from ipdata.appinput import AppInput

class MenuRunner:

    def __init__(self) -> None:
        self.ip = AppInput()

    def show_menu(self):
        first.show_menu()

        while True:
            ch = self.ip.user_choice()
            print(f'User Choice {ch}')
            if ch >= 3:
                exit(1)
            if ch == 1 :
                admin.show_menu()
                while True:
                    ad_ch = self.ip.user_choice()
                    if ad_ch >= 3:
                        break
                    if ad_ch == 1:
                        print('creating new customer')
                    if ad_ch == 2:
                         print('here are the customers')
            if ch == 2:
                customer.show_menu()



