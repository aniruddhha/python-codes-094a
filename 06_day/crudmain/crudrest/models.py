from django.db import models

# Create your models here.

class AppUser(models.Model): 
    first_name = models.CharField(max_length=200)
    last_name =  models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    created = models.DateTimeField('created date')
