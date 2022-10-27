
from time import sleep
from celery import shared_task

@shared_task()
def human_detection_task(img_path: str):
   sleep(20) #simulation of extracting human from image
   print('Image Extraction Completed')
