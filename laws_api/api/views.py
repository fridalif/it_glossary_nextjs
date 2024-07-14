from rest_framework.views import APIView
from rest_framework.response import Response
from api.serializers import DocumentSerializer, TermsSerializer 
from api.models import Document, Term
from django.http import HttpResponse, Http404
from django.contrib.auth.models import User

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
        document.downloads += 1
        document.save()
    except Document.DoesNotExist:
        raise Http404
    
    with open(document.file.path, 'rb') as f:
        response = HttpResponse(f.read(), content_type='application/pdf')
        response['Content-Disposition'] = f'attachment; filename="{document.name}"'
        return response
    
    
class RegsiterAPIView(APIView):
    def post(self, request):
        data = request.data    
        username = data.get('username')
        password = data.get('password')
        email = data.get('email')
        if(username is None or password is None or username=='' or password==''):
            return Response({'error': 'Введите пароль и логин'}, status=400)
        if User.objects.filter(username=username).exists():
            return Response({'error': 'Пользователь с таким именем уже существует'}, status=400)
        user = User.objects.create_user(username, email, password)
        user.save()
        return Response({'message': 'Пользователь успешно создан'}, status=200)
    
class UsernameRoleAPIView(APIView):
    def get(self, request):
        if not request.user.is_authenticated:
            return Response({'username': '', 'is_staff': request.user.is_staff})
        is_stuff = True if request.user.is_superuser else request.user.is_staff
        return Response({'username': request.user.username, 'is_staff': request.user.is_staff})
    