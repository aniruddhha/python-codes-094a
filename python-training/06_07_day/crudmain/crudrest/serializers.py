from wsgiref.validate import validator
from rest_framework import serializers

from .models import AppUser

class AppUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppUser
        # fields = ['id','first_name', 'last_name', 'email']
        fields = '__all__'

    #https://stackoverflow.com/questions/31278418/django-rest-framework-custom-fields-validation
    def validate(self, data) :
        
        fnm = data['first_name']
        if len(fnm) < 8 :
             raise serializers.ValidationError({"first_name": "Length Should be 8 or more"})

        lnm = data['last_name']
        if len(lnm) < 8 :
             raise serializers.ValidationError({"last_name": "Length Should be 8 or more"})

        return data

