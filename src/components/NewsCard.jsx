import React, { useState } from "react";
import { FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  // const [isExpanded, setIsExpanded] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="card bg-base-100 shadow-xl p-4 relative">
      {/* Top-right Icons */}
      <div className="absolute top-3 right-3 flex space-x-3">
        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={`text-lg ${
            isBookmarked ? "text-yellow-500" : "text-gray-500"
          } hover:text-yellow-600`}
        >
          <FaBookmark />
        </button>
        <button
          onClick={() =>
            navigator.share({ title: news.title, url: news.image_url })
          }
          className="text-lg text-gray-500 hover:text-blue-600"
        >
          <FaShareAlt />
        </button>
      </div>

      {/* Author Info */}
      <div className="flex items-center space-x-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-semibold">{news.author.name}</h3>
          <p className="text-sm text-gray-500">
            {new Date(news.author.published_date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Thumbnail */}
      <img
        src={news.thumbnail_url}
        alt={news.title}
        className="w-full h-48 object-cover mt-3 rounded-lg"
      />

      {/* Title & Summary */}
      <div className="mt-3">
        <h2 className="text-lg font-bold">{news.title}</h2>
        <p className="text-sm text-gray-700">
          {/* {isExpanded ? news.details : `${news.details.slice(0, 100)}...`} */}
          {`${news.details.slice(0, 100)}...`}
          <Link
            to={`/news-details/${news.id}`}
            className="text-primary font-semibold cursor-pointer hover:underline"
          >
            Read More
          </Link>
        </p>
      </div>

      {/* Badge & Views */}
      <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
        <span className="badge badge-primary">{news.rating.badge}</span>
        <div className="flex items-center space-x-2">
          <FaEye />
          <span>{news.total_view}</span>
        </div>
      </div>

      {/* Read More Button */}
      {/* <div className="flex justify-end mt-4">
        <button
          className="btn btn-primary text-white"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      </div> */}
    </div>
  );
};

export default NewsCard;
