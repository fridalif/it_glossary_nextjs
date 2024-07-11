from rest_framework.views import APIView
from rest_framework.response import Response
from api.serializers import DocumentSerializer, TermsSerializer 
from api.models import Document, Term

class TermsAPIView(APIView):
    def get(self, request, query=None):
        terms = Term.objects.all()
        if query is not None:
            terms = terms.filter(term__contains=query)
        serializer = TermsSerializer(terms, many=True)
        return Response(serializer.data)
        