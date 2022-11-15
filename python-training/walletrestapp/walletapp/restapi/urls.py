import imp
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import (
    WalletViewSet
)

from .login.loginviewset import (
    LoginViewSet
)

router = DefaultRouter()
router.register(r'', LoginViewSet, basename='login')
router.register(r'wallet', WalletViewSet, basename='wallet')

urlpatterns = [
    path('', include(router.urls)),
]