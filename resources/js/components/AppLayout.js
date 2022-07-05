import React from "react"
import Header  from "./Header"
import Footer  from "./Footer"
import Body  from "./Body"
import { Box, VStack, Flex } from "@chakra-ui/react"




const LeftMenu = props => {
    return (
        <>
            <Box bg="green.800"  maxWidth="150px">
                Hello left menu
            </Box>
        </>
    )
}




const AppLayout = props => {
    
    return (
        <>
            <Box h="100%" w="100%" bg="red.100" >
                <Header />
                <Flex h="calc(100vh - 200px)" w="100%" bg="green.400">   
                    <LeftMenu />
                    <Body />
                </Flex>
                <Footer />
            </Box >
        </>
    )
}



export default AppLayout