import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Latest } from "@/components/Latest"
import { LatestHead } from "@/components/LatestHead"

export default function Blog(){
    return <div>
        <div>
            <Header/>
        </div>
       <div>
            <Latest/>
       </div>
        <div>
            <Footer/>
        </div> 
    </div>
}