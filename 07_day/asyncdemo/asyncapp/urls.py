from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .views import(
    IndentifyMeViewSet
)

router = DefaultRouter()
router.register(r'identify', IndentifyMeViewSet, basename='indentify')

urlpatterns = [
    path('', include(router.urls)),
]
