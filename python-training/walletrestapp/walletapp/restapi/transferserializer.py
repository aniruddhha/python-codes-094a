from rest_framework import serializers
from .models import AppUser

class AdminTransferSerializer(serializers.Serializer):

    adm = serializers.IntegerField(required = True)
    src = serializers.IntegerField(required = True)
    dst = serializers.IntegerField(required = True)
    amt = serializers.DecimalField(required = True, decimal_places = 3, max_digits=10)

    def validate_amt(self, amt):

        if amt <= 0 or amt > 10_000_000 :
            raise serializers.ValidationError('Invalid Amount')

        return amt

    def validate(self, data):

        src_usr = AppUser.objects.get(pk = data['src'])
        dst_usr = AppUser.objects.get(pk = data['dst'])

        # if not src_usr.is_active:
        #      raise serializers.ValidationError('Inactive Source User')
        # if src_usr.is_blocked :
        #     raise serializers.ValidationError('Source User is Blocked')

        # if not dst_usr.is_active:
        #      raise serializers.ValidationError('Inactive Target User')
        # if dst_usr.is_blocked :
        #     raise serializers.ValidationError('Target User is Blocked')

        src_bal = src_usr.balance

        if src_bal < data['amt'] :
            raise serializers.ValidationError('Insufficient Balance')

        src_usr.balance = src_bal - data['amt']
        src_usr.save()

        dst_usr.balance = dst_usr.balance + data['amt']
        dst_usr.save()

        return data


