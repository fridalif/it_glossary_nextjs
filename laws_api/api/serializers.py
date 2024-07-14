import rest_framework.serializers as serializers
from api.models import Document, Term

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ['name','downloads','id']
        
class TermsSerializer(serializers.ModelSerializer):
    document_name = serializers.CharField(source='document.name')
    class Meta:
        model = Term
        fields = '__all__'