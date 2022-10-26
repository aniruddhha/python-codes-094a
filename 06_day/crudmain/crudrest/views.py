from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.utils import timezone

from .models import AppUser
from .serializers import AppUserSerializer

# Create your views here.

class AppUserView(APIView):
    def get(self, request, *args, **kwargs): 

        users = AppUser.objects.all()
        res_users = AppUserSerializer(users)

        return Response(res_users.data)

    def post(self, request): 

        req_data = request.data

        user = AppUser(
            first_name = req_data['first_name'],
            last_name = req_data['last_name'],
            email = req_data['email'],
            created = timezone.now()
        )

        user.save()

        return Response({ 'sts' : 'success', 'msg' : 'user saved successfully' })

    def put(self, request): ...
    def delete(self, request): ...
