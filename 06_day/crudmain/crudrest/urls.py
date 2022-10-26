from django.urls import path, include

from rest_framework.routers import DefaultRouter

# from .views import (
#    AppUserView,
#    AppUserDeatilsView,
# )

from .views import (
  AppUserViewSet
)



# router.register('appadmin', AdminView.as_view())
# router.register('features', FeaturesView.as_view())


# urlpatterns = [
#     path('', AppUserView.as_view()), #http://localhost:8000
#     path('<int:id>/', AppUserDeatilsView.as_view()), #http://localhost:8000/1
# ]

router = DefaultRouter()
router.register(r'appuser', AppUserViewSet, basename='usr')
urlpatterns = [ 
    path('', include(router.urls) )
]
