from django.urls import path
from . import views

urlpatterns = [
    path('', views.main_survey, name='main_survey'),
    path('ajax/submit', views.submit_survey, name='submit_survey'),
]