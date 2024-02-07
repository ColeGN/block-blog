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
        `https://dev.to/api/articles?tag=${cat[0]}&per_page=9`
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
            <div className="">
            {/* <label for="underline_select" class="sr-only">Underline select</label>
            <select defaultValue={Path} onChange={event=>setPath(event.target.value)} id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            <option selected>Choose a path</option>
            <option value="webdev">webdev</option>
            <option value="opensource">opensource</option>
            <option value="beginners">beginners</option>
            <option value="bubble">bubble</option>
            <option value="sbom">sbom</option>
            </select> */}
                
            </div>
        </div>
    </div>
}