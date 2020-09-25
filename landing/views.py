from django.shortcuts import render
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
from .models import Dashboad, kyc, Property

# Create your views here.
def index(request):
    return render(request, 'landing/index.html')

def about(request):
    return render(request, 'landing/about.html')

def property(request):
    property = Property.objects.all()
    paginator = Paginator(property, 6)
    page = request.GET.get('page')
    paged_listings = paginator.get_page(page)

    context = {
    'property': paged_listings
    }
    return render(request, 'landing/property.html', context)

def viewproperty(request):
    return render(request, 'landing/viewproperty.html')

def howitworks(request):
    return render(request, 'landing/Howitworks.html')

def contact(request):
    return render(request, 'landing/contact.html')

def faq(request):
    return render(request, 'landing/faq.html')


def privacy(request):
    return render(request, 'landing/privacy.html')

def terms(request):
    return render(request, 'landing/termsandconditions.html')

def dashboard(request):
    return render(request, 'landing/dashboard.html')

def dashboardmydocuments(request):
    return render(request, 'landing/dashboardmydocuments.html')

def dashboardportfolio(request):
    return render(request, 'landing/dashboardportfolio.html')

def dashboardrevenue(request):
    return render(request, 'landing/dashboardrevenue.html')

def kyc(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        phone = request.POST['phone']
        pan = request.POST['pan']
        pan_image = request.POST['pan_image']
        adhaar = request.POST['adhaar']
        adhaar_image = request.POST['adhaar_image']
    return render(request, 'landing/kyc.html')
