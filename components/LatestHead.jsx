import Link from "next/link"
import { useState, useEffect } from "react"
import { Latest } from "./Latest";


export function LatestHead({article}){

    const [Path, setPath] = useState("webdev");
   

    return <div className="flex flex-col items-start gap-8 ">
        <div>
            <p className="text-2xl font-bold">All Blog Post</p>
        </div>
        <div className="hidden lg:flex lg:justify-between lg:items-center">
            <div className="flex items-center gap-5">
                <p className="text-amber-200 text-xs font-bold">All</p>
                <p className="text-gray-600 text-xs font-bold">Travel</p>
                <p className="text-gray-600 text-xs font-bold">Travel</p>
                <p className="text-gray-600 text-xs font-bold">Fashion</p>
                <p className="text-gray-600 text-xs font-bold">Technology</p>
                <p className="text-gray-600 text-xs font-bold">Branding</p>
            </div>
            <div className="">
            {/* <label for="underline_select" class="sr-only">Underline select</label>
            <select defaultValue={Path} onChange={event=>setPath(event.target.value)} id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            <option selected>Choose a path</option>
            <option value="webdev">webdev</option>
            <option value="opensource">opensource</option>
            <option value="beginners">beginners</option>
            <option value="bubble">bubble</option>
            <option value="sbom">sbom</option>
            </select> */}
                
            </div>
        </div>
    </div>
}