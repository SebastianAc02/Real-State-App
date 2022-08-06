import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Flex, Box, Text, Icon, Button } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import SearchFilters from "./components/SearchFilters"
import noresult from "../assets/noresult.svg"
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { useFetchByFilter } from './hooks/useFetchByFilter';
import ListProperties from "./components/ListProperties"
import useObserver from './hooks/isNearScreen';
import throttle from 'just-throttle';
import MyFacebookLoader from './components/Loader';


export default function Search(){
  const router = useRouter()

   

    const {properties, isLoading, setPage} = useFetchByFilter({query: router.query, count:9})



    


    // infinite scroll

    const externalRef = useRef();




    const {show } = useObserver({externalRef  : externalRef,
      once:false})

    const debounceHandleNextpage = useCallback( throttle(
      () =>setPage(prevPage => prevPage+ 1)
      , 200
  ), [setPage])


  useEffect(()=>{

    //console.log(show)
        if(show) debounceHandleNextpage();
    } , [show, debounceHandleNextpage])

 

    
    return(
    
        <Box>
            <Navbar/>
            <Flex
        cursor='pointer'
        bg='gray.100'
        borderBottom='1px'
        borderColor='gray.200'
        p='2'
        fontWeight='black'
        fontSize='lg'
        justifyContent='center'
        alignItems='center'
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft='2' w='7' as={BsFilter} />
      </Flex>
    
      { <SearchFilters/> }

      <Text fontSize={"2xl"} p="4" fontWeight={"bold"}>
        Properties  {router.query.purpose}
      </Text>
      <Flex flexWrap={"wrap"}>
        
        {
      <ListProperties   properties={properties} isLoading={isLoading}/> }
        
      </Flex>
      { [].length === 1  && (
       <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
       <Image src={noresult} alt="no found"
       />
       <Text fontSize='xl' marginTop='3'>No Result Found.</Text>
     </Flex>
      )}
<div id="visor" ref={externalRef}></div>
      <Footer  />
      
        </Box>
    )

    
}

