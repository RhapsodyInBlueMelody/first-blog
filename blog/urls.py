from django.urls import path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
        path('projects/', views.projects, name='projects'),
        path('', views.post_list, name='post_list'),
        path('', views.index, name='index'),
        path('post/<int:pk>/', views.post_detail, name='post_detail'),
        path('ckeditor/', include('ckeditor_uploader.urls')),
        path('post/new/', views.post_new, name='post_new'),
        path('about_me/', views.about_me, name='about_me'),
        path('home/', views.post_list_container, name='post_list_container'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
