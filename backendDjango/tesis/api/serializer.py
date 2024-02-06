from rest_framework import serializers
from .import models

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Usuario
        fields = '__all__'

class ProblemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Problema
        fields = '__all__'
