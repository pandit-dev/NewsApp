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

  const apiKey = import.meta.env.VITE_NEWS_API_KEY

  const updateNews = async () => {
    setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&pagesize=${5}&page=${page}&apiKey=${apiKey}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setProgress(100);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
  };

  const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    document.title = `DailyNews- ${capitalizeFirstLetter(category)}`;
    updateNews();
  }, [category]);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&pagesize=${5}&page=${
      page + 1
    }&apiKey=${apiKey}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles?.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
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
          dataLength={articles?.length}
          next={fetchMoreData}
          hasMore={articles.length != totalResults}
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
