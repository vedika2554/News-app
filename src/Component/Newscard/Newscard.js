import React from 'react'
import "./Newscard.css"
function Newscard({author,title,description,url,urlToImage,publishedAt,content}){
    return(
        <div className="newscard" >
                <img src={urlToImage}alt="" className="news-article-img"/>
                <h1 className='article-title'>{title}</h1>
                 <div className="article-info">
                    <p className="article-author">{author}</p>
                    <p className="article-publishedAt">{publishedAt}</p>
                 </div>
                  <p className="article-description">{description}</p>

                  <a href={url} target='blank' className='btn-read-more'>Read more</a>
                </div>
    )
}
export default Newscard