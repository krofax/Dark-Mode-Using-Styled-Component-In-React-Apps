import React, { useState, useEffect } from "react";
import "./App.css";
import dummyData from "./data";
import CardList from "./components/CardList";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideos(dummyData);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
      <>
        <div className="App">      
          {
            videos.map((list, index) => {
              return (
                <section key={index}>
                  <h2 className="section-title">{list.section}</h2>
                  <CardList list={list} />
                  <hr />
                </section>
              );
            })}
        </div>
      </>
    
  );
};

export default App;
