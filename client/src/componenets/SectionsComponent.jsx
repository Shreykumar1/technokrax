import React from 'react';

const SectionsComponent = ({ data, filters }) => {
  // const searches = {
  //   youtube: [
  //     { id: 1, title: "React Tutorial", thumbnail: "https://via.placeholder.com/150", url: "#" },
  //     { id: 2, title: "Tailwind CSS Guide", thumbnail: "https://via.placeholder.com/150", url: "#" },
  //     { id: 3, title: "Next.js Crash Course", thumbnail: "https://via.placeholder.com/150", url: "#" },
  //   ],
  //   academicPapers: [
  //     { id: 1, title: "Understanding React Hooks", description: "A comprehensive study of React Hooks and their applications.", url: "#" },
  //   ],
  //   articles: [
  //     { id: 1, title: "Why You Should Learn Next.js", description: "An article about the benefits of learning Next.js.", url: "#" },
  //   ],
  //   blogs: [
  //     { id: 1, title: "My Journey Learning Full-Stack Development", description: "A blog about personal experiences learning full-stack.", url: "#" },
  //   ],
  // }
  console.log(data);
  
  if(!data || data.success === false){
    return <h1>Search To see your results</h1>
  }

  const formatNumber = (num) => {
    if (num >= 1e6) {
      return (num / 1e6).toFixed(1) + 'M'; // Millions
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(1) + 'K'; // Thousands
    }
    return num.toString(); // Less than 1000
  };
  const { youtube, academic, articles, blogs } = data.data;

  return (
    <div className="mt-12 space-y-12 pb-10">
      {/* YouTube Videos Section */}
      {filters.videos && youtube && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">YouTube Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {youtube.map((video) => (
              <div key={video.videoId} className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                <img src={video.image} alt={video.title} className="w-full h-48 object-cover" />
                <div className="px-4">
                  <h3 className="text-lg font-medium">{video.title}</h3>
                  <a target='_blank' href={video.link} className="text-blue-500 mt-2 block">Watch Video</a>
                </div>
                <div className="flex items-center flex-wrap p-4">
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                     Views- {formatNumber(video.views)}
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    Likes - {formatNumber(video.likes)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Academic Papers Section */}
      {filters.academic && academic && Array.isArray(academic) && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Academic Papers</h2>
          <div className="space-y-4">
            {academic.map((paper) => (
              <div key={paper.id} className="border border-gray-300 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold">{paper.title}</h3>
                <p className="text-gray-600 mt-2">{paper.description}</p>
                <a href={paper.link} target='_blank' className="text-blue-500 mt-2 block cursor-pointer">Read More</a>
                <p className="text-slate-500 my-2">Cited - {formatNumber(paper.cited)}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Articles Section */}
      {filters.articles && articles && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Articles</h2>
          <div className="space-y-4">
            {articles.slice(1,6).map((article,index) => (
              <div key={article.index} className="border border-gray-300 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold">{article.title}</h3>
                <p className="text-gray-600 mt-2">{article.snippet}</p>
                <a href={article.link} target='_blank' className="text-blue-500 mt-2 block">Read Article</a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Blogs Section */}
      {filters.blogs && blogs && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Blogs</h2>
          <div className="space-y-4">
            {blogs.slice(1,6).map((blog,index) => (
              <div key={blog.index} className="border border-gray-300 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold">{blog.title}</h3>
                <p className="text-gray-600 mt-2">{blog.snippet}</p>
                <a href={blog.link}target='_blank' className="text-blue-500 mt-2 block">Read Blog</a>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default SectionsComponent;
