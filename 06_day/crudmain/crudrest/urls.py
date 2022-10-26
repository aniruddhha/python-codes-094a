from django.urls import path, include
from .views import (
   AppUserView,
   AppUserDeatilsView
)

urlpatterns = [
    path('', AppUserView.as_view()), #http://localhost:8000
    path('<int:id>/', AppUserDeatilsView.as_view()) #http://localhost:8000/1
]
