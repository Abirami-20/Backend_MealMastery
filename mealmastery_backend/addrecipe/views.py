from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Recipe
from .serializer import RecipeSerializer

@api_view(['POST'])
def add_recipe(request):
    if request.method == 'POST':
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'status': 'success', 'message': 'Recipe added successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response({'error': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['GET'])
def get_all_recipes(request):
    if request.method == 'GET':
        recipes = Recipe.objects.all()
        serializer = RecipeSerializer(recipes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response({'error': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['GET'])
def get_recipe_by_id(request, id):
    if request.method =="GET":
        try:
            recipe = Recipe.objects.get(id=id)
            print(recipe)
            serializer = RecipeSerializer(recipe)
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Recipe.DoesNotExist:
            return Response({'error': 'Recipe not found'}, status=status.HTTP_404_NOT_FOUND)
    else:
        return Response({'error':'Not allowed method'})

    

