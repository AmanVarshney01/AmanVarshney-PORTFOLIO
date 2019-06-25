from django.db import models
from cloudinary.models import CloudinaryField
from django.db.models.signals import pre_delete
import cloudinary
import cloudinary.uploader
from django.dispatch import receiver

# Create your models here.

class skillsets(models.Model):
    skillname = models.CharField(max_length=50)

class projects(models.Model):
    project_image = CloudinaryField('image')
    project_link = models.URLField()
    project_name = models.CharField(max_length=50)
    project_description = models.TextField()

@receiver(pre_delete, sender=projects)
def projects_delete(sender, instance, **kwargs):
    cloudinary.uploader.destroy(instance.image.public_id)