from django.shortcuts import render
from Profile.models import skillsets
from Profile.models import projects
# Create your views here.

def profile(request):
    # project_link = projects.objects.values('project_link')[0]['project_link']
    context = {
        'skillset': skillsets.objects.all(),
        'projects': projects.objects.all()
    }
    return render(request, 'Profile/home.html', context)