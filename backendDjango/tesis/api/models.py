from django.db import models
import os
from multiupload.fields import MultiFileField

# Create your models here.

class Usuario (models.Model): 
    nombre = models.CharField(max_length = 100)
    apellidos = models.CharField(max_length = 100)
    Email = models.CharField(max_length = 150)
    password =  models.CharField(max_length = 30)
    
    def __str__(self):
        return f'{self.nombre} {self.apellidos}'

class Problema (models.Model):
    area = models.CharField(max_length = 256, blank=True, null=True)
    institucion = models.CharField(max_length = 256, blank=True, null=True)
    descripcion = models.CharField(max_length = 256, blank=True, null=True)
    archivos = models.FileField(upload_to='archivos/%Y/%m/%d/', blank=True, null=True, verbose_name='Archivos', max_length=255)
    fecha = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.area} {self.institucion} {self.descripcion}'