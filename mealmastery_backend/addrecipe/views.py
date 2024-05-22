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
