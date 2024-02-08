import Link from "next/link"
import { useState, useEffect } from "react"
import { Latest } from "./Latest";
import { checkIsOnDemandRevalidate } from "next/dist/server/api-utils";


export function LatestHead({setArticles}){
    const [category, setCategory] = useState("all");
   useEffect(()=>{
    fetch(`https://dev.to/api/articles?username=nathan_tarbert&per_page=9&page=1&tag=${category[0]}`)
    .then((response)=>response.json())
    .then((data)=>setCategory(data))
   },[category]);

   const Changer= async(cat)=>{
    const response =await fetch(
        `https://dev.to/api/articles?username=nathan_tarbert&per_page=9&page=1&tag=${category[0]}`
    );
    const dataJson = await response.json();
    setArticles(dataJson)
   }

    return <div className="flex flex-col items-start gap-8 ">
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
}