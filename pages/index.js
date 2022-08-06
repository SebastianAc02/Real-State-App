import { Flex, Image , Box, Text, Button, ChakraProvider} from '@chakra-ui/react'

import Cover from './Cover'

import FetchApi from './utils/fetchApi'
import MyApp from './_app'
import ListProperties from './components/ListProperties'
import MyFacebookLoader from './components/Loader'
import App from 'next/app'
import Layout from './components/Layout'
import Head from 'next/head'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useRouter } from 'next/router'
import SearchBar from './search'




export default function Home() {




  return (
  <>


<Layout>
  <Cover/>
</Layout>




</>
  )
}
