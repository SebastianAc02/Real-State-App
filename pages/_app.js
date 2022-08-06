import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import '../styles/globals.css'
import Layout from './components/Layout'
import ListProperties from './components/ListProperties'
import Cover from './Cover'

function MyApp({ Component, pageProps }) {

 return (
  <>
  
<ChakraProvider>
      

      <Component {...pageProps} />

     
  
      
      </ChakraProvider>
   
 

  </>
 )
}

export default MyApp
