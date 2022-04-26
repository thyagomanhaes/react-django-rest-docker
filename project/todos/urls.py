from rest_framework import routers
from .views import TodoViewSet


router = routers.DefaultRouter()
router.register('api/todos', TodoViewSet, 'todos')

urlpatterns = router.urls
