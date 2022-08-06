import { Box, Flex } from "@chakra-ui/react";
import Banner from "./Banner";
import ListProperties from "./components/ListProperties";
import ListPropertiesCustom from "./components/ListPropertiesCustom";
import { useApi } from "./hooks/useFetchApi";


function Cover(){

   

  
  
    return(  

      <Box>
      <Banner
    purpose="Rent a home"
    title1= "Rental homes for"
    title2="Everyone"
    desc1="Explore apartments, villas, homes"
    desc2="and more"
    buttonText="Explore renting"
    linkName="/search?purpose=for-rent"
    image_url="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
    />
     <Flex flexWrap='wrap'>
   
    
     <ListPropertiesCustom purpose={'rent'} />
    
    
    </Flex>

  <Banner
      purpose='BUY A HOME'
      title1="Find, Buy & Own Your"
      title2='Dream Home'
      desc1=' Explore from Apartments, land, builder floors,'
      desc2=' villas and more'
      buttonText='Explore Buying'
      linkName='/search?purpose=for-sale'
      image_url="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
    />
       <Flex flexWrap='wrap'>
       <ListPropertiesCustom purpose={'sale'} />
      </Flex>
    
    </Box>
    )
     



   
    
}

export default Cover