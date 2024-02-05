 import { Trending } from "./trending"
 import { useState, useEffect } from "react"

export function Content(){
      const [articles, setArticles] = useState([])
      const [currentPage, setCurrentPage] = useState(1)
    
          useEffect(()=>{
              fetch('https://dev.to/api/articles?username=nevodavid&per_page=4&page=1')
                  .then((response)=>response.json())
                  .then((data)=>{
                      setArticles(data)
                  })
          },[])
     return <div className="hidden lg:flex lg:flex-col lg:items-start lg:gap-8 lg:w-8/12 lg:mx-auto">
         <div>
             <p className="text-2xl font-bold">Trending</p>
         </div>
         <div className="flex items-start gap-5 flex-1 w-full  whitespace-nowrap" >
             <div className="grid grid-cols-4">
             {articles.map((article)=>(
                 <Trending key={article.id} article={article}/>
             ))}
             </div>       
            </div>
     </div>  
}