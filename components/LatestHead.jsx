export function LatestHead(){
    return <div className="flex flex-col items-start gap-8 ">
        <div>
            <p className="text-2xl font-bold">All Blog Post</p>
        </div>
        <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-5">
                <p className="text-amber-200 text-xs font-bold">All</p>
                <p className="text-gray-600 text-xs font-bold">Design</p>
                <p className="text-gray-600 text-xs font-bold">Travel</p>
                <p className="text-gray-600 text-xs font-bold">Fashion</p>
                <p className="text-gray-600 text-xs font-bold">Technology</p>
                <p className="text-gray-600 text-xs font-bold">Branding</p>
            </div>
            <div>
                <p className="text-gray-600 text-xs font-bold">View All</p>
            </div>
        </div>
    </div>
}