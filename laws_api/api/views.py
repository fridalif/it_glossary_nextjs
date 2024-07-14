from rest_framework.views import APIView
from rest_framework.response import Response
from api.serializers import DocumentSerializer, TermsSerializer 
from api.models import Document, Term
from django.http import HttpResponse, Http404

class TermsAPIView(APIView):
    def get(self, request, id=None):
        query = request.GET.get('query')
        terms = Term.objects.all()
        if id is not None:
            terms = terms.filter(id=id)
        if query is not None:
            terms = terms.filter(term__contains=query)
        serializer = TermsSerializer(terms, many=True)
        return Response(serializer.data)

class DocumentsAPIView(APIView):
    def get(self, request, id=None):
        query = request.GET.get('query')     
        documents = Document.objects.all()
        if id is not None:
            documents = documents.filter(id=id)
        if query is not None:
            documents = documents.filter(name__contains=query)
            
        serializer = DocumentSerializer(documents, many=True)
        return Response(serializer.data)


def download(request, document_id):
    try:
        document = Document.objects.get(id=document_id)
    except Document.DoesNotExist:
        raise Http404
    
    with open(document.file.path, 'rb') as f:
        response = HttpResponse(f.read(), content_type='application/pdf')
        response['Content-Disposition'] = f'attachment; filename="{document.name}"'
        return response
    
    
class RegsiterAPIView(APIView):
    ...    
