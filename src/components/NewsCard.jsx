import React from "react";

const NewsCard = ({ title, description, src, author, date, url }) => {
  return (
    <div className="card mb-3 d-inline-block m-3 mh-60" style={{ width: "18rem" }}>
      <img
        src={src ? src : "./download1.jpg"}
        style={{ height: "180px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">
          {title
            ? title?.slice(0, 60)
            : "Today's big news, coming from our Daily News page"}
          ...
        </h5>
        <p className="card-text">
          {description
            ? description?.slice(0, 85)
            : "Click the read more button to read the detailed news on the page"}
          ...
        </p>
        <p className="text-muted">
          By {author ? author?.slice(0, 15) : "Unknown"} on{" "}
          {new Date(date).toGMTString()}
        </p>
        <a href={url} target="_blank" className="btn btn-sm btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
