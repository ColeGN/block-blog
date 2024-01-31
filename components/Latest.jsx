import { LatestHead } from "./LatestHead"
import { LatestCard } from "./LatestCard"
import { useEffect, useState } from "react"

export function Latest(){
    const [articles, setArticles] = useState([])

    useEffect(()=>{
        fetch('https://dev.to/api/articles?username=nathan_tarbert')
            .then((response)=>response.json())
            .then((data)=>{
                setArticles(data)
            })
    },[])
    return <div className="flex flex-col items-start gap-7 w-10/12 lg:flex lg:flex-col lg:mx-auto lg:w-8/12 lg:gap-8">
        <div className="ml-8">
            <LatestHead/>
        </div>
        <div className="flex flex-col gap-7 lg:grid lg:grid-cols-3 lg:gap-5">
            {articles.map((article)=>(
                <LatestCard key={article.id} article={article}/>
            ))}
        </div>
        <div className="lg:flex lg:py-3 lg:px-5 lg:justify-center lg:items-center lg:border lg:border-gray-500 lg:rounded-md mx-auto">
           <a href="" className="hidden lg:flex lg:font-medium lg:text-base lg:text-gray-500 lg:align-center lg:text-center">Load More</a>
        </div>
    </div>
}