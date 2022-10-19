'''class represents error condition for deposit/transfer/withdraw amount'''

class InvalidAmountException(Exception): # is a relationship
    '''class represents error condition for deposit/transfer/withdraw amount'''

class NegativeAmountException(Exception): # is a relationship
    '''class represents negative amnount'''

class ZeroAmountException(Exception): # is a relationship
    '''class represents negative amnount'''

class InputReader:
    '''Reads the data and display menu'''
    def take_amount(self) -> int:
        '''take the input amount from user'''
        amt = int(input('👉 Enter The amount'))
        if amt < 0:
            raise NegativeAmountException()
        if amt == 0:
            raise ZeroAmountException()
        if amt > 10_000_000:
            raise InvalidAmountException()
        return amt

ip = InputReader()
try :
    ip.take_amount()
except NegativeAmountException as ex: ...
except ZeroAmountException as ex: ...
except InvalidAmountException as ex: ...
