"use client";

import { useEffect } from "react";

export default function ErrorPage({ error, reset }: {
    error: Error & { digest?: string }, reset: () => void
}) {
    // console.log(error);
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])
    

    return (
        <div>
            <h1 className="text-center text-xl text-red-500">Something went wrong</h1>
            <h1 className="text-center text-xl text-red-500">{error?.message}</h1>
            <div className="text-center">
                <button onClick={() => reset()} className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                    Try Again
                </button>
            </div>
        </div>
    );
}