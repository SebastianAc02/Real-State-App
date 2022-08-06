import { ContactsFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import FetchByFilters from "../utils/fetchByfilterApi";


export  function useFetchByFilter({query, count} ={}){

    var { purpose} = query


    var proposito = purpose!==''&& purpose!== undefined? purpose: 'for-rent'

    const [properties, setItems] = useState([])

    const [isLoading, setLoading] = useState(false)

    const [pages, setPage] = useState(0)

    useEffect(()=>{
        
    FetchByFilters({query: query,pages, count, proposito:proposito})
    .then(array => {
        setLoading(true)
        setItems(prevArray=> prevArray.concat(array))
        setLoading(false)
    })

    },[pages, count, query, proposito])

    return {properties, isLoading, setPage}

   


}