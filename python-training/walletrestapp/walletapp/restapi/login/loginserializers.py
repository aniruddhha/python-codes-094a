from rest_framework import serializers
from ..models import AppUser
from django.core.exceptions import ObjectDoesNotExist

class LoginSerializer(serializers.Serializer):
    
    user_name = serializers.CharField(min_length = 3, required = True)
    password = serializers.CharField(min_length = 3,required = True)

    def validate_user_name(self, value):
        if len(value) < 0 : 
            raise serializers.ValidationError("Invalid User Name")
        return value
    
    def validate_password(self, value):
        if len(value) < 0 : 
            raise serializers.ValidationError("Invalid Password")
        return value

    def validate(self, data):
        try :
            user = AppUser.objects.get(
                user_name=data['user_name'], 
                password = data['password']
            )
            print(user)
            return { 'id' : user.id, 'role' : user.role }
        except ObjectDoesNotExist : 
            raise serializers.ValidationError("User Not Found")