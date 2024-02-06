import Link from "next/link"

export function SliderDemo({article}){
    return <div className="hidden lg:flex relative flex-col">
        <Link href={article.path}>
    <img className="rounded-2xl object-cover  aspect-video h-full w-full" src={article.cover_image} />
    <div className="absolute  w-1/2 bg-white left-1 bottom-1 flex flex-col rounded-xl gap-6 p-8 xl:p-10 2xl:p-12" >
        <div className="flex flex-col items-start gap-2">
            <div className="w-2/12">
            <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                <p className="text-sm font-medium text-white">{article.tag_list[0]}</p>
             </button>
            </div>
            <div className="  lg:font-semibold xl:text-2xl 2xl:text-3xl 2xl:leading-10">
               {article.title}
            </div>
        </div>
        <div>
            <p className="text-base font-normal text-gray-400">{article.readable_publish_date}</p>
        </div>
    </div>
        </Link>
    
</div>
}