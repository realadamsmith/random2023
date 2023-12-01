import firebase_admin
from firebase_admin import credentials, firestore
cred = credentials.Certificate('ServiceAccountKey.json')
default_app = firebase_admin.initialize_app(cred)
db = firestore.client()

totalUsers = [{'userID': 'QzzucRibfSahbUGwr2PGuhFSU242', 'points': 5482}, {'userID': '5lyU0TCyqRcTD3y7Rs2FGV8h2Sd2', 'points': 832}]
for d in totalUsers:
    # db.collection('users').document(d['userID']).update({"Totalpoints": d["points"], "points": d["points"]})
    
    # print(d["userID"])
    getPreviousPointsOfUsers = db.collection('users').document(d["userID"]).get()
    # print(getPreviousPointsOfUsers)
    iterable = getPreviousPointsOfUsers.to_dict()
    iterating = firestore.Increment(iterable["Totalpoints"])
    print(iterating)

    # for user in getPreviousPointsOfUsers:
    #     user_iterableDocs = user.to_dict()
    #     print(user_iterableDocs)

