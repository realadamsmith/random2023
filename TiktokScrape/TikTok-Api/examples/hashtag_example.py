from TikTokApi import TikTokApi


with TikTokApi() as api:
    tag = api.hashtag(name="super")
    print(tag.info()) 
    listOfIDs = []
    for video in tag.videos():
        listOfIDs.append(video.id)
    for id in listOfIDs:
        print(id)
