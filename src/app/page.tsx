"use client"

import { useRouter } from "next/navigation";


export default function Home() {
    const router = useRouter()

    const handleNavigation = () =>{
        router.push("/dashboard")
    }


    return (
        <div className=" text-center flex flex-col gap-4 items-center justify-center min-h-screen">
            <h1 className="text-4xl">This is home component</h1>
            
                <button onClick={handleNavigation}>Dashboard</button>
          
        </div>
    );
}