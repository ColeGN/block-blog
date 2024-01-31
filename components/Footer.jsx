export function Footer(){
return <div className="flex flex-col py-7 items-start  lg:mx-auto lg:pt-16 lg:flex-col lg:gap-6 bg-gray-200">
        <div className="flex flex-col justify-center items-center w-10/12 gap-7 lg:flex lg:justify-between lg:flex-row lg:items-start lg:w-8/12 lg:mx-auto">
            <div className="hidden lg:flex lg:flex-col lg:gap-6 lg:w-1/3">
                <div className="hidden lg:flex lg:flex-col lg:items-start lg:gap-3">
                    <h2 className="text-lg font-semibold text-gray-800">About</h2>
                    <p className="text-base font-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div>
                    <p className="text-base font-normal text-gray-800">Email : info@jstemplate.net</p>
                    <p className="text-base font-normal text-gray-800">Phone : 880 123 456 789</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-base font-normal text-gray-600 font-sans">Home</p>
                <p className="text-base font-normal text-gray-600 font-sans">Blog</p>
                <p className="text-base font-normal text-gray-600 font-sans">Contact</p>
            </div>
            <div className="flex justify-center items-center gap-7">
                <img src="/images/Facebook.svg"/>
                <img src="/images/Instagram.svg"/>
                <img src="/images/LinkedIn.svg"/>
                <img src="/images/Twitter.svg"/>
            </div>
        </div>
    </div>
}