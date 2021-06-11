import pymongo
import pprint

myclient = pymongo.MongoClient("mongodb+srv://Iamtheroot:r00t891112@cluster0.tomb4.mongodb.net/mydb?retryWrites=true&w=majority", ssl=True,ssl_cert_reqs='CERT_NONE')
mydb = myclient["mydb"]
users = mydb["user"]

for user in users.find():
	pprint.pprint(user)