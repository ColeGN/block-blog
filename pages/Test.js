import { useState , useEffect } from "react"

export default function Test(){
    const [timer , setTimer] = useState(10);
    const [isPaused, setIsPaused]= useState(false)

    useEffect(()=>{
        if (isPaused) return

        if (timer <= 0) return
        const interval = setInterval(()=>{
            setTimer(timer=>timer - 1);
        }, 1000);
    
        return () => clearInterval(interval)
    }, [timer, isPaused]);
    return <div>
        <h1>timer{timer}</h1>
        <button className="border border-black mr-1" onClick={()=>setIsPaused(false)}>start</button>
        <button className="border border-black mr-1" onClick={()=>setIsPaused(true)}>pause</button>
        <button className="border border-black mr-1" onClick={()=>setTimer(timer)}>reset</button>
    </div>
    

    


    // const [val , setVal] = useState("");
    // useEffect (()=>{
    //     console.log("kk done");
    // }, [val]);

    // const onChange = (event)=>{
    //     setVal(event.target.value);
    // };

    // return<input className="border border-black" value={val} onChange={onChange}/>
}