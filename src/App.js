import React, { useState, useEffect } from "react";
import './App.css';
import Article from './Article'

function App() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://hn.algolia.com/api/v1/search?query=react")
    .then((response) => response.json())
    .then((response) => {
        const newArticles = response.hits.map((result) => ({
            text: result.title,
            url: result.url,
            author: result.author,
            points: result.points,
            num_comments: result.num_comments
        }))
      setArticles(newArticles);
      setQuery(response.query);
    })
    //throw the error
    .catch(err => alert(err));
}, []);
  return (

    <div className="App">
      <div className="sidebar"></div>
      <div className="main-content">
      {articles.map((article, index) => (
          <Article
            key={index}
            index={index}
            article={article}
          />
          ))}
      </div>
      </div>
  );
}

export default App;
