import firebase_admin
import pyrebase
from firebase_admin import credentials, firestore
cred = credentials.Certificate('ServiceAccountKey.json')
default_app = firebase_admin.initialize_app(cred)
db = firestore.client()
firebase = pyrebase.initialize_app(cred)
storage = firebase.storage()
print(storage)
# ----- CRON JOB TO UPDATE POINTS OF EACH *LAGRUNI* VIDEO AND UPDATE TOTAL POINTS AND INCREMENT POINTS OF EACH USER
# Could an alternative be to update the video points upon like, and users' points instead of this Cron?

# 1) Pull all videos to calculate in order to increment
# 2) Pull the user points to increment

# 1)
allVideos = db.collection_group("productMainESGFeedReviews").stream()
# a) Calculate points of each video
# b) Group all videos under user, and increment points

# a) THIS UPDATES ALL THE VIDEOS POINTS
# def updateVideosPoints():
dfusersPoints = [] # Array 1 Lagruni videos & update Videos' points
for video in allVideos:
    video_iterableDocs = video.to_dict()
    for key in video_iterableDocs:
        if key == "likes":
            newTotal = ((video_iterableDocs[key] * 4) + (video_iterableDocs["comments"] * 10)) + (250)
            dfusersPoints.append({"userID": video_iterableDocs["userID"], "points": newTotal})
            if (newTotal == video_iterableDocs["points"]): # If the points are the same, don't need to update
                print("Likes/Comments the same, no update")
                continue
            else:
                db.collection('products').document(video_iterableDocs["productID"]).collection('productMainESGFeedReviews').document(video.id).update({"points": newTotal}) 
                print("Updated Points of Each Video")
            break
        else:
            continue

# b) THIS UPDATES ALL THE USERS POINTS
# def updateUsersPoints():
totalUsers = {} # Update Users' points total of all videos E.g. [{'userID': 'Qzz', 'points': 5732}, {'userID': '5ly', 'points': 832}]
for d in dfusersPoints:
    if d['userID'] not in totalUsers:
        totalUsers[d['userID']] = d.copy() # to not modify original
    else:
        totalUsers[d['userID']]['points'] += d['points']
totalUsers = list(totalUsers.values())
for users in totalUsers:
    getPreviousPointsOfUsers = db.collection('users').document(users["userID"]).get()
    iterable = getPreviousPointsOfUsers.to_dict()
    print(iterable["Totalpoints"])
    incrementPoints = users['points'] - iterable["Totalpoints"] # NewCalculatedPoints - PreviousCalculatedPoints
    db.collection('users').document(users["userID"]).update({"Totalpoints": users["points"], "points": firestore.Increment(incrementPoints)}) # Update Totalpoints and increment points of each user
    # print("Updated Users' Points")

# THIS CROSSPOSTS VIDEOS AFTER UPDATING POINTS
# def crosspost():
    getVideos = db.collection_group("productMainESGFeedReviews").stream()
    
    for video in getVideos:
        video_iterableDocs = video.to_dict()
        for key in video_iterableDocs:
            if key['points'] >= 500: # A FIXED USERID
                makeContainer = fetch (graph.facebook.com/17841405822304914/media?video_url=video.url) mode=POST
                if makeContainer.container_id == true:
                    publish = fetch (graph.facebook.com/17841405822304914/media_publish?creation_id=container_id) mode=POST
                    if publish.id == true:
                        print("1 Posted Reel {container_id}")
                    else:
                        print("Publishing {container_id} Failed")
    print("Reel Crosspost Complete")



