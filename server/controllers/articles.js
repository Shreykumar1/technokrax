const axios = require('axios');

const getArticles = async (query) => {
    const response = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
      params: {
        q: query,
        key: process.env.YOUTUBE_API_KEY,
        cx: process.env.GOOGLE_SEARCH_ENGINE_ID,
      },
    });
    console.log(response.data);
    // return response.data;
    
    return response.data.items.map(item => ({
      title: item.title,
      link: item.link,
      snippet: item.snippet,
    }));
  };
//   4082995c80d97437c

module.exports = getArticles
  