### Here lies the backend api for the Giro Project

## Steps  To run
1. Navigate to the backend directory
```cd backend```
2. install the dependencies uing the provided requirements.txt file
```pip install -r requirements.txt```
3. Now run the Flask package
```flask run```

### remember to populate the enviroment variables
```
FLASK_HOST=0.0.0.0
FLASK_PORT=5000
FLASK_APP=api/app.py
```
Depending on your environment, you may need to install the python-dotenv package
```pip install python-dotenv```


### Advised to run this in a virtual enviroment
```py
python3 -m venv venv
source venv/bin/activate
```
