import React,{useState,useEffect}from 'react'
import axios from "axios"
import "./News.css"

import Newscard from './../../Component/Newscard/Newscard';
function Home(){
    const [news,setNews]=useState([])
    const [searchQuery,setSearchQuery]=useState("pune")

    const loadNews=async() =>{
try{
    const response=await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}=2023-10-16&to=2023-10-16&sortBy=popularity&apiKey=.${process.env.REACT_APP_API_KEY}
    `);
   console.log(response)
    setNews(response.data.articles)
}

catch(error){
    console.log(error)
}
}
    useEffect(() =>{
        loadNews()
    },[])

    useEffect(()=>{
        loadNews()
    },[searchQuery])
return (
    <div>
        <h1>News App</h1>
        <input 
         type="text"
         className="search-input"
         value={searchQuery}
         onChange={(e)=>{
          setSearchQuery(e.target.value)
          }}/>
    <div className="news-container">
    {
        news.map((newscard,index)=>{
            const {author,title,description,url,urlToImage,publishedAt}=newscard

            return(
               <Newscard author={author} title={title} description={description} url={url}
               urlToImage={urlToImage} publishedAt={publishedAt}  key={index}/>
            )
        })
    }
    </div>
</div>
)}

export default Home