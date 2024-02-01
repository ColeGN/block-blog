import { LatestHead } from "./LatestHead"
import { LatestCard } from "./LatestCard"
import { useEffect, useState } from "react"
import { Loader } from "./Loader"

export function Latest(){
    const [articles, setArticles] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(()=>{
        fetch('https://dev.to/api/articles?username=nathan_tarbert&per_page=9&page=1')
            .then((response)=>response.json())
            .then((data)=>{
                setArticles(data)
            })
    },[])

    function loadMore(){
        fetch(`https://dev.to/api/articles?username=nathan_tarbert&per_page=9&page=${currentPage + 1}`)
            .then((response)=>response.json())
            .then((data)=>{
                setArticles([...articles, ...data])
                setCurrentPage(currentPage + 1)
            })
    }

    if(articles === undefined ) return <Loader/>
    return <div className="flex flex-col items-start gap-7 w-10/12 lg:flex lg:flex-col lg:mx-auto lg:w-8/12 lg:gap-8">
        <div className="w-full">
            <LatestHead/>
        </div>
        <div className="flex flex-col gap-7 lg:grid lg:grid-cols-3 lg:gap-5">
            {articles.map((article)=>(
                <LatestCard key={article.id} article={article}/>
            ))}
        </div>
        <div className="lg:flex lg:py-3 lg:px-5 lg:justify-center lg:items-center  mx-auto">
           <button onClick={loadMore} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" ><p className="hidden lg:flex lg:font-medium lg:text-base lg:text-red-400 lg:align-center lg:text-center">Load More</p></button>
        </div>
    </div>
}