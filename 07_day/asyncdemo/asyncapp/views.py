from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action

from asyncapp.tasks import(
     human_detection_task
)

from .serializer import SmsSerializer

# Create your views here.

class IndentifyMeViewSet(viewsets.ModelViewSet):

     queryset = []
     serializer_class = SmsSerializer

     @action(detail=False,  methods=['get'], url_path=r'img')
     def identify_me(self, request, pk):
          human_detection_task.delay("img.png")
          return Response('Success')
          
