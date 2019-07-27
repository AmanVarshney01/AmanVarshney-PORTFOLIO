from django.shortcuts import render

from .models import Post

# Create your views here.

def Posts(request):
    context = {
        'Posts': Post.objects.all()
    }
    return render(request, 'Blog/home.html', context)