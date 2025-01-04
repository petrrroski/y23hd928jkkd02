from django.apps import AppConfig


class MyAppConfig(AppConfig):
    name = 'currency'

    def ready(self):
        from .cronjob import my_scheduled_task
        from background_task.models import Task
        import currency.signals
        Task.objects.filter(task_name="currency.cronjob.my_scheduled_task").delete()
        my_scheduled_task(repeat=21600)  # Repeat every 6 hours
