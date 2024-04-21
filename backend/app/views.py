
from rest_framework.views import APIView
from .models import React
from .serializer import ReactSerializer
from rest_framework.response import Response

class ReactView(APIView):
    def get(self, request):
        output = [{"chatmessages": output.chatmessages, "questions": output.questions} 
                  for output in React.objects.all()]
        return Response(output)
    
    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        