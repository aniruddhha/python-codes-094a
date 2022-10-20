from django.urls import path

from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('fancy', views.fancy, name='fancy'),
]