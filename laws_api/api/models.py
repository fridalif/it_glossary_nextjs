from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Document(models.Model):
    name = models.CharField(max_length=255, verbose_name='Название документа')
    file = models.FileField(upload_to='documents/', verbose_name='Файл документа')
    downloads = models.IntegerField(default=0)
    
class Term(models.Model):
    term = models.CharField(max_length=255, verbose_name='Термин')
    definition = models.CharField(max_length=255, verbose_name='Определение')
    document = models.ForeignKey(Document, on_delete=models.CASCADE)
    
    
class UserTokens(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    auth_token = models.CharField(max_length=255)
    refresh_token = models.CharField(max_length=255)