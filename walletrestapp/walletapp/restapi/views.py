from rest_framework import viewsets

from rest_framework.response import Response
from rest_framework.decorators import action

from django.utils import timezone

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
        app_user.txn_dt = timezone.now()
        # app_user.save()
        
        sz = AppUserSerializer(app_user)
        print(sz.data)

        if sz.is_valid():
            sz.save()
            return Response({ 'sts' : 'success', 'msg' : 'amount deposited' })
        
        return Response({ 'sts' : 'error', 'msg' : 'problem in depositing amount' })
        # return Response({ 'sts' : 'success', 'msg' : 'amount deposited' })

     