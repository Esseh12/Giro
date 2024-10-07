### Here lies the backend api for the Giro Project


## Steps  To run
1. Navigate to the backend directory
```cd backend``` (Ignore this if already in the backend directory)

##### Before proceding to step 2, Youre advised to run this python app in a virtual enviroment
      ```py
      python3 -m venv .venv
      source venv/bin/activate
      ```

2. install the dependencies using the provided requirements.txt file
```pip install -r requirements.txt```
3. Now run the Flask package
```flask run```

### remember to populate the enviroment variables in the .env file
```
FLASK_HOST=0.0.0.0
FLASK_PORT=5000
FLASK_APP=api/app.py
```
Depending on your environment, you may need to install the python-dotenv package
```pip install python-dotenv``` (ignore this as well, its already installed through the requirements.txt)



## Available endpoints

```
1.  GET /
      Return: { flash sales, best selling, all products }

2.  GET /products/id
      Return: a single product details and related products

3.  POST /auth/signup
      Body
        JSON: firstname, lastname, email, password, phone_number
      Constraints:
        - only phone_number is optional,
        - email must be unique
      Return: a json of newly created user

4.  POST /auth/login
      Body
        JSON: email, password
      Constraints:
        - both fields required
      Return: user details

5.  GET /auth/profile
      Constraints:
        - must be logged in
      Returns: user info

6.  GET /logout
      Return: success
```
