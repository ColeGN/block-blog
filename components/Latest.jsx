import { LatestHead } from "./LatestHead"
import { LatestCard } from "./LatestCard"
import { useEffect, useState } from "react"
import { Loader } from "./Loader"

// const articleCategory = [
//     "webdev",
//     "programming",
//     "tutorial",
//     "opensource"
// ]

export function Latest(){
    const [articles, setArticles] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    // const [Path, setPath] = useState();
    // const [filterArticle, setfilterArticle] = useState(Path)
    // console.log(Path)

   
    

    useEffect(()=>{
        fetch('https://dev.to/api/articles?username=nathan_tarbert&per_page=9&page=1')
            .then((response)=>response.json())
            .then((data)=>{
                setArticles(data)
            })
    },[])


    //    const filteredArticles = articles.filter((article)=> {
    //        if(article.tag_list.includes(filterArticle)) {
    //            return article
    //        }
    //    })

    // const [filterArticle, setfilterArticle] = useState("")
    //  function Changer(){
          

    //       const filteredArticles = articles.filter((article)=> {
    //           if(article.tag_list.includes(filterArticle)) {
    //               return article
    //           }
    //       })
    //  }
    function loadMore(){
        fetch(`https://dev.to/api/articles?username=nathan_tarbert&per_page=9&page=${currentPage + 1}`)
            .then((response)=>response.json())
            .then((data)=>{
                setArticles([...articles, ...data])
                setCurrentPage(currentPage + 1)
            })
    }

    

    return <div className="flex flex-col items-start gap-7 w-10/12 lg:flex lg:flex-col lg:mx-auto lg:w-8/12 lg:gap-8">
        <div className="w-full flex justify-between">
           <div className="flex justify-between">
                <div className="flex flex-col items-start gap-8 ">
                <div>
                <p className="text-2xl font-bold">All Blog Post</p>
                </div>
                <div className="hidden lg:flex lg:justify-between lg:items-center">
                <div className="flex items-center gap-5">
                <p onClick={()=>Changer("all")} className="text-amber-200 text-xs font-bold">All</p>
                <p onClick={()=>Changer("webdev")} className="text-gray-600 text-xs font-bold">Webdev</p>
                <p onClick={()=>Changer("opensource")} className="text-gray-600 text-xs font-bold">Opensource</p>
                <p onClick={()=>Changer("beginners")} className="text-gray-600 text-xs font-bold">Beginners</p>
                <p onClick={()=>Changer("bubble")} className="text-gray-600 text-xs font-bold">Bubble</p>
                <p onClick={()=>Changer("sbom")} className="text-gray-600 text-xs font-bold">Sbom</p>
            </div>
        </div>
        </div>
                
           </div>
            
        </div>
        <div className="flex flex-col gap-7 lg:grid lg:grid-cols-3 lg:gap-5">
            {articles.map((article)=>(
                <LatestCard key={article.id} article={article}/>
            ))}
        </div>
        <div className="hidden lg:flex lg:py-3 lg:px-5 lg:justify-center lg:items-center  mx-auto">
           <button onClick={loadMore} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" ><p className="hidden lg:flex lg:font-medium lg:text-base lg:text-red-400 lg:align-center lg:text-center">Load More</p></button>
        </div>
    </div>
}
{/* <div>
                    <LatestHead setArticles={setArticles}/>
                </div> */}
                {/* <div>
                <label for="underline_select" class="sr-only">Underline select</label>
            <select defaultValue={Path} onChange={event=>setPath(event.target.value)} id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            <option selected>Choose a path</option>
            <option value="webdev">webdev</option>
            <option value="opensource">opensource</option>
            <option value="beginners">beginners</option>
            <option value="bubble">bubble</option>
            <option value="sbom">sbom</option>
            </select>
                </div> */}