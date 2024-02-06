from django.shortcuts import render
from rest_framework import viewsets
from .models import Usuario, Problema
from .import serializer, models
# Create your views here.

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = models.Usuario.objects.all()
    serializer_class = serializer.UsuarioSerializer

class ProblemaViewSet(viewsets.ModelViewSet):
    queryset = models.Problema.objects.all()
    serializer_class = serializer.ProblemaSerializer