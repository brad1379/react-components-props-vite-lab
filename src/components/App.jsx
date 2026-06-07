import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About name={blogData.name} about={blogData.about} image={blogData.image}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
