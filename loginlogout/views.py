from django.contrib import auth
from django.http import HttpResponseRedirect
from django.shortcuts import render

def login(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect('/index/')
    username = request.POST.get('username', '')
    password = request.POST.get('password', '')
    user = auth.authenticate(username=username, password=password)
    if user is not None and user.is_active:
        auth.login(request, user)
        return HttpResponseRedirect('/index/')
    else:
        return render(request, 'login.html', locals())
    
def index(request):
   return render(request, 'index.html')

def logout(request):
    auth.logout(request)
    return HttpResponseRedirect('/index/')
