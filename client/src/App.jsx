import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './componenets/Search'
import SectionsComponent from './componenets/SectionsComponent'
import { useEffect } from 'react'
import Navbar from './componenets/Navbar'

function App() {
    const [data, setData] = useState(null);
    const [searchData, setSearchData] = useState();
    // const [searchQuery, setSearchQuery] = useState('');
    // const [filters, setFilters] = useState({
    //   videos: true,
    //   articles: true,
    //   academic: true,
    //   blogs: true,
    // });
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Build query params based on filters and search query
          const queryParams = new URLSearchParams();
  
          // Only send `q` if it's not empty
          if (searchData.q) {
            queryParams.append('q', searchData.q);
          }
  
          // Append filter parameters only if their value is `false`
          if (!searchData.videos) {
            queryParams.append('videos', 'false');
          }
          if (!searchData.articles) {
            queryParams.append('articles', 'false');
          }
          if (!searchData.academic) {
            queryParams.append('academic', 'false');
          }
          if (!searchData.blogs) {
            queryParams.append('blogs', 'false');
          }
  
          // Fetch data with constructed query params
          const response = await fetch(`http://localhost:5000/search?${queryParams.toString()}`);
          const fetchedData = await response.json();
          setData(fetchedData);
          console.log(fetchedData);
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [searchData]);

  return (
    <div className='w-full bg-base-300 font-roboto'>
      <Navbar />
    <Search setSearchData={setSearchData} />
    <div className="max-w-5xl mx-auto">

    <SectionsComponent data={data} filters={searchData}/>
    </div>
    </div>
  )
}

export default App
