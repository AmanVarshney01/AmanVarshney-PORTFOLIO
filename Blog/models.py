from django.db import models
from datetime import date

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    date = models.DateField(("Date"), auto_now_add=True)
