from django.db import models

# Create your models here.

class Sms(models.Model):
    number = models.CharField(max_length=200)
    msg = models.CharField(max_length=200)
    