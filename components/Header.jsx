import { useState } from "react"
import Link from "next/link"
export function Header(){
    const [isOpen, setIsOpen] = useState(false);

    
    return <div className="relative">
        <div className="hidden lg:flex justify-between gap-32 py-16 mx-auto w-8/12">
            <div>
                <Link href="/index">
                    <img src="/images/MetaBlog.svg" alt="kke"/>
                </Link>
                
            </div>
            <div className="flex gap-10">
                <div className="flex justify-center items-center gap-10  w-3/4">
                    
                    <Link className="text-slate-600 text-base font-semibold leading-6" href="/Blog">Blog</Link>
                    <Link className="text-slate-600 text-base font-semibold leading-6" href="/Contact">Contact</Link>
                    <Link className="text-slate-600 text-base font-semibold leading-6" href="/Home">Comments</Link>
                </div>
                {/* <div className="flex bg-slate-100 rounded-md p-2">
                    <input className="bg-slate-100" type="text" placeholder="search"/>
                    <img src="/images/search.svg"/>
                </div> */}
                <div className="flex rounded-md">
{/* <form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form> */}
            <div className="flex justify-center items-center  rounded-lg bg-white relative">
            <input className="search-input rounded-r-lg text-2xl text-blue-500 outline-none focus:outline-none:focus" type="search" autoComplete="off" spellCheck="false" aria-live="polite" placeholder="Search..."/>
            <div className="search-icon bg-blue-500 hover:bg-blue-400 text-white px-3 py-3 rounded-lg relative z-10 shadow-md">
            <svg width="10" height="10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 19L13 13M15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z" stroke="white" strokeWidth="2" strokewinecap="round" strokeLinejoin="round"/>
            </svg>
            </div>
            </div>
        </div>
            </div>  
        </div>
        <div className="flex p-5 justify-between items-center lg:hidden">
            <div>
                <img src="/images/Little.svg"/>
            </div>
            <div onClick={() => setIsOpen(!isOpen)}>     
                    <img src="/images/Layer 2.svg"/>
                    
            </div>
        </div>
        {isOpen && <div >sorry its not available for now!</div>}

    </div>
}