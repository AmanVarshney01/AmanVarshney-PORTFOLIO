from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Post

# Create your views here.

class PostListView(ListView):
    model = Post
    template_name = 'Blog/blog_home.html'
    ordering = ['-id']


class PostDetailView(DetailView):
    model = Post
    template_name = 'Blog/post_detail.html'