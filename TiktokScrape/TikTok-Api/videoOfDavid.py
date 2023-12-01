from TikTokApi import TikTokApi

api = TikTokApi()
print(api.trending)
print(api.trending.videos())
# print(api.trending.videos)
for video in api.trending.videos():
  print("running")
  print(video.author.username)
  