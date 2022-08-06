import { useStatStyles } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FetchApi from "../utils/fetchApi";


export function useApi({purpose}){

    const [properties, setProperties] = useState([])


    const [page, setPage] = useState(0)

    const [isLoading, setLoading] = useState(false)

    useEffect(()=>{

       
    FetchApi({purpose, page})
    .then((nextprops)=>{
        setLoading(true)
        setProperties(nextprops)
        setLoading(false)
    })
},[ purpose, page])


    
return {properties, isLoading, setPage}

}