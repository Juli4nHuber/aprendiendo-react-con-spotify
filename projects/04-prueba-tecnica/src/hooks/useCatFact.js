import { useState, useEffect } from "react"

const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact';

export function useCatFact(){
    const [fact, setFact] = useState("");

    const refreshFact = () => {
        return fetch(CAT_ENDPOINT_FACT)
        .then(res => res.json())
        .then(data => setFact(data.fact))
    }

    useEffect(() => {
        refreshFact();
    }, [])

    return { fact , refreshFact }
}