from TikTokApi import TikTokApi

with TikTokApi() as api:
    print("loop")
    for video in api.trending.videos():
        print(video.id)
