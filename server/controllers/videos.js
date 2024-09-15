const axios = require("axios");

const getYouTubeResults = async (query) => {
  const queryVideo = `${query}  education`
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          part: "snippet",
          q: queryVideo,
          type: "video",
          key: process.env.YOUTUBE_API_KEY,
          maxResults: 6,
          order: "viewCount",
          // relevanceLanguage : "en"
        },
      }
    );

    const videos = response.data.items;
    
    const videoIds = response.data.items.map((item) => item.id.videoId);

    const result = videos.map((video) => ({
      title: video.snippet.title,
      description: video.snippet.description,
      channelTitle: video.snippet.channelTitle,
      image: video.snippet.thumbnails.medium.url,
      link: `https://www.youtube.com/watch?v=${video.id.videoId}`,
      publishTime: video.snippet.publishTime,
    }));
    return { result, videoIds };
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getVideoStatistics = async (videoIds) => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/videos`,
    {
      params: {
        part: "statistics",
        id: videoIds.join(","),
        key: process.env.YOUTUBE_API_KEY,
      },
    }
  );

  return response.data.items.map((video) => ({
    videoId: video.id,
    views: video.statistics.viewCount,
    likes: video.statistics.likeCount,
  }));
};

const getYoutubeVideos = async (query) => {
  const { result, videoIds } = await getYouTubeResults(query);
  const data = await getVideoStatistics(videoIds);

  const videosData = result.map((item, index) => {
    const d = data[index];
    return { ...item, ...d };
  });

  return videosData ;
};

module.exports = getYoutubeVideos
