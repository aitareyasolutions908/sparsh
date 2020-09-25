from django.contrib import admin

# Register your models here.
from .models import Dashboad, kyc, Property

admin.site.register(Dashboad)
admin.site.register(kyc)
admin.site.register(Property)
