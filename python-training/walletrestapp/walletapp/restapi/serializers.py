from rest_framework import serializers
from .models import AppUser

class AppUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppUser
        # fields = '__all__'
        exclude = ('txn_dt', 'created')

    def validate(self, data):
        # modify this function for validations
        # raise value errors
        return data