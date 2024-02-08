import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function Home(){
    return <div>
        <div>
            <Header/>
        </div>
        <div className="w-8/12 mx-auto">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
    <li className="mb-10 ms-6">            
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img src="/images/Pro.svg"/>
        </span>
        <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">just now</time>
            <div className="text-sm font-normal text-gray-500 dark:text-gray-300">Bonnie moved <a href="#" className="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Jese Leos</a> to <span className="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">MetaBlog</span></div>
        </div>
    </li>
    <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img className="rounded-full shadow-lg" src="/images/Pro.svg" />
        </span>
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <div className="items-center justify-between mb-3 sm:flex">
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
                <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">anonymous member commented on  <a href="#" className="font-semibold text-gray-900 dark:text-white hover:underline">MetaBlog</a></div>
            </div>
            <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">Hi ya'll! This website helped me a lot. I am so thankful! </div>
        </div>
    </li>
    <li className="ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img className="rounded-full shadow-lg" src="/images/Pro.svg" alt="Jese Leos image"/>
        </span>
        <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">1 day ago</time>
            <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Gantogtokh has created <a href="#" className="font-semibold text-blue-600 dark:text-blue-500 hover:underline">this MetaBlog site</a> for developers  <span className="font-semibold text-gray-900 dark:text-white">Finished</span></div>
        </div>
    </li>
</ol>
        </div>
        <div className="w-8/12 mx-auto mt-6">

<form>
   <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           <label htmlFor="comment" className="sr-only">Your comment</label>
           <textarea id="comment" rows="4" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
       </div>
       <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
           <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Post comment
           </button>
           <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
               <button type="button" className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                   <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"/>
                    </svg>
                   <span className="sr-only">Attach file</span>
               </button>
               <button type="button" className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                   <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                    </svg>
                   <span className="sr-only">Set location</span>
               </button>
               <button type="button" className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                   <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                   <span className="sr-only">Upload image</span>
               </button>
           </div>
       </div>
   </div>
</form>
<p className="ms-auto text-xs text-gray-500 dark:text-gray-400"><a></a>Thanks for your comments. Appreciate you</p>

        </div>
        <div className="mt-10">
            <Footer/>
        </div>
    </div>
}