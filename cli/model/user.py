from datetime import datetime

class User: 
    def __init__(self):
        self.id = ''
        self.dob = datetime.fromisoformat("2022-01-01")
        self.user_name = ''
        self.password = ''
        self.role = ''   

