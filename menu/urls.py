from django.contrib import admin
from django.urls import path
from .views import contacto,EditarUs,index,login,marca,Resgis,RestPass,Usuario1,productos

urlpatterns = [
    path('',index,name="index"),
    path('paginacontacto',contacto,name="contacto"),
    path('paginaEditarUsuario',EditarUs,name="EditarUs"),
    path('paginaLogin',login,name="login"),
    path('paginaMarca',marca,name="marca"),
    path('paginaRegistro',Resgis,name="Resgis"),
    path('PaginaRestContrasena',RestPass,name="RestPass"),
    path('PaginaUsuario1',Usuario1,name="Usuario1"),
    path('paginatienda',productos,name="productos"),





]