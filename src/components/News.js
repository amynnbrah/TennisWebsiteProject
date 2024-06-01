// src/components/News.js
import React, { useState, useEffect } from 'react';

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch news data from the backend
    fetch('/api/news')
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div>
      <h2>News</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
