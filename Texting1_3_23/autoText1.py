import schedule
import time
import requests
# from credentials import mobile_number


def send_message():
    resp = requests.post('https://textbelt.com/text', {
        'phone': '4802046697',
        'message': 'Hey, Ohayo',
        'key': 'textbelt'
    })
    print(resp.json())

# schedule.every().day.at('07:00').do(send_message)
schedule.every(30).seconds.do(send_message)


while True:
    schedule.run_pending()
    time.sleep(1)

    