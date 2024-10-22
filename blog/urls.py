from django.urls import path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
        path('', views.index, name='index'),
        path('ckeditor/', include('ckeditor_uploader.urls')),
        path('post/new/', views.post_new, name='post_new'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
