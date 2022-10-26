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
        res_users = AppUserSerializer(users, many = True)

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

    def put(self, request): 
        req_data = request.data

        app_user = AppUser.objects.get(id = req_data['id'])
        app_user.first_name = req_data['first_name']
        app_user.last_name = req_data['last_name']
        app_user.email = req_data['email']
        app_user.save(update_fields=['first_name', 'last_name', 'email'])

        return Response({ 'sts' : 'success', 'msg' : 'user updated successfully' })


    def delete(self, request): ...
