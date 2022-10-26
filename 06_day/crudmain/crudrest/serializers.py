from rest_framework import serializers

from .models import AppUser

class AppUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppUser
        # fields = ['id','first_name', 'last_name', 'email']
        fields = '__all__'

