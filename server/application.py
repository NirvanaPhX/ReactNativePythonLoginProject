from flask import Flask
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config.from_object('config')

app.config["MONGO_URI"] = "mongodb+srv://Iamtheroot:r00t891112@cluster0.tomb4.mongodb.net/mydb?retryWrites=true&w=majority&ssl=true&ssl_cert_reqs=CERT_NONE"
mongo = PyMongo(app)
userdb = mongo.db.user

""" Login API """
@app.route('/login/<email>/<password>' , methods=['POST'])
def login(email, password):
    # Find user from db
    userindb = userdb.find_one({'email':email})
    if not userindb:
        return "Email dosen't exist"
    if not (password == userindb['password']):
        return "Password doesn't match"
    return "Login" 

""" Signup API """
@app.route('/signup/<username>/<email>/<password>', methods=['POST'])
def signup(username, email, password):
    emailexist = userdb.find_one({'email':email})
    usernameexist = userdb.find_one({'username':username})
    if emailexist :
        return "Email has already been used"
    if usernameexist :
        return "Username has already been used"
    newuser = {'username': username, 'email':email, 'password': password, 'contact':[]}
    result = userdb.insert_one(newuser)
    return str(result) + "has been successfully added to the database"

