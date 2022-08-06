import { Box, Flex, Spacer, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsArrowCounterclockwise, BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';


import ImageScrollbar from '../components/ImageScrollbar';
import { MdDescription, MdPanoramaPhotosphere } from 'react-icons/md';

import photos from "../../assets/noresult.svg"
import { useRouter } from 'next/router';
import { useApi } from '../hooks/useFetchApi';
import FetchSingleProperty from '../utils/FetchSingleProperty';
import { useSingle } from '../hooks/useSingle';
import { ConsoleSqlOutlined } from '@ant-design/icons';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MyFacebookLoader from '../components/Loader';



export default function Details(){


    

    const router = useRouter()
    const { id } = router.query

    if(id)
   {var numberofIdentification = id.toString()}

    
   
  const {array, isLoadig} = useSingle({id: numberofIdentification })
   

   var photos = "";
if(array !==undefined){
  photos =  array.photos

   var isVerified= true
    var price= array.price
    var rentFrequency= array.rentFrequency
    var   agency = array.agency
    var   rooms=array.rooms
    var  baths=array.baths
    var area= array.area
    var title=array.title
    var description=array.description
    var space =array.space
    var between=""
    var type= array.type
    var purpose=array.purpose
    var furnitureStatus=""
    
}
if(isLoadig)
{
    return<MyFacebookLoader/>
}else{
    return(
        <>
        <Navbar/>
    <Box maxWidth={"1000px"} margin="auto" p="4">

    {
        
    photos && <ImageScrollbar isLoading={isLoadig} photos={photos}/>
    }
    
    <Box w={"full"} p="6">
    <Flex paddingTop='2' alignItems='center' justifyContent='space-beetwen'>
        <Flex alignItems='center'>
          <Box paddingRight="3" color="green.400"> {isVerified && <GoVerified/>}</Box>
                <Text fontWeight="bold" fontSize="lg">AED {price}{rentFrequency&& `/${rentFrequency}`}</Text>
            </Flex>
      <Box>
                    
            <Avatar size={"sm"} src={agency?.logo?.url}/>

    </Box>
            </Flex>
            <Flex alignItems={'center'} p="1" justifyContent={'space-beetwen'} w="250px" color={"blue.400"}>
            {rooms} <FaBed/> | {baths} <FaBath/> | {area? millify(area): area} sqft <BsGridFill/>
    </Flex>
    <Box marginTop={2}>
        <Text fontSize={"lg"} marginBottom="2" fontWeight={"bold"}>
            {title}

        </Text>
        <Text lineHeight={"2"} color="gray.600">{description}</Text>

    </Box>
    <Flex flexWrap="wrap" textTransform={"uppercase"} justifyContent="space-between">
        <Flex justifyContent={space-between} w="400px" borderBottom={"1px"} borderColor="gray.100" p="3">
            <Text>Type</Text>
            <Text fontWeight={"bold"}>{type}</Text>

        </Flex>
        </Flex>
        <Flex justifyContent={space-between} w="400px" borderBottom={"1px"} borderColor="gray.100" p="3">
            <Text>Purpose</Text>
            <Text fontWeight={"bold"}>{purpose}</Text>
        {furnitureStatus&&(
            <Flex justifyContent={space-between} w="400px" borderBottom={"1px"} borderColor="gray.100" p="3">
            <Text>Furniture Status</Text>
            <Text fontWeight={"bold"}>{furnitureStatus}</Text>

        </Flex>
        )}
        </Flex>
        
        </Box>
     
     </Box>
<Footer/>
</>
    )}}
    

