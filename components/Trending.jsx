 import Link from "next/link"

 export function Trending({article}){
     return <Link href={article.path} className="flex gap-1 border rounded hover:bg-slate-50">
     <img className="object-cover rounded aspect-video" src={article.cover_image}/>
    
 </Link>
 }