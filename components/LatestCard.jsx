export function LatestCard({ article }){
    return <div className="p-4 border rounded">
        <img className="object-cover mb-4 rounded aspect-video" src={article.image}/>
        <div className="p-2">
            <span className="px-[10px] py-1 text-blue-700 bg-blue-200 rounded text-sm mb-4 inline-block">{article.category}</span>
            <h2 className="mb-5 text-lg font-bold">{article.title}</h2>
            <div className="text-gray-500">{article.date}</div>
        </div>
    </div>
}