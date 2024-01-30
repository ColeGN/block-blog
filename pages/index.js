import { Header } from "@/components/Header"
import { Slider } from "@/components/Slider"
import { Content } from "@/components/Content"
import { Latest } from "@/components/Latest"
import { LittleConatiner } from "@/components/LittleContainer"

export default function index(){
  return <div className="flex lg:gap-24 flex-col">
    <div>
      <Header/>
    </div>
      <div className="">
        <Slider/>
      </div>
      <div className="hidden lg:flex justify-start m-auto w-8/12">
        <Content/>
      </div>
      <div>
        <Latest/>
      </div>
  </div>
}