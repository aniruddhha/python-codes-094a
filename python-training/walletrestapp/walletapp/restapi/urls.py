from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .transferview import TransferViewSet

from .login.loginviewset import LoginViewSet
from .views import WalletViewSet

router = DefaultRouter()
router.register(r'auth', LoginViewSet, basename='auth')
router.register(r'wallet', WalletViewSet, basename='wallet')
router.register(r'transfer', TransferViewSet, basename='transfer')

urlpatterns = [
    path('', include(router.urls)),
]