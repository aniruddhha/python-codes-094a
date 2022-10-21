from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime

# Create your views here.

class SimpleDemoView(APIView):

    def get(self,request, *args, **kwargs ): # http GET

        res = {
            'sts' : 'success',
            'msg' : 'Hi this get method'
        }
        return Response(res)

    def post(self,request ,*args, **kwargs ):  # http POST

        user_creds = request.data
        user_creds['tm'] = datetime.today().strftime('%Y-%m-%d')

        return Response(user_creds, status.HTTP_201_CREATED)

    # def put(self,request ,*args, **kwargs ): ...

    # def delete(self,request ,*args, **kwargs ) : ...

