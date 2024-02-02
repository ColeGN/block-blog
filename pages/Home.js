import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function Home(){
    return <div>
        <div>
            <Header/>
        </div>
        <div className="w-8/12 mx-auto">
        <ol class="relative border-s border-gray-200 dark:border-gray-700">                  
    <li class="mb-10 ms-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img src="/images/Pro.svg"/>
        </span>
        <div class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
            <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">just now</time>
            <div class="text-sm font-normal text-gray-500 dark:text-gray-300">Bonnie moved <a href="#" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">MetaBlog</span></div>
        </div>
    </li>
    <li class="mb-10 ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img class="rounded-full shadow-lg" src="/images/Pro.svg" />
        </span>
        <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <div class="items-center justify-between mb-3 sm:flex">
                <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
                <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">anonymous member commented on  <a href="#" class="font-semibold text-gray-900 dark:text-white hover:underline">MetaBlog</a></div>
            </div>
            <div class="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">Hi ya'll! This website helped me a lot. I am so thankful! </div>
        </div>
    </li>
    <li class="ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img class="rounded-full shadow-lg" src="/images/Pro.svg" alt="Jese Leos image"/>
        </span>
        <div class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
            <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">1 day ago</time>
            <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">Gantogtokh has created <a href="#" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">this useful site</a> for developers  <span class="font-semibold text-gray-900 dark:text-white">Finished</span></div>
        </div>
    </li>
</ol>
        </div>
        
        <div className="mt-10">
            <Footer/>
        </div>
    </div>
}