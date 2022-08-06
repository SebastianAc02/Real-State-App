import React from "react";
import { Suspense } from "react";
import useObserver from "../hooks/isNearScreen";
import Footer from "./Footer";
import MyFacebookLoader from "./Loader";


const LazyFoo = React.lazy(
    ()=>import("./Footer")

    // Asyncrono y devuelve una promesa
)



export default function LazyFooter(){

   


    const {show, ref} = useObserver()
    
    return( <div ref={ref}>
    
    <Suspense fallback={<MyFacebookLoader/>}>
        {
            //change loader for this one 
        }
    {show ? <Footer/> : null}
    </Suspense>
    </div>);
    
    };
