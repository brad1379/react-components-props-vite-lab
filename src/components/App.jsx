import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import Article from "./Article";



function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About name={blogData.name}/>
      <Article title={blogData.title} date={blogData.date} preview={blogData.preview} />
    </div>
  );
}

export default App;
