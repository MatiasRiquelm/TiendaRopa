from django.db import models

# Create your models here.

class Categoria(models.Model):
    idCategoria = models.IntegerField(primary_key=True, verbose_name='Id de la categoria')
    nombreCategoria = models.CharField(max_length=20, verbose_name='Nombre de la categoria')

    def __str__(self) -> str:
        return self.nombreCategoria
    
class Producto(models.Model):
    idProducto = models.IntegerField(primary_key=True, verbose_name='Id de producto')
    nombreProducto = models.CharField(max_length=20, verbose_name='Nombre del producto')
    descripcionProducto = models.CharField(max_length=50, verbose_name='Descripcion Producto')
    precioProducto = models.IntegerField()
    stockProducto = models.IntegerField()
    tallaProducto = models.CharField(max_length=10, verbose_name='Talla del producto')
    categoria = models.ForeignKey(Categoria,on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.nombreProducto


class Fotos(models.Model):
    idFoto = models.IntegerField(primary_key=True, verbose_name='Id de la foto')
    nombreFoto = models.CharField(max_length=20, verbose_name='Nombre de la foto')
    imagen = models.ImageField()
    producto = models.ForeignKey(Producto,on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.nombreFoto

class Detalle(models.Model):
    idDetalle = models.IntegerField(primary_key=True, verbose_name='id del detalle de compra')
    cantidad = models.IntegerField()
    subtotal = models.IntegerField()
    producto = models.ForeignKey(Producto,on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.cantidad

class Pregunta(models.Model):
    idPregunta = models.IntegerField(primary_key=True, verbose_name='Id de la pregunta')
    pregunta = models.CharField(max_length=30, verbose_name='Pregunta del usuario')

    def __str__(self) -> str:
        return self.pregunta

class Rol(models.Model):
    idRol = models.IntegerField(primary_key=True, verbose_name='Id del rol')
    nombreRol = models.CharField(max_length=20, verbose_name='Rol del usuario')

    def __str__(self) -> str:
        return self.nombreRol

class Usuario(models.Model):
    idUsuario = models.IntegerField(primary_key=True, verbose_name='Id del usuario')
    nombreUsuario = models.CharField(max_length=20, verbose_name='Nombre del usuario')
    apellidoUsuario = models.CharField(max_length=20, verbose_name='Apellido del usuario')
    telefono = models.IntegerField()
    correo = models.EmailField()
    clave = models.CharField(max_length=30, verbose_name='Contraseña del usuario')
    respuesta = models.CharField(max_length=30, verbose_name='Respuesta de la pregunta')
    pregunta = models.ForeignKey(Pregunta,on_delete=models.CASCADE)
    rol = models.ForeignKey(Rol,on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.nombreUsuario

class Compra(models.Model):
    idCompra = models.IntegerField(primary_key=True, verbose_name='Id de compra')
    fechaCompra = models.DateField()
    fechaDespacho = models.DateField()
    fechaEntrega = models.DateField()
    estado = models.CharField(max_length=30, verbose_name='Estado de la compra')
    total = models.IntegerField()
    costoDespecho = models.IntegerField()
    carrito = models.IntegerField()
    detalle = models.ForeignKey(Detalle,on_delete=models.CASCADE)
    usuario = models.ForeignKey(Usuario,on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.idCompra

class Direccion(models.Model):
    idDireccion = models.IntegerField(primary_key=True, verbose_name='Id de la direccion')
    calle = models.CharField(max_length=30, verbose_name='Calle')
    nombreVillaPoblacion = models.CharField(max_length=30, verbose_name='Nombre de la Calle')
    numeroCalle = models.IntegerField()
    usuario = models.ForeignKey(Usuario,on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.calle

class Comuna(models.Model):
    idComuna = models.IntegerField(primary_key=True, verbose_name='Id de la region')
    nombreComuna = models.CharField(max_length=30, verbose_name='Nombre de la comuna')
    costoDespacho = models.IntegerField()
    direccion = models.ForeignKey(Direccion,on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.nombreComuna

class Region(models.Model):
    idRegion = models.IntegerField(primary_key=True, verbose_name='Id de la Region')
    nombreRegion = models.CharField(max_length=30, verbose_name='Nombre de la región')
    localidad = models.CharField(max_length=30, verbose_name='Localidad de la región')
    comuna = models.ForeignKey(Comuna,on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.nombreRegion