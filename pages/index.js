import { Header } from "@/components/Header"
import { Slider } from "@/components/Slider"
import { Content } from "@/components/Content"
import { Latest } from "@/components/Latest"
import { Footer } from "@/components/Footer"
import { LittleConatiner } from "@/components/LittleContainer"
import {Countries} from "@/components/Countries"


export default function index(){
  return <div className="flex lg:gap-24 flex-col">
    <div>
      <Header/>
    </div>
      <div className="">
        <Slider/>
      </div>
      <div className="">
        <Content/>
      </div>
      <div>
        <Latest/>
      </div>
      <div>
         <Footer/>
      </div>
      
  </div>
}