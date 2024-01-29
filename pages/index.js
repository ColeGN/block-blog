import { Header } from "@/components/Header"
import { Slider } from "@/components/Slider"
import { Content } from "@/components/Content"

export default function index(){
  return <div className="flex gap-24 flex-col">
      <Header/>
      <div className="flex justify-center m-auto  w-8/12">
        <Slider/>
      </div>
      <div className="flex justify-start m-auto w-8/12">
        <Content/>
      </div>
  </div>
}