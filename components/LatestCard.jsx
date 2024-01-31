import Link from "next/link"

export function LatestCard({ article }){
    return <Link href={article.path} className="p-4 border rounded hover:bg-slate-50">
        <img className="object-cover mb-4 rounded aspect-video" src={article.cover_image}/>
        <div className="p-2">
            <span className="px-[10px] py-1 text-blue-700 bg-blue-200 rounded text-sm mb-4 inline-block">{article.tag_list[0]}</span>
            <h2 className="mb-5 text-lg font-bold">{article.title}</h2>
            <div className="text-gray-500">{article.readable_publish_date}</div>
        </div> 
    </Link>
        
        {/* <img className="object-cover mb-4 rounded aspect-video" src={article.cover_image}/>
        <div className="p-2">
            <span className="px-[10px] py-1 text-blue-700 bg-blue-200 rounded text-sm mb-4 inline-block">{article.tag_list[0]}</span>
            <h2 className="mb-5 text-lg font-bold">{article.title}</h2>
            <div className="text-gray-500">{article.readable_publish_date}</div>
        </div> */}
}