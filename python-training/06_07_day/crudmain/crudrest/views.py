from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action

from django.utils import timezone

from .models import AppUser
from .serializers import AppUserSerializer

from rest_framework import viewsets

from django.views.decorators.cache import cache_page
from django.utils.decorators import method_decorator
from django.views.decorators.vary import vary_on_cookie

# Create your views here.

class AppUserView(APIView):

    def get(self, request, *args, **kwargs): 

        users = AppUser.objects.all()
        res_users = AppUserSerializer(users, many = True)

        return Response(res_users.data)

    def post(self, request): 

        req_data = request.data

        user = AppUser(
            first_name = req_data['first_name'],
            last_name = req_data['last_name'],
            email = req_data['email'],
            created = timezone.now()
        )

        user.save()

        return Response({ 'sts' : 'success', 'msg' : 'user saved successfully' })

    def put(self, request): 
        req_data = request.data

        app_user = AppUser.objects.get(id = req_data['id'])
        app_user.first_name = req_data['first_name']
        app_user.last_name = req_data['last_name']
        app_user.email = req_data['email']
        app_user.save(update_fields=['first_name', 'last_name', 'email'])

        return Response({ 'sts' : 'success', 'msg' : 'user updated successfully' })

    def delete(self, request): 
    
        user_id = request.data['id']

        app_user = AppUser.objects.get(id = user_id)
        app_user.delete()

        return Response({ 'sts' : 'success', 'msg' : 'user deleted successfully' })

class AppUserDeatilsView(APIView):
    def get(self, request, id):
        app_user = AppUser.objects.get(id = id)
        res_user = AppUserSerializer(app_user)

        return Response(res_user.data)

    def delete(self, request, id): 

        app_user = AppUser.objects.get(id = id)
        app_user.delete()

        return Response({ 'sts' : 'success', 'msg' : 'user deleted successfully' })    

class AppUserViewSet(viewsets.ModelViewSet):
    serializer_class = AppUserSerializer
    queryset = AppUser.objects.all()

    #dispatch : https://medium.com/@hassanraza/what-is-dispatch-used-for-in-django-c29af0653e94#:~:text=The%20dispatch%20method%20takes%20in,middleman%20between%20requests%20and%20responses.
    #caching : https://tute.io/how-to-cache-django-rest-framework-with-redis
    @method_decorator(vary_on_cookie)
    @method_decorator(cache_page(60*60))
    def dispatch(self, request, *args, **kwargs):
        return super(AppUserViewSet, self).dispatch(*args, **kwargs)

    @action(detail=True,  methods=['post'], url_path=r'login')
    def check_creds(self, request, pk = None):
        creds = request.data

        app_user = AppUser.objects.filter(email = creds['email'], last_name = creds['last_name'] ).first() 
        sz = AppUserSerializer(app_user)

        return Response(sz.data)

    @action(detail = False, methods=['get'], url_path = r'startwith')
    def find_all_start_with(self, request):
      ...

    @action(detail = False, methods=['get'], url_path = r'between')
    def find_all_between(self, request, st, ed):
       ...




