from django.db import models

# Create your models here.

class AppUser(models.Model):
    user_name = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    role = models.IntegerField()
    balance = models.DecimalField(decimal_places = 3, max_digits=10)
    txn_dt = models.DateTimeField()
    is_active = models.BooleanField(False)
    is_blocked = models.BooleanField(False)
    created = models.BooleanField(False)
