import React, { useState, useEffect } from "react";
import Header from "./Header";
import Article from './Article'
import './App.css';

function App() {
  const url = "https://hn.algolia.com/api/v1/search?query=";
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [appCondition, setAppCondition] = useState("");

 useEffect(() => console.log(appCondition), [appCondition])

 useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    if (articles.length) {
      setAppCondition("success");
    } else {
      setAppCondition("no-results");
    }
  }, [articles]);
 
  const completeButton = index => { 
    const newArticles = [...articles]; 
    newArticles[index].isCompleted = !newArticles[index].isCompleted;
    setArticles(newArticles);
  }; 

  const handleSubmit = (event) => {
    event.preventDefault ()
    fetchArticles()
  }

  const conditionSwitch = () => {
    switch (appCondition) {
      case "loading":
        return (<p>"LOADING..."</p>);
      case "success":
        return (articles.map((article, index) => (
          <Article
            key={index}
            index={index}
            article={article}
            completeButton={completeButton}
          />
          )));
      case "no-results":
        return (<p>"Sorry, nothing to see here. Maybe search something more interesting!" </p>);
      case "error":
        return  (<p>"ooops...It's an error!"</p>);
      default:
        return (<p>"something went very very wrong..."</p>);
    }
  };

  const fetchArticles = () => {
    setAppCondition("loading");
    fetch(`${url}${query || "react"}`)
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
      .catch((err) => setAppCondition("error"));
}

//----RETURN-----
  return (
    <>
    <Header 
      value={query}
      handleSubmit={handleSubmit}
      handleChange={e => setQuery(e.target.value)} 
    />
    <div className="App"> 
        <div className="wrapper"> 
          <div className="sidebar"></div>
           <div className="main-content">
             {conditionSwitch()}
           </div>
        </div>
    </div>
    </>
  );
}

export default App;
