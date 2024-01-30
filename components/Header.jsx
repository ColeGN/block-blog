import Link from "next/link"
export function Header(){
    return <div>
        <div className="hidden lg:flex justify-between gap-32 py-16 mx-auto w-8/12">
            <div>
                <img src="/images/MetaBlog.svg" alt="kke"/>
            </div>
            <div className="flex gap-10">
                <div className="flex justify-center items-center gap-10  w-3/4">
                    <Link className="text-slate-600 text-base font-semibold leading-6" href="/Home">Home</Link>
                    <Link className="text-slate-600 text-base font-semibold leading-6" href="/Blog">Blog</Link>
                    <Link className="text-slate-600 text-base font-semibold leading-6" href="/Contact">Contact</Link>
                </div>
                <div className="flex bg-slate-100 rounded-md p-2">
                    <input className="bg-slate-100" type="text" placeholder="search"/>
                    <img src="/images/search.svg"/>
                </div>
            </div>  
        </div>
        <div className="flex p-5 justify-between items-center lg:hidden">
            <div>
                <img src="/images/Little.svg"/>
            </div>
            <div>
                <img src="/images/Layer 2.svg"/>
            </div>
        </div>
    </div>
}