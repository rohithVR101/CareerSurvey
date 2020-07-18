from django.db import models
from django.urls import reverse

# Create your models here.

class Entry(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email_id = models.EmailField()
    dob = models.DateField()
    education = models.CharField(max_length=100)
    company_name = models.CharField(max_length=100)
    designation = models.CharField(max_length=100)
    current_skills = models.CharField(max_length=500)
    aspiring_skills = models.CharField(max_length=500)
    aspiring_role = models.CharField(max_length=100)
    dream_company = models.CharField(max_length=100)
    confirm_help = models.BooleanField()
    confirm_signup = models.BooleanField()
    password = models.CharField(max_length=50)

    def publish(self):
        self.save()

    def __str__(self):
        return self.first_name + " " + self.last_name

