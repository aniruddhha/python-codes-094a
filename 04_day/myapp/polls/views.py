from django.http import HttpResponse, HttpRequest


# Create your views here.

def index(request: HttpRequest):
    return HttpResponse("<h1> Welcome to Django Power </h1>")

def fancy(request: HttpRequest) -> HttpResponse:
    return HttpResponse("<h1> You have completed first challange </h1>")