import Link from 'next/link';
import Image from 'next/image'
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';



export default function Property({externalID,title, url, isVerified, rentFrequency,
 price, agency="./", rooms=0, baths=0, area=0}={}){

    

    return(
    <Link href={`/property/${externalID}` } >
        <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
            <Box>
          
            <img src={url? url:`https://github.com/adrianhajdin/projects_realestate/blob/main/assets/images/house.jpg?raw=true`} alt='-'
                width='400' height='250' />
            </Box>
            <Box w='full'>
                <Flex paddingTop='2' alignItems='center' justifyContent='space-beetwen'>
                    <Flex alignItems='center'>
                        <Box paddingRight="3" color="green.400"> {isVerified && <GoVerified/>}</Box>
                        <Text fontWeight="bold" fontSize="lg">AED {millify(price)}{rentFrequency&& `/${rentFrequency}`}</Text>
                    </Flex>
                    <Box>
                        
                    <Avatar size={"sm"} src={agency?.logo?.url}/>

                    </Box>
                </Flex>
                <Flex alignItems={'center'} p="1" justifyContent={'space-beetwen'} w="250px" color={"blue.400"}>
                {rooms} <FaBed/> | {baths} <FaBath/> | {millify(area)} sqft <BsGridFill/>
                </Flex>
                <Text fontSize="lg">
                {title.length > 30? `${title.substring(0,30)}...`:title }
                </Text>
                
            </Box>
        </Flex>
    </Link>
    )



}