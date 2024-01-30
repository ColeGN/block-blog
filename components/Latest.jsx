import { LatestHead } from "./LatestHead"
import { LatestCard } from "./LatestCard"

const sampleArticle = {
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
    category: "Design",
    image: "https://images.unsplash.com/photo-1483652336121-476f6270c7d3?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}
export function Latest(){
    return <div className="hidden lg:flex flex-col mx-auto w-8/12 gap-8">
        <div>
            <LatestHead/>
        </div>
        <div className="grid grid-cols-3 gap-5">
            <LatestCard article={sampleArticle}/>
            <LatestCard article={sampleArticle}/>
            <LatestCard article={sampleArticle}/>
            <LatestCard article={sampleArticle}/>
            <LatestCard article={sampleArticle}/>
            <LatestCard article={sampleArticle}/>
            <LatestCard article={sampleArticle}/>
            <LatestCard article={sampleArticle}/>
            <LatestCard article={sampleArticle}/>
        </div>
    </div>
}