from django.db import models

# Create your models here.
class Dashboad(models.Model):
    name = models.CharField(max_length=100, blank=True)
    amount_invested = models.IntegerField()
    total_earnings = models.IntegerField()
    rental_yield = models.IntegerField()

    def __str__(self):
        return self.name

class kyc(models.Model):
    username = models.CharField(max_length=100, blank=True)
    email = models.CharField(max_length=100, blank=True)
    phone = models.CharField(max_length=10, blank=True)
    pan = models.CharField(max_length=15, blank=True)
    pan_image =models.ImageField(upload_to='images/',blank=True)
    adhaar = models.CharField(max_length=100, blank=True)
    adhaar_image = models.ImageField(upload_to='images/',blank=True)

    def __str__(self):
        return self.username

class Property(models.Model):
    name = models.CharField(max_length=100, blank=True)
    area = models.IntegerField()
    price = models.IntegerField()
    rentalyeild = models.IntegerField()
    min_investment = models.IntegerField()
    investors = models.IntegerField()

    def __str__(self):
        return self.name
