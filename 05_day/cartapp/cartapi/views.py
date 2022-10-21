from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class SimpleDemoView(APIView):

    def get(self,request, *args, **kwargs ): 

        res = {
            'sts' : 'success',
            'msg' : 'Hi this get method'
        }
        return Response(res, status.HTTP_200)

    # def post(self,request ,*args, **kwargs ): ...

    # def put(self,request ,*args, **kwargs ): ...

    # def delete(self,request ,*args, **kwargs ) : ...

