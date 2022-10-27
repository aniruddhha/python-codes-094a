from rest_framework import viewsets

from rest_framework.response import Response
from rest_framework.decorators import action

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
