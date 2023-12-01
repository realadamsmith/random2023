import firebase_admin
from firebase_admin import credentials, firestore
from TikTokApi import TikTokApi
import pprint
import asyncio
cred = credentials.Certificate('ServiceAccountKey.json')
default_app = firebase_admin.initialize_app(cred)
db = firestore.client()
pp = pprint.PrettyPrinter(indent=4)
# ----- CRON JOB TO SCRAPE TIKTOK AND 
# We could filter out userIDs that are not in our DB.
"""
Two approaches: 1) Calculate all videos of each user and update without storing in DB, or 2) Store all video data of each user in DB and update.
"""
def fetchDailyVideos():
    with TikTokApi() as api:
        """
        Input Lagruni into name field to return all videos CXd by Lagruni or customer CXd.
        """
        tag = api.hashtag(name="PhillipsSmartBulbs") 
        # print(tag.info()) 
        videos = []
        authors = []
        stats = []
        for video in tag.videos():
            videos.append(video.id)
            authors.append(video.author.username)
            stats.append(video.stats)
            # Tiktok hashtag Dataset
        listOfVideoScrapeDicts = [{ "videoId" : thing, "authors" : s, **d} for thing, s, d in zip(videos, authors, stats)]
        print(listOfVideoScrapeDicts)
        for video in listOfVideoScrapeDicts:
            #1 Our Video from User for Previous data
            #2 Our Users' Points Dataset Where > then Get
            
            #1 Our Video from User for Previous data
            childVideoRef = db.collection_group("crosspost").where("tiktokVideoID", "==", video["videoId"]).stream() # Search for existing doc
            x = list(childVideoRef)
            ## 7/21/22 Last thing I was doing, was seeing which users were being called
            if x == []: # Create new doc if WE ARE NOT ALREADY KEEPING TRACK OF THAT VIDEO
                userOfNewVideoToGetProdID = db.collection('users').where("tiktokUser", "==", video['authors']).stream()
                for singleVideoMatchOnly in userOfNewVideoToGetProdID: # Each is the ID of the User/Author
                    docIterableDict2 = singleVideoMatchOnly.to_dict() # This is the document data we will add to the new doc
                    print(docIterableDict2, "docIterableDict2") 
                # Get their users docID
                setNewDoc = db.collection('users').document(singleVideoMatchOnly.id).collection('crosspost').document(video['videoId']).set({
                    "tiktokVideoID": video["videoId"],
                    "likes": video["diggCount"],
                    "comments": video["commentCount"],
                    "shareCount": video["shareCount"],
                    "playCount": video["playCount"],
                    "tiktokUser": video["authors"],
                    "tiktokUserID": singleVideoMatchOnly.id,
                    })
                print(setNewDoc)
            else: # Update existing doc
                print("Updated doc")
                # userOfExistingVideoToGetProdID = db.collection_group("crosspost").document(x[0].id).update(video)

            # for doc in childVideoRef:
            #     if doc.exists:
            #         array.append(doc.to_dict())
            #     else:
            # #     array.append(doc.to_dict())

            # for singleVideoMatchOnly in childVideoRef:
            #     if singleVideoMatchOnly.exists:
            #     else:
                # array.append(singleVideoMatchOnly.to_dict())
                # docIterableDict2 = singleVideoMatchOnly.to_dict() # This is the document data
                # if array == None:
                # else:
         

            # parentVideoRef = db.collection_group("productMainESGFeedReviews").where("tiktokVideoID", "==", video["authors"]).stream()
            # for singleVideoMatchOnly in parentVideoRef:
            #     docIterableDict2 = singleVideoMatchOnly.to_dict() # This is the document data
               
                # docUpdateRef = db.collection_group('productMainESGFeedReviews').document(singleVideoMatchOnly.id)
                # docIterableDict = docUpdateRef.get().to_dict()
                # userDocIDRef = singleVideoMatchOnly.get().to_dict()
                # prevLikes = docUpdateRef.get().to_dict()
                # # userDocID = (userDocIDRef.id)
                # docIterableDict = docUpdateRef.get().to_dict()

                #  prevPoints = the numbers that come from this video subcollection doc.
              #    pointsCalc = ((video["diggCount"] * 0.3) + (video["commentCount"] * 0.6) + (video["shareCount"] * 1) 
              #    # - prevPoints 
              #    )
              #    print(pointsCalc)
                #  totalPointsCalc = (prevLikes - (video.diggCount * 0.3) + (video.commentCount * 0.6) + (video.shareCount * 1)
                #  increment = firestore.Increment(points)


            #2 Our Users' Points Dataset Where > then Get
            # singleUserRef = db.collection('users').where("tiktokUser", "==", video['authors'])
            # docGet = singleUserRef.stream()
            # for eachTiktokUserMatchDocID in docGet:
            #     docUpdateRef = db.collection('users').document(eachTiktokUserMatchDocID.id)
            #     docIterableDict = docUpdateRef.get().to_dict()
           
                # docUpdateRef.update({
                #     'points': pointsCalc,
                #     # 'Totalpoints': totalPointsCalc
                # })

            # prevLikes = docref.get().to_dict()['likes']
            # prevComments = docref.get().to_dict()['comments']
            # prevShareCount = docref.get().to_dict()['shareCount'] 

            #   likes = (video.diggCount  - prevLikes )
            #   comments = (prevComments - (video.commentCount ))
            #   shareCount = (prevShareCount - (video.shareCount ))

fetchDailyVideos()