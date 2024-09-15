# TechnoKrax

**TechnoKrax** is a powerful web application that aggregates search results from multiple sources like YouTube, academic papers, articles, and blogs. It ranks these results based on factors like views, likes, and relevance, allowing users to find the most important content quickly and efficiently.

## Features

- **YouTube Videos**: Fetches and displays relevant YouTube videos ranked by views and likes.
- **Articles**: Provides links to articles from reputable sources, ranked by relevance.
- **Academic Papers**: Includes links to scholarly articles from sources like Google Scholar or PubMed.
- **Blogs**: Aggregates blog posts and ranks them based on relevance.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

```env
YOUTUBE_API_KEY=
GOOGLE_CUSTOM_SEARCH_API_KEY=
GOOGLE_SEARCH_ENGINE_ID=
GOOGLE_BLOG_SEARCH_ENGINE_ID=
GOOGLE_SCHOLAR_API_KEY=
```

### Steps to Obtain API Keys

#### 1. **YouTube API Key**

- Go to the [Google Cloud Console](https://console.cloud.google.com/).
- Create a new project (or use an existing one).
- Go to **APIs & Services > Credentials**.
- Click on **Create Credentials** and select **API Key**.
- Enable the **YouTube Data API v3** under **Library**.
- Copy the API Key and set it as the value for `YOUTUBE_API_KEY` in your `.env` file.

#### 2. **Google Custom Search API Key**

- Go to the [Google Cloud Console](https://console.cloud.google.com/).
- Under **APIs & Services > Library**, search for **Custom Search API** and enable it.
- Go to **APIs & Services > Credentials**, click on **Create Credentials**, and select **API Key**.
- Copy the API Key and set it as `GOOGLE_CUSTOM_SEARCH_API_KEY` in your `.env` file.

#### 3. **Google Search Engine ID**

- Visit [Google Custom Search Engine](https://cse.google.com/cse/).
- Click on **Create a custom search engine**.
- Fill out the necessary fields, and specify the sites you want to search (e.g., scholarly articles).
- After creating it, click on **Control Panel** and find your **Search Engine ID**.
- Set it as `GOOGLE_SEARCH_ENGINE_ID` in your `.env` file.

#### 4. **Google Blog Search Engine ID**

- Follow the same steps as the **Google Search Engine ID**, but when creating the custom search engine, include relevant blog websites (e.g., Medium, WordPress).
- Once created, retrieve the **Search Engine ID** and set it as `GOOGLE_BLOG_SEARCH_ENGINE_ID` in your `.env` file.

#### 5. **Google Scholar API Key**

- As Google doesn’t provide a direct API for Google Scholar, you might need to use third-party solutions or scraping libraries (e.g., SerpAPI or ScraperAPI).
- Sign up for the service and obtain the API key from the provider you choose.
- Set this key as `GOOGLE_SCHOLAR_API_KEY` in your `.env` file.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Shreykumar1/technokrax.git
    cd server
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables with your keys:
    ```env
    YOUTUBE_API_KEY=your_youtube_api_key
    GOOGLE_CUSTOM_SEARCH_API_KEY=your_google_custom_search_api_key
    GOOGLE_SEARCH_ENGINE_ID=your_search_engine_id
    GOOGLE_BLOG_SEARCH_ENGINE_ID=your_blog_search_engine_id
    GOOGLE_SCHOLAR_API_KEY=your_scholar_api_key
    ```

4. Start the server:
    ```bash
    npm start
    ```
## Installation Frontend

1. Clone the repository:
    ```bash
    git clone https://github.com/Shreykumar1/technokrax.git
    cd client
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

4. Start the server:
    ```bash
    npm run dev
    ```

## Usage

- The app will fetch search results from YouTube, academic papers, articles, and blogs.
- The results are ranked based on views, likes, and relevance.

## API Endpoints

- `/search`: Fetches search results based on the query, with options to filter results (videos, articles, academic, and blogs).

## License

This project is licensed under the MIT License.
