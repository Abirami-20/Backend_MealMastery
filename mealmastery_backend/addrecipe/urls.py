from django.urls import path
from .views import add_recipe
urlpatterns = [
    path('addrecipe/', add_recipe, name='add_recipe'),
    # other paths...
]