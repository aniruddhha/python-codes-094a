from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class SimpleView(APIView):

    def get(self, request):
        res_data = {
            'sts' : 'success',
            'msg' : 'Yes its working'
        }
        return Response(res_data)