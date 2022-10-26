from django.urls import path, include
from .views import AppUserView

urlpatterns = [
    path('', AppUserView.as_view()),
]
