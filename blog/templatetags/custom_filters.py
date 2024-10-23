from django import template
from django.utils.html import strip_tags

register = template.Library()

@register.filter(name='truncate_text')
def truncate_text(value, arg):
    """
    Strip HTML tags from the text and then truncate to the specified length.
    """
    text = strip_tags(value)  # Remove HTML tags (like <img>)
    if len(text) > int(arg):
        return text[:int(arg)] + '...'
    return text

