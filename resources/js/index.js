import React from 'react';
import ReactDOM from 'react-dom';
import  App from "./components/App"

import  {  ChakraProvider } from "@chakra-ui/react"




if (document.getElementById('example')) {
    
    ReactDOM.render(
        <ChakraProvider >
            <App />
        </ChakraProvider >,
        
    document.getElementById('example'));                   
}
