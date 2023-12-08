import React from 'react'
import { Box, useMediaQuery} from "@mui/material"
import { useState } from "react"
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from "components/Navbar"
import Sidebar from "components/Sidebar"


const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)")
    const [isSidebarOpen, setIsSideBarOpen] = useState(true);
  return (
    <Box
    display={isNonMobile ? 'flex': 'block' }
     width= "100%" 
     height= "100%"
     >
        <Sidebar
        isNonMobile = {isNonMobile}
        drawerWidth = "250px"
        isSidebarOpen ={isSidebarOpen}
        setIsSideBarOpen = {setIsSideBarOpen}
        />
        <Box>
            <Navbar
            isSidebarOpen ={isSidebarOpen}
            setIsSideBarOpen = {setIsSideBarOpen}
            />
            <Outlet/>
        </Box>
    </Box>
  )
}

export default Layout