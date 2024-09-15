const express = require("express");
const app = express();
const cors = require('cors')
require('dotenv').config();

const axios = require("axios");
const  getAcademicPapers  = require("./controllers/academic");
const getArticles = require("./controllers/articles");
const getBlogs = require("./controllers/blogs");
const getYoutubeVideos = require("./controllers/videos");

app.use(cors());

// app.get("/youtube", async (req, res) => {
//   const {result,videoIds} = await getYouTubeResults();
//   const data = await getVideoStatistics(videoIds);
  
//   const videosData = result.map((item,index)=>{
//     const d = data[index]
//     return {...item,...d}
//   });

//   return res.json({ yo: videosData });
// });
app.get("/academic", async (req, res) => {
  const data = await getAcademicPapers();
  return res.json({data });
});
app.get("/articles", async (req, res) => {
  const data = await getArticles();
  return res.json({data });
});
app.get("/blogs", async (req, res) => {
  const data = await getBlogs();
  return res.json({data });
});









app.get('/search', async (req, res) => {
  const query = req.query.q || ''; // Search query
  const includeYouTube = req.query.videos !== 'false';
  const includeAcademic = req.query.academic !== 'false';
  const includeArticles = req.query.articles !== 'false';
  const includeBlogs = req.query.blogs !== 'false';

  let results = {};

  try {
    // Fetch YouTube videos if included
    if (includeYouTube) {
      const youtubeResults = await getYoutubeVideos(query);
      results.youtube = youtubeResults;
    }
    // console.log(results);
    

    // Fetch Academic Papers if included
    if (includeAcademic) {
      const academicResults = await getAcademicPapers(query);
      results.academic = academicResults;
    }

    // Fetch Articles if included
    if (includeArticles) {
      const articleResults = await getArticles(query);
      results.articles = articleResults;
    }

    // Fetch Blogs if included
    if (includeBlogs) {
      const blogResults = await getBlogs(query);
      results.blogs = blogResults;
    }

    // Send combined results as response
    return res.json({
      success: true,
      data: results,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching data',
      error: error.message,
    });
  }
});




app.listen(5000, () => {
  console.log("Server running on port 5000");
});
