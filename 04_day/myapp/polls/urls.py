from django.urls import path

from . import views


urlpatterns = [
    path('', views.index, name='index'), #http://localhost:8000/polls/
    path('fancy', views.fancy, name='fancy'), #http://localhost:8000/polls/fancy
    path('dyn', views.dynamic, name='dynamic'),
]