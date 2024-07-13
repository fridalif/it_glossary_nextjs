from django.db import models

# Create your models here.
class Document(models.Model):
    name = models.CharField(max_length=255, verbose_name='Название документа')
    file = models.FileField(upload_to='documents/', verbose_name='Файл документа')
    downloads = models.IntegerField(default=0)
    
class Term(models.Model):
    term = models.CharField(max_length=255, verbose_name='Термин')
    definition = models.CharField(max_length=255, verbose_name='Определение')
    document = models.ForeignKey(Document, on_delete=models.CASCADE)