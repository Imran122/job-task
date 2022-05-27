import requests
import json
response_API = requests.get('https://gorest.co.in/public/v1/users')

data = response_API.text
parse_json = json.loads(data)
print("data:", parse_json)
