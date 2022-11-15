from functools import partial
from rest_framework import viewsets

from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status

from django.utils import timezone, dateformat

from .models import (
    AppUser
)

from .serializers import (
    AppUserSerializer
)

# Create your views here.
class WalletViewSet(viewsets.ModelViewSet):
    queryset = AppUser.objects.all()
    serializer_class = AppUserSerializer

    @action(detail=True, methods=['put'], url_path=r'deposit' )
    def deposit(self, request, pk):
        
        dt = request.data
        print(f"Amount {dt['balance']} PK {pk}")

        app_user = AppUser.objects.get(id = pk)
        existing_bal = app_user.balance

        new_balance = existing_bal + dt['balance']
        app_user.balance = new_balance
        app_user.txn_dt = dateformat.format(timezone.now(), 'Y-m-d')
        # app_user.created = dateformat.format(app_user.created, 'Y-m-d')
        print(app_user)
        
        sz = AppUserSerializer(
            app_user,
            data = app_user.__dict__, 
            partial = True
        )
        
        if sz.is_valid():
            sz.save()
            return Response({ 'sts' : 'success', 'msg' : 'amount deposited' })
        print(sz.errors)
        print(sz.data)
        return Response(sz.errors)

    @action(detail=True, methods=['post'], url_path=r'login')
    def login(self, request, *args, **kwargs):
        creds = request.data
        print(creds)
        user = AppUser.objects.get(user_name= creds['user_name'], password = creds['password'])
        print(user)
        if user == None:
            return Response('User Not Found', status=status.HTTP_404_NOT_FOUND )
        return  Response({ 'id' : user.id, 'role' : user.role  })

        


     