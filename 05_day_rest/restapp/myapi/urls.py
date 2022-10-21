from django.urls import path, include

from .views import SimpleView

urlpatterns = [
    path('', SimpleView.as_view())
]