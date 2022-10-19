from datetime import date


class Device:
    def __init__(self) -> None:
        self.__id = 10

    def setId(self, new_id: str) -> None:
        self.__id = new_id

it: int = 10
dv: Device = Device()
# print(dv.__id)
# dv.kjkjgjghjgjgjgj = 10
# print(id(dv.__id))
dv.setId(90)