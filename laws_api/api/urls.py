from django.urls import path,include
from api.views import TermsAPIView
urlpatterns = [
    path('terms/', TermsAPIView.as_view()),
    path('terms/<slug:query>/', TermsAPIView.as_view()),
]