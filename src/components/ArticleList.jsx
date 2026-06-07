import React from "react";
import Article from './Article'

function ArticleList({posts}) {
    return(
        <main>
            {/* Map all the posts in the array to key values of the Article */}
            {posts.map(post => 
                <Article
                    key={post.id}
                    title={post.title}
                    date={post.date}
                    preview={post.preview}
                    minutes={post.minutes}
                />
            )}
        </main>
    );
}
export default ArticleList;