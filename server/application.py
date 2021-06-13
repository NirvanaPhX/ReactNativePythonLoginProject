from flask import Flask, request
from flask_pymongo import PyMongo
from bson import json_util
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)
app.config.from_object('config')

app.config["MONGO_URI"] = "mongodb+srv://Iamtheroot:r00t891112@cluster0.tomb4.mongodb.net/mydb?retryWrites=true&w=majority&ssl=true&ssl_cert_reqs=CERT_NONE"
mongo = PyMongo(app)
userdb = mongo.db.user

""" Login API """
@app.route('/login' , methods=['POST'])
# @cross_origin()
def login():
    json_data = request.get_json()
    email = json_data['email']
    password = json_data['password']
    # Find user from db
    userindb = userdb.find_one({'email':email})
    print(userindb)
    if not userindb:
        print("Email doesn't exist")
        return "Email dosen't exist", 400
    if not (password == userindb['password']):
        print("Password doesn't match")
        return "Password doesn't match", 400
    print("Successfully Logged in") 
    return json_util.dumps(userindb) 

""" Signup API """
@app.route('/signup', methods=['POST'])
# @cross_origin()
def signup():
    json_data = request.get_json()

    username = json_data['username']
    email = json_data['email']
    password = json_data['password']

    emailexist = userdb.find_one({'email':email})
    if emailexist :
        print("The email you are registering has already been used")
        return "The email you are registering has already been used", 400

    usernameexist = userdb.find_one({'username':username})
    if usernameexist :
        print("Username has already been taken")
        return "Username has already been taken", 400

    newuser = {'username': username, 'email':email, 'password': password, 'contact':[]}
    result = userdb.insert_one(newuser)
    return str(result) + "has been successfully added to the database"

