import rest_framework.serializers as serializers
from api.models import Document, Terms

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ['name']
        
class TermsSerializer(ModelSerializer):
    document_name = serializers.CharField(source='document.name')
    class Meta:
        model = Terms
        fields = '__all__'