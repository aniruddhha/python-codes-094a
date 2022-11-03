
# https://realpython.com/asynchronous-tasks-with-django-and-celery/
import os
from celery import Celery

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "asyncdemo.settings")

app = Celery("asyncdemo")
app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks()