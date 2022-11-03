from django.http import HttpResponse, HttpRequest
from django.template import loader


# Create your views here.

def index(request: HttpRequest):
    return HttpResponse("<h1> Welcome to Django Power </h1>")

def fancy(request: HttpRequest) -> HttpResponse:
    return HttpResponse("<h1> You have completed first challange </h1>")

def dynamic(request: HttpRequest) -> HttpResponse:
    template = loader.get_template('polls/dynamic.html')
    context = { 'user' : 'abc' }
    return HttpResponse(template.render(context, request))