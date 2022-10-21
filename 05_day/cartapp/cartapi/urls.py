from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns

from  .views import SimpleDemoView

urlpatterns = [
    path('simple', SimpleDemoView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)