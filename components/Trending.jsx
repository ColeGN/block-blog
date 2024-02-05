 import Link from "next/link"

 export function Trending({article}){
     return <Link href={article.path} className="p-4 border rounded hover:bg-slate-50">
     <img className="object-cover mb-4 rounded aspect-video" src={article.cover_image}/>
     <div className="p-2">
         <span className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{article.tag_list[0]}</span>
         <h2 className="mb-5 mt-2 text-lg font-bold">{article.title}</h2>
         <div className="text-gray-500">{article.readable_publish_date}</div>
     </div> 
 </Link>
 }