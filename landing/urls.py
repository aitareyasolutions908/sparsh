from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about', views.about, name='about'),
    path('contact', views.contact, name='contact'),
    path('faq', views.faq, name='faq'),
    path('howitworks', views.howitworks, name='howitworks'),
    path('property', views.property, name='property'),
    path('viewproperty', views.viewproperty, name='viewproperty'),
    path('privacy', views.privacy, name='privacy'),
    path('terms', views.terms, name='terms'),
    path('kyc', views.kyc, name='kyc'),
    path('dashboard', views.dashboard, name='dashboard'),
    path('dashboardmydocuments', views.dashboardmydocuments, name='dashboardmydocuments'),
    path('dashboardportfolio', views.dashboardportfolio, name='dashboardportfolio'),
    path('dashboardrevenue', views.dashboardrevenue, name='dashboardrevenue'),


]
