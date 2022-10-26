from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class AppUserView(APIView):
    def get(self, request, *args, **kwargs): 
        return Response({ 'sts' : 'checking'  })

    def post(self, request): ...
    def put(self, request): ...
    def delete(self, request): ...
