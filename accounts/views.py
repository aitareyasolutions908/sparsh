from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.contrib.auth.forms import UserCreationForm, UserChangeForm, PasswordChangeForm
from django.contrib.auth.models import User
from django.contrib import messages, auth
from .forms import SignUpForm, EditProfileForm


def home(request):
	return render(request, 'landing/index.html', {})

def login_user(request):
	if request.method == 'POST':
		username = request.POST['username']
		password = request.POST['password']
		user = authenticate(request, username=username, password=password)
		if user is not None:
			login(request, user)
			messages.success(request, ('You Have Been Logged In!'))
			return redirect('home')

		else:
			messages.success(request, ('Error Logging In - Please Try Again...'))
			return redirect('login')
	else:
		return render(request, 'accounts/login.html', {})

def logout_user(request):
	logout(request)
	messages.success(request, ('You Have Been Logged Out...'))
	return redirect('home')

def register_user(request):
	if request.method == 'POST':
		first_name = request.POST['first_name']
		username = request.POST['username']
		email = request.POST['email']
		#number = request.POST['number']
		#gender = request.POST['gender']
		password1 = request.POST['password1']
		password2 = request.POST['password2']

		if password1 == password2:
			if User.objects.filter(username=username).exists():
				messages.error(request, 'Username Taken')
				return redirect('register')
			else:
				if User.objects.filter(email=email).exists():
					messages.error(request, 'Email Is being used')
					return redirect('register')
				else:
					user = User.objects.create_user(username=username, password=password1, email=email,
					first_name=first_name)
					auth.login(request, user)
					messages.success(request, 'You are Successfully logged In')
					return redirect('home')
					#user.save()
					#messages.success(request, 'You are now registered with Sparsh-Infra and can Log In')
					#return redirect('login')

		else:
			messages.error(request, 'Passwords do not match!')
			return redirect('register')


	return render(request, 'accounts/register.html')



def edit_profile(request):
	if request.method == 'POST':
		form = EditProfileForm(request.POST, instance=request.user)
		if form.is_valid():
			form.save()
			messages.success(request, ('You Have Edited Your Profile...'))
			return redirect('home')
	else:
		form = EditProfileForm(instance=request.user)

	context = {'form': form}
	return render(request, 'accounts/edit_profile.html', context)

def change_password(request):
	if request.method == 'POST':
		form = PasswordChangeForm(data=request.POST, user=request.user)
		if form.is_valid():
			form.save()
			update_session_auth_hash(request, form.user)
			messages.success(request, ('You Have Edited Your Password...'))
			return redirect('home')
	else:
		form = PasswordChangeForm(user=request.user)

	context = {'form': form}
	return render(request, 'accounts/change_password.html', context)
