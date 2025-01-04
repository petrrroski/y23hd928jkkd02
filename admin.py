from .models import Currency,Dashboard,CompareModel,ExchangeLogs,WarningsLogs,Warnings,IsWariningLog,ExchangeServices,UserExchangeServices

from django.contrib import admin


admin.site.register(Currency)
admin.site.register(Dashboard)
admin.site.register(CompareModel)
admin.site.register(ExchangeLogs)
admin.site.register(Warnings)
admin.site.register(WarningsLogs)
admin.site.register(IsWariningLog)
admin.site.register(ExchangeServices)
admin.site.register(UserExchangeServices)

