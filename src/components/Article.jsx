import React from "react";
import ArticleList from "./ArticleList";

function Article({title, date, preview}) {
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <ArticleList />
        </article>
    );
}
export default Article;