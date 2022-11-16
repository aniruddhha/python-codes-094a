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

        srcUsr = AppUser.objects.get(pk = data['src'])
        dstUsr = AppUser.objects.get(pk = data['dst'])

        srcBal = srcUsr.balance

        if srcBal < data['amt'] :
            raise serializers.ValidationError('Insufficient Balance')

        srcUsr.balance = srcBal - data['amt']
        srcUsr.save()

        dstUsr.balance = dstUsr.balance + data['amt']
        dstUsr.save()

        return data


