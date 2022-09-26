import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList(){

  const postList = blogData.posts.map(post => <Article key={post.title} title={post.title} preview={post.preview} date={post.date} />)
  
  return(
    <main>{postList}</main>
  )
}

export default ArticleList