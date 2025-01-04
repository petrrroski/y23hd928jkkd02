import datetime
import pytz
import requests
from background_task import background

from .models import Dashboard,Currency
@background(schedule=21600)  # Run every 6 hours
def my_scheduled_task():
    # Your task code here
    print("Scheduled task is running.")
    # api = "https://github.com/ismartcoding/currency-api/blob/main/latest/data.json"
    url = "https://raw.githubusercontent.com/ismartcoding/currency-api/main/latest/data.json"

    try:
        # Send an HTTP GET request to fetch the JSON data
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for HTTP errors

        # Parse the JSON data
        data = response.json()

    except requests.exceptions.RequestException as e:
        print(f"Error fetching data: {e}")

    
    currencies = Currency.objects.all()
    naive_datetime = datetime.datetime.utcfromtimestamp(data['ts']).replace(tzinfo=pytz.utc)
    jerusalem_tz = pytz.timezone('Asia/Jerusalem')
    localized_datetime = naive_datetime.astimezone(jerusalem_tz).strftime("%Y-%m-%d %I:%M:%S")
    
    print(localized_datetime)
    for currency in currencies:
        dashboard_value = Dashboard.objects.filter(currency=currency)
        exchange_value = data['quotes'][currency.currency]
        if dashboard_value:
            diff=0
            last_update_datetime = datetime.datetime.strptime(dashboard_value[0].last_update, '%Y-%m-%d %I:%M:%S')
            if last_update_datetime.date()==naive_datetime.astimezone(jerusalem_tz).date():
                diff=round(dashboard_value[0].difference+(exchange_value-dashboard_value[0].exchange_value),3)
        
            dashboard_value[0].exchange_value = exchange_value
            dashboard_value[0].difference=diff
            dashboard_value[0].last_update = localized_datetime
            dashboard_value[0].save()
        else:
            Dashboard.objects.create(
                currency=currency,
                exchange_value = exchange_value,
                difference=0,
                last_update = localized_datetime
            )
        
    print("finish")
