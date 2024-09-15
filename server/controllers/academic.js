const axios = require('axios');


const getAcademicPapers = async (query) => {
    try {
      const response = await axios.get(
        `https://serpapi.com/search.json`,
        {
          params: {
            engine:"google_scholar",
            q:query,
            hl:"en",
            api_key: process.env.GOOGLE_SCHOLAR_API_KEY
          },
        }
      );
      
      const papers = response.data.organic_results;
      const result =  papers.map(paper => ({
        title: paper.title,
        link: paper.link,
        description: paper.snippet,
        author: (paper?.publication_info?.authors?.length > 0) ? paper.publication_info.authors[0].name : "no",
        cited: paper.inline_links.cited_by.total,
      }));
      return result.slice(1,6);
    } catch (error) {
      console.log(error);
      return error;
    }
  };


module.exports = getAcademicPapers