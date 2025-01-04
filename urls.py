from django.urls import path
from rest_framework import routers

from .views import *

router = routers.DefaultRouter()

router.register(r"data", DashboardViewSet, basename="dashboard")
router.register(r"currency", CurrencyViewSet, basename="currency")
router.register(r"exchange-logs", ExchangeLogsViewSet, basename="exchange-logs")
router.register(r"warnings", WarningsViewSet, basename="warnings")
router.register(r"warnings-logs", WarningsLogsViewSet, basename="warnings-logs")
router.register(r"compare", CompareViewSet, basename="compare")
router.register(r"services",ExchangeServicesViewSet,basename='services')
router.register(r"user-services",UserExchangeServicesViewSet,basename='user-services')
