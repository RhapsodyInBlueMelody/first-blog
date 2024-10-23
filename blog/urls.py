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
        path('post/<int:pk>/edit/', views.post_edit, name='post_edit'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
