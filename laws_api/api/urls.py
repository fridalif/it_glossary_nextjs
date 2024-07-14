from django.urls import path
from api.views import TermsAPIView, DocumentsAPIView, download, RegsiterAPIView

urlpatterns = [
    path('terms/', TermsAPIView.as_view()),
    path('terms/<int:id>/', TermsAPIView.as_view()),
    path('documents/', DocumentsAPIView.as_view()),
    path('documents/<int:id>/', DocumentsAPIView.as_view()),
    path('download/<int:document_id>/', download),
    path('register/', RegsiterAPIView.as_view()),
]