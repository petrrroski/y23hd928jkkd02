from rest_framework import mixins, permissions, viewsets
from rest_framework.response import Response
from rest_framework import status


class SoftDeleteMixin(mixins.DestroyModelMixin):
    def destroy(self, request, *args, **kwargs):
        print(self.queryset)
        instance = self.queryset.get(id=kwargs.get('pk'))
        instance.is_delete = True
        instance.save()
        return Response(status=status.HTTP_204_NO_CONTENT)


class HardDeleteMixin(mixins.DestroyModelMixin):
    def destroy(self, request, *args, **kwargs):
        print(kwargs.get('pk'))
        instance = self.queryset.get(id=kwargs.get('pk'))
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
