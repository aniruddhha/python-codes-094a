from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime
from .serializers import QuestionSerializer

# Create your views here.

class SimpleDemoView(APIView):

    def get(self,request, *args, **kwargs ): # http GET

        res = {
            'sts' : 'success',
            'msg' : 'Hi this get method'
        }
        return Response(res)

    def post(self,request ,*args, **kwargs ):  # http POST

        sz = QuestionSerializer(data = request.data)

        if sz.is_valid():
            sz.save()
            return Response(question, status.HTTP_201_CREATED)

        return Response({ 'sts' : 'fail', 'msg' : 'Invalid Data' })

