import React, { useState, useEffect } from 'react';

const Search = ({searchData, setSearchData}) => {
  // State for the search input and checkboxes
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    videos: true,
    articles: true,
    academic: true,
    blogs: true,
  });
  // const [searchData, setSearchData] = useState();

  // Handle search input change
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };
  const handleSubmit = (e) => {
    setSearchData({...filters,q:searchQuery});
  };

  // useEffect to handle search and filter changes
  useEffect(() => {
    const params = {
      searchQuery,
      ...filters,
    };

    console.log('Search Params:', params);
    // Logic to handle search and params can be added here

  }, [searchQuery, filters]); // Dependencies: run when searchQuery or filters change

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="mb-6">
        {/* Search Input */}
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search..."
          className="w-full h-12 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Checkboxes */}
      <div className=" flex justify-between flex-wrap">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="videos"
            checked={filters.videos}
            onChange={handleCheckboxChange}
            className="mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="videos" className="text-gray-700">Videos</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="articles"
            checked={filters.articles}
            onChange={handleCheckboxChange}
            className="mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="articles" className="text-gray-700">Articles</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="academic"
            checked={filters.academic}
            onChange={handleCheckboxChange}
            className="mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="academic" className="text-gray-700">Academic Papers</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="blogs"
            checked={filters.blogs}
            onChange={handleCheckboxChange}
            className="mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="blogs" className="text-gray-700">Blogs</label>
        </div>
      </div>

      <div className="mt-6">
          <button
            type="submit"
            className="w-full"
            onClick={()=>handleSubmit()}
          >
            <div className="group [transform:translateZ(0)] px-6 py-3 rounded-lg bg-gray-200 overflow-hidden relative before:absolute before:bg-sky-600 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-[100%_100%] before:scale-x-0 hover:before:origin-[0_0] hover:before:scale-x-100 before:transition before:ease-in-out before:duration-500">
                <span className="relative z-0 text-black group-hover:text-gray-200 transition ease-in-out duration-500">Search</span>
            </div>
          </button>
        </div>

    </div>
  );
};

export default Search;
