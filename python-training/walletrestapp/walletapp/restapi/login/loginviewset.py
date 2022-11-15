from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status

from ..models import (
    AppUser
)

from .loginserializers import (
    LoginSerializer
)

class LoginViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = []
    serializer_class = LoginSerializer

    @action(detail=True, methods=['post'], url_path=r'login')
    def login(self, request, *args, **kwargs):
        creds = request.data

        lgn_ser = LoginSerializer(data=creds)
        if lgn_ser.is_valid():
            user = lgn_ser.validated_data
            return Response(
                {
                    'sts': 'success',
                    'dt' : {
                        'id': user['id'],
                        'role': user['role']
                    }
                }
            )
        return Response(
            {
                'sts': 'err',
                'err' : lgn_ser.errors
            },
            status=status.HTTP_400_BAD_REQUEST
        )
