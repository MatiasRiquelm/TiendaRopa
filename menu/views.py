from django.shortcuts import render

def contacto(request):
    return render(request,'menu/contacto.html')

def EditarUs(request):
    return render(request,'menu/EditarUs.html')

def index(request):
    return render(request,'menu/index.html')

def login(request):
    return render(request,'menu/login.html')

def marca(request):
    return render(request,'menu/marca.html')

def Resgis(request):
    return render(request,'menu/Resgis.html')

def RestPass(request):
    return render(request,'menu/RestPass.html')

def Usuario1(request):
    return render(request,'menu/Usuario1.html')

def productos(request):
    return render(request,'menu/productos.html')
