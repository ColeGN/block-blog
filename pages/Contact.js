import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ContactContainer } from "@/components/ContactContainer"
export default function Contact(){
    return <div>
        <div>
            <Header/>
        </div>
        <div>
        {/* <div class="relative">
        <img class="w-full" src="https://www.slingacademy.com/wp-content/uploads/2022/10/night-sky.jpeg" />
        <h1 class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Sling Academy</h1>
        <h2 class="absolute text-3xl text-amber-400 bottom-4 left-1/2 -translate-x-1/2">Bottom Center</h2>
        <h3 class="absolute text-2xl text-blue-300 top-5 left-5">Top Left</h3>
        <h3 class="absolute text-2xl text-green-300 bottom-5 right-5">Bottom Right</h3>
    </div> */}
            <ContactContainer/>
            

  
        </div>
        <div>
            <Footer/>
        </div>
        
       
    </div>
   
}