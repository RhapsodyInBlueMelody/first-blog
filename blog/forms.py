from django import forms
from .models import Post


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['author', 'title', 'text']
        widgets = {
            'author': forms.Select(attrs={'class': 'w-full p-2 text-black rounded-lg'}),
            'title': forms.TextInput(attrs={'class': 'w-full p-2 text-black rounded-lg'}),
            'text': forms.Textarea(attrs={'class': 'w-full p-2 text-black rounded-lg'}),
        }
