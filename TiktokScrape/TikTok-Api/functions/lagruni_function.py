from TikTokApi import TikTokApi


with TikTokApi() as api:
    tag = api.hashtag(name="vernacci")
    print(tag.info()) 
    listOfVideos = []
    listOfVideoAuthor = []
    listOfVideoLikes = []
    for video in tag.videos():
        listOfVideos.append(video.id)
        listOfVideoAuthor.append(video.author.username)
        listOfVideoLikes.append(video.stats)
    print("Videos", listOfVideos)  
    print("Authors", listOfVideoAuthor)  
    print("Stats", listOfVideoLikes)  

    # for id in listOfVideos: # A List
    #     tiktok_video_id = id
    #     video = api.video(id=tiktok_video_id)
    #     print(id)
    #     print(video.info())


        # # [print(comment) for comment in video.comments()]
        # for comment in video.comments():
        #     print(comment)
