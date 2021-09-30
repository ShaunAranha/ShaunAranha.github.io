import React from 'react'
import Footer from './Footer' 
import Navbar from './Navbar'




if (typeof window !== 'undefined') {
    require('smooth-scroll')('a[href*="#"]');
  }

const Layout = (props) => {

    return (
        <div class="flex flex-wrap overflow-hidden">
            <Navbar/>
            <div class="mx-auto w-full ">  
                {props.children}
                <Footer />
            </div>
            
        </div>
    )
}

export default Layout