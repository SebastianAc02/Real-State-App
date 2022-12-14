import { Flex, Image , Box, Text, Button} from '@chakra-ui/react'
import Link from 'next/link'


function Banner  ({image_url,purpose, title1 , title2, desc1, buttonText, linkName, desc2}) {

    return(
    <Flex flexWrap={'wrap'} justifyContent='center' alignItems={'center'} m='10'>
      <Image src={image_url} width={500} height={300} alt='-'/>
      <Box p ={5} >

        <Text color='gray.500' fontSize={'sm'} fontWeight='medium'>{purpose}</Text>
        <Text  fontSize={'3xl'} fontWeight='bold'>{title1}<br/>{title2}</Text>
        <Text  fontSize={'lg'} paddingTop='3' paddingBottom={'3'}color ={'gray.700'}> {desc1} <br/> {desc2}</Text>
    <Button fontSize={'xl'} bg="blue.300" color={'white'}>
      <Link href={linkName} >{buttonText}</Link>
    </Button>


      </Box>
    </Flex>
    )
}

export default Banner
