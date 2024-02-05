
import Head from "next/head";
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { useEffect ,useState} from "react"
import { useRouter } from 'next/router'
import { Loader } from "@/components/Loader"

export default function  Cole({details}){
    // const [details, setDetails] = useState([])
    // const router = useRouter()

    
    // useEffect(()=>{
    //     if(router.query.username && router.query.slug){
    //         fetch(`https://dev.to/api/articles/${router.query.username}/${router.query.slug}`)
    //         .then((response)=>response.json())
    //         .then((data)=>{
    //             setDetails(data)
    //         })
    //     }
        
    // },[router.query])

    // if(details === undefined) return <Loader/>
    return <div>
        <Head>
            <meta property="og:title" content={details.title} />
            <meta property="og:image" content={details.cover_image} />
            <meta property="og:description" content={details.description} />
      </Head>
        <div>
            <Header/>
        </div>
        <div className="w-6/12 mx-auto">
            <h1 className="text-2xl text-center font-bold mb-7">${details.title}</h1>
            <div className="mx-auto prose" dangerouslySetInnerHTML={{__html: details.body_html }}></div>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
}
export async function getServerSideProps({ query }) {
    const res = await fetch(`https://dev.to/api/articles/${query.username}/${query.slug}`);
    const details = await res.json();
    return { props: { details } };
  }