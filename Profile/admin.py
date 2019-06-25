from django.contrib import admin
from Profile.models import skillsets
from Profile.models import projects

# Register your models here.

admin.site.register(skillsets)
admin.site.register(projects)