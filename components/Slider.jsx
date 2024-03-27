import { SliderDemo } from "./SliderDemo"
import { useState, useEffect} from "react"
import { useSpring, animated } from '@react-spring/web'

export function Slider(){
    const [props, api] = useSpring(
        () => ({
          from: { opacity: 0 },
          to: { opacity: 10 },
        }),
        []
      )
    
         const [articles, setArticles] = useState([])
         const [currentPage, setCurrentPage] = useState(1)
         
        
         useEffect(()=>{
             fetch('https://dev.to/api/articles?username=emmabostian&per_page=1&page=1')
                 .then((response)=>response.json())
                 .then((data)=>{
                     setArticles(data)
                 })
         },[])

         function NextNews(){
            fetch(`https://dev.to/api/articles?username=emmabostian&per_page=1&page=${currentPage}`)
            .then((response)=>response.json())
            .then((data)=>{
                // setArticles([...articles, ...data])
                setArticles((data))
                setCurrentPage(currentPage + 1)
            })
         }
         function PreviosNews(){
            fetch(`https://dev.to/api/articles?username=emmabostian&per_page=1&page=${currentPage}`)
            .then((response)=>response.json())
            .then((data)=>{
                // setArticles([...articles, ...data])
                setArticles((data))
                setCurrentPage(currentPage - 1)
            })
         }

    return <div className="lg:flex lg:flex-col lg:justify-center lg:m-auto  lg:w-8/12">
        <animated.div style={props}>
        {articles.map((article)=>(
                 <SliderDemo key={article.id} article={article}/>
             ))}
        </animated.div>

        
        
        {/* <div className="hidden lg:flex relative flex-col">
            <img className="rounded-2xl" src="https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d931Jx0jI4D~3Gdkf71c6SUC3co6psCjxx3ixLIvRjYsWUfiZ1OjnZAMyMYAvqM7xfOHjdNDdPhy1n~I82wX4aHBez4K1XAmTgvukMCEpcKYdIM5VFWkHeoia9pFAWmw1HXLRl9CRCOYXJADTuR8sAEIaRJEcR5OoZ73ERb9I3Vv6szoRE-seUVr4lYZSnre~TFVWbndYyP7Ndbz1mhXqGrU~4AvHd5uWWFYcmcWhQUmyjytceS7H6OTX6AfHy8qHBS60rSJNzm1W9j9JHgAitJLUoLSupr4sItkJhq4Mb4kOjHzsFSGXdA8ewde7-IO4sOFuqKAEDwSouSuQhrxBw__" />
            <div className="absolute  w-1/2 bg-white left-1 bottom-1 flex flex-col rounded-xl gap-6 p-8 xl:p-10 2xl:p-12" >
                <div className="flex flex-col items-start gap-2">
                    <div className="w-2/12">
                    <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    <p className="text-sm font-medium text-white">Technology</p>
                     </button>
                    </div>
                    <div className=" w-3/4 lg:font-semibold xl:text-2xl 2xl:text-3xl 2xl:leading-10">
                        Grid system for better Design User Interface
                    </div>
                </div>
                <div>
                    <p className="text-base font-normal text-gray-400">August 20, 2022</p>
                </div>
            </div>
        </div> */}
        <div className="hidden lg:flex gap-2 mt-3 justify-end">
                <div className="cursor-pointer" onClick={PreviosNews}>
                    <img src="/images/back.svg"/>
                </div>
                <div className="cursor-pointe" onClick={NextNews}>
                    <img src="/images/forward.svg"/>
                </div>
        </div>
        <div className="flex py-7 flex-col items-start w-10/12 lg:hidden">
        <div className="ml-8">
            <p className="text-2xl font-bold">Trending</p>
        </div>
        {/* <div className="mt-8">
            <img className="inline-block h-80 w-full" src="https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mgqSGtIXQ7yRG4uKOvZPz6V9IGTLF-tRcsjBgyFTw0E8SJdcCQrLT3LSfDKzWdtHzDVzZJdMzANRqwjkTUtekRFXZfl8MmCIk05rFrhKWcSqUC1Wj~h8YjxKErPNcqc~s0I6TuisFBaoFOzMVS-2d8b1-F3tJwwTFP6nS17vjmsrtFLxW4pupdWj5VAhdoY903Mz4RcyEzIbDWxU6-u-1rFPd9nvzWzso~NgIm5xQ00lfanW7uGYU~9YinB4wPH9HP9Pm0Jdkdl9He~yrl1d5ZcxCdwLZNoXlmaxSUvm6Z4tqUDw68y3fAOEnDSBV~J5VFncEocAaDmHVwHKLmW6NA__"/>
        </div>
        <div className="ml-8 h-80 mt-6">
            <img className="inline-block h-80 rounded-xl" src="https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mgqSGtIXQ7yRG4uKOvZPz6V9IGTLF-tRcsjBgyFTw0E8SJdcCQrLT3LSfDKzWdtHzDVzZJdMzANRqwjkTUtekRFXZfl8MmCIk05rFrhKWcSqUC1Wj~h8YjxKErPNcqc~s0I6TuisFBaoFOzMVS-2d8b1-F3tJwwTFP6nS17vjmsrtFLxW4pupdWj5VAhdoY903Mz4RcyEzIbDWxU6-u-1rFPd9nvzWzso~NgIm5xQ00lfanW7uGYU~9YinB4wPH9HP9Pm0Jdkdl9He~yrl1d5ZcxCdwLZNoXlmaxSUvm6Z4tqUDw68y3fAOEnDSBV~J5VFncEocAaDmHVwHKLmW6NA__"/>  
        </div> */}
    </div>
    </div>
}