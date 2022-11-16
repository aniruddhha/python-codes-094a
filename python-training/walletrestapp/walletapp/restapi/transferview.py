from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status

from .transferserializer import AdminTransferSerializer

class TransferViewSet(viewsets.ModelViewSet) :
    queryset = []
    serializer_class = AdminTransferSerializer

    @action(detail=False, methods=['put'], url_path='transfer')
    def admin_transfer(self, request):

        req_data = request.data

        ts = AdminTransferSerializer(data = req_data)

        if ts.is_valid():
            return Response({ 'sts' : 'success' })
        
        return Response({ 'sts' : 'error', 'err' : ts.errors }, status= status.HTTP_404_NOT_FOUND)
