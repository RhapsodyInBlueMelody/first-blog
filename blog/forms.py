from django import forms
from ckeditor.fields import RichTextField
from .models import Post

class PostForm(forms.ModelForm):
    text = RichTextField(config_name='default')  # This line is fine

    class Meta:
        model = Post
        fields = ['author', 'title', 'text']
        widgets = {
            'author': forms.Select(attrs={'class': 'w-full p-2 text-black rounded-lg'}),
            'title': forms.TextInput(attrs={'class': 'w-full p-2 text-black rounded-lg'}),
        }

