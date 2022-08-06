import { Box, Button, Flex } from "@chakra-ui/react"
import { set } from "nprogress"
import { useApi } from "../hooks/useFetchApi"
import MyFacebookLoader from "./Loader"
import Property from "./Property"


export default function ListPropertiesCustom({ count=6,  purpose}){
    

    const {isLoading, properties} = useApi({purpose})

    const propertiesSliced = properties.slice(0,count)


    

    if(!isLoading){
  return   propertiesSliced.map(item=>{
   
   return( 
   <>


   <Property key={item.externalID} title={item.title}
   price={item.price} isVerified={item.isVerified} rentFrequency={item.rentFrequency}
   url={item.url? item.url: "loading"} agency={item.agency} baths={item.baths}
   rooms={item.rooms} area={item.area} externalID={item.externalID}


   />
  
   </>)
   }
   
   )
    }else{
     return<MyFacebookLoader/>
    }



}