import datetime
import time
from django.dispatch import receiver
from django.db.models.signals import post_save
import pytz

from .models import Dashboard
from .models.warnings import IsWariningLog, Warnings, WarningsLogs


@receiver(post_save, sender=Dashboard)
def handle_model_update(sender, instance, **kwargs):
    naive_datetime = datetime.datetime.utcfromtimestamp(int(time.time())).replace(tzinfo=pytz.utc)
    jerusalem_tz = pytz.timezone('Asia/Jerusalem')
    localized_datetime1 = naive_datetime.astimezone(jerusalem_tz).strftime("%Y-%m-%d %I:%M:%S")
    # Check if the instance already exists (it will have a primary key)
    if instance.pk:
        # Perform custom update logic here
        # print(f"Updating MyModel instance: {instance}")
        currency = instance.currency
        exchange_value=instance.exchange_value
        all_warnings = Warnings.objects.filter(currency=currency)
        for warning in all_warnings:
            print(currency,all_warnings)
            logged_warning = IsWariningLog.objects.filter(warning=warning)
            is_logged=False
            if logged_warning:
                logged_warning=logged_warning[0]
                is_logged = logged_warning.is_logged
            else:
                logged_warning = IsWariningLog.objects.create(warning=warning,is_logged=False)
            
            if warning.compare.symbol == '<':
                if warning.value < exchange_value:
                    if not is_logged:
                        WarningsLogs.objects.create(warning=warning,date=localized_datetime1)
                        logged_warning.is_logged=True
                        logged_warning.save()
                else:
                    logged_warning.is_logged=False
                    logged_warning.save()
            elif warning.compare.symbol == '>':
                if warning.value > exchange_value:
                    print(is_logged)

                    if not is_logged:
                        WarningsLogs.objects.create(warning=warning,date=localized_datetime1)
                        logged_warning.is_logged=True
                        logged_warning.save()
                else:
                    logged_warning.is_logged=False
                    logged_warning.save()
            elif warning.compare.symbol == '=':
                if warning.value == exchange_value:
                    if not is_logged:
                        WarningsLogs.objects.create(warning=warning,date=localized_datetime1)
                        logged_warning.is_logged=True
                        logged_warning.save()
                else:
                    logged_warning.is_logged=False
                    logged_warning.save()
            elif warning.compare.symbol == '!=':
                if warning.value != exchange_value:
                    if not is_logged:
                        WarningsLogs.objects.create(warning=warning,date=localized_datetime1)
                        logged_warning.is_logged=True
                        logged_warning.save()
                else:
                    logged_warning.is_logged=False
                    logged_warning.save()
            
    else:
        print(f"Creating new MyModel instance: {instance}")
