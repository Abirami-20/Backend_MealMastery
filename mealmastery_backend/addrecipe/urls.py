from django.urls import path
from .views import *
urlpatterns = [
    path('api/recipes/', get_all_recipes, name='get_all_recipes'),
    path('addrecipe/', add_recipe, name='add_recipe'),
    path('api/recipes/<int:id>/', get_recipe_by_id, name='get_recipe_by_id'),
    # other paths...
]