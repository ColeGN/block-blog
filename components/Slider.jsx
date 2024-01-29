import { Chip } from "./little things/chip"

export function Slider(){
    return <div className="">
        <div className="flex relative flex-col">
            <img className="rounded-2xl" src="https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d931Jx0jI4D~3Gdkf71c6SUC3co6psCjxx3ixLIvRjYsWUfiZ1OjnZAMyMYAvqM7xfOHjdNDdPhy1n~I82wX4aHBez4K1XAmTgvukMCEpcKYdIM5VFWkHeoia9pFAWmw1HXLRl9CRCOYXJADTuR8sAEIaRJEcR5OoZ73ERb9I3Vv6szoRE-seUVr4lYZSnre~TFVWbndYyP7Ndbz1mhXqGrU~4AvHd5uWWFYcmcWhQUmyjytceS7H6OTX6AfHy8qHBS60rSJNzm1W9j9JHgAitJLUoLSupr4sItkJhq4Mb4kOjHzsFSGXdA8ewde7-IO4sOFuqKAEDwSouSuQhrxBw__" />
            <div className="absolute  w-1/2 bg-white left-1 bottom-1 flex flex-col rounded-xl gap-6 p-8 xl:p-10 2xl:p-12" >
                <div className="flex flex-col items-start gap-2">
                    <div className="w-2/12">
                        <Chip/>
                    </div>
                    <div className=" w-3/4 lg:font-semibold xl:text-2xl 2xl:text-3xl 2xl:leading-10">
                        Grid system for better Design User Interface
                    </div>
                </div>
                <div>
                    <p className="text-base font-normal text-gray-400">August 20, 2022</p>
                </div>
            </div>
        </div>
        <div className="flex gap-2 mt-3 justify-end">
                <div className="w-10 h-10 border border-gray-700 rounded-md"></div>
                <div className="w-10 h-10 border border-gray-700 rounded-md"></div>
        </div>
       
    </div>
}