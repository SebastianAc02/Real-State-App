import { useEffect, useState } from "react";
import FetchSingleProperty from "../utils/FetchSingleProperty";


export function useSingle({id}){


    const [array, setArray] = useState({})

    const [isLoading, setLoading] = useState(false)


    useEffect(()=>{

        
    FetchSingleProperty({id})
    .then((response)=>

        {
            setLoading(true)
            setArray(response)
            setLoading(false)
        }
    )
}, [id])



return {array, isLoading}

}