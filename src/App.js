import React, { useState, useEffect } from "react";
import Header from "./Header";

import './App.css';
import Article from './Article'

function App() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const completeButton = index => { 
    const newArticles = [...articles]; 
    newArticles[index].isCompleted = !newArticles[index].isCompleted;
    setArticles(newArticles);
  }; 

  useEffect(() => {
    fetch("https://hn.algolia.com/api/v1/search?query=react")
    .then((response) => response.json())
    .then((response) => {
        const newArticles = response.hits.map((result) => ({
            text: result.title,
            url: result.url,
            author: result.author,
            points: result.points,
            num_comments: result.num_comments, 
            isCompleted: false,
        }))
      setArticles(newArticles);
      setQuery(response.query);
    })
    //throw the error
    .catch(err => alert(err));
}, []);
  return (

    <>
    <Header />
    <div className="App"> 
        <div className="wrapper"> 
      <div className="sidebar"></div>
      <div className="main-content">
      {articles.map((article, index) => (
          <Article
            key={index}
            index={index}
            article={article}
            completeButton={completeButton}
          />
          ))}
      </div>
      </div>
      </div>
      </>
  );
}

export default App;
