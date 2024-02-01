import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { LatestHead } from "@/components/LatestHead"

export default function Blog(){
    return <div>
        <div>
            <Header/>
        </div>
        <div className="relative">
            <img className="relative" src="https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mgqSGtIXQ7yRG4uKOvZPz6V9IGTLF-tRcsjBgyFTw0E8SJdcCQrLT3LSfDKzWdtHzDVzZJdMzANRqwjkTUtekRFXZfl8MmCIk05rFrhKWcSqUC1Wj~h8YjxKErPNcqc~s0I6TuisFBaoFOzMVS-2d8b1-F3tJwwTFP6nS17vjmsrtFLxW4pupdWj5VAhdoY903Mz4RcyEzIbDWxU6-u-1rFPd9nvzWzso~NgIm5xQ00lfanW7uGYU~9YinB4wPH9HP9Pm0Jdkdl9He~yrl1d5ZcxCdwLZNoXlmaxSUvm6Z4tqUDw68y3fAOEnDSBV~J5VFncEocAaDmHVwHKLmW6NA__"/>
            <div class="absolute bottom-0 px-4 py-3 bg-gray-500/50 ">
    <h1 class="text-white font-semibold text-4xl"> Kittens are cute </h1>
    <p class="text-gray-200">
      I love kittens very much. They are amazing.
    </p>
  </div>
        </div>
        <div>
            <Footer/>
        </div> 
    </div>
}