import React from "react";
import Loading from "./Loading";
import NewsCard from "./NewsCard";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ category, setProgress }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  const updateNews = async () => {
    try {
      setProgress(20);
      setLoading(true);
      const url = `https://newsapi.org/v2/top-headlines?category=${category}&pagesize=5&page=${page}&apiKey=${apiKey}`;

      let response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      let parsedData = await response.json();

      if (!parsedData.articles) {
        throw new Error("No articles found");
      }

      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setProgress(100);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    document.title = `DailyNews- ${capitalizeFirstLetter(category)}`;
    updateNews();
  }, [category]);

  const fetchMoreData = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?category=${category}&pagesize=5&page=${
        page + 1
      }&apiKey=${apiKey}`;
      setPage(page + 1);

      let response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      let parsedData = await response.json();

      if (!parsedData.articles) {
        throw new Error("No articles found");
      }

      setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error("Error fetching more news:", error);
    }
  };

  return (
    <>
      <div className="container mt-5 pb-3 pt-4  ">
        <h2
          className="text-center border border-primary-subtle rounded-3 py-2"
          style={{ backgroundColor: " #e3f2fd" }}
        >
          Today's{" "}
          <span className="badge bg-danger text-light">
            {capitalizeFirstLetter(category)} News
          </span>
        </h2>

        <InfiniteScroll
          dataLength={articles ? articles.length : 0} // Ensure it doesn't break
          next={fetchMoreData}
          hasMore={articles && articles.length !== totalResults}
          loader={<Loading />}
        >
          <div
            className="border border-primary-subtle rounded-3 "
            style={{ backgroundColor: " #e3f2fd", minHeight: "70vh" }}
          >
            {loading && <Loading />}
            {articles?.map((news) => {
              return (
                <NewsCard
                  key={news?.url}
                  title={news?.title}
                  description={news?.description}
                  author={news?.author}
                  date={news?.publishedAt}
                  src={news?.urlToImage}
                  url={news?.url}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default News;
