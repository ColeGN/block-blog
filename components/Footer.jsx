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
                <a href="https://www.facebook.com/me/">
                    <img src="/images/Facebook.svg"/>
                </a>
                <a href="https://www.instagram.com/cole.gn/">
                    <img src="/images/Instagram.svg"/>
                </a>
                
                <img src="/images/LinkedIn.svg"/>
                <img src="/images/Twitter.svg"/>
            </div>
        </div>
        <div className="flex justify-center items-center w-10/12 mt-6 lg:flex lg:justify-between lg:w-8/12 lg:mx-auto lg:items-center">
            <div className="flex gap-3">
                <div>
                    <img src="/images/Logo.svg"/>
                </div>
                <div>
                    <div className="flex">
                        <p className="text-lg font-extralight ">Meta</p>
                        <p className="text-lg font-bold">Blog</p>
                    </div>
                    <div>
                        <p className="text-base font-extralight  font-sans">© All Rights Reserved</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-8">
                <p className="text-base font-normal text-gray-600 font-sans">Terms of Use</p>
                <p className="text-base font-normal text-gray-600 font-sans">Privacy Policy</p>
                <p className="text-base font-normal text-gray-600 font-sans">Cookie Policy</p>
            </div>
        </div>
    </div>
}