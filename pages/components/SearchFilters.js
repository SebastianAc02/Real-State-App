import { useCallback, useEffect, useState } from 'react';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

import { filterData, getFilterValues } from '../utils/filterData';
import noresult from "../../assets/noresult.svg"
import { getServerSideProps } from '../search';

export default function SearchFilters(){

   
    const [filter] = useState(filterData)
  
    const router = useRouter();

    const searchProperties = (filterValues)=>{

        const path = router.pathname;
        const {query} = router
        

const value = getFilterValues(filterValues)

value.forEach((item) => {
    if(item.value && filterValues?.[item.name]) {
     query[item.name] = item.value
    

    }
 

    if(item.value === '')
    {
      item.value = undefined
      query[item.name] = undefined

    }
   
    
  })





router.push({ path,  query})



    }


   

    

return(
  <Flex bg={'gray.100'} p="4" justifyContent={'center'} flexWrap="wrap">

{filter.map((filter)=>{
  
  return (
    <Box key={filter.queryName}>
        
        <Select
        placeholder={filter.placeholder}
        w="fit-content"
        p="2"
         onChange={(e)=> searchProperties({[filter.queryName]: e.target.value})}>
        {filter?.items?.map((item)=>{
           return( <option value={item.value} key={item.value}>
                {item.name}
            </option>)

})}
        </Select>
    </Box>)
})}

     
    </Flex>
)}