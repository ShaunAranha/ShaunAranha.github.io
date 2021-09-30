import React, { useState} from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby'
import { FaLinkedinIn} from "react-icons/fa"
import {SiGmail} from "react-icons/si"



const Navbar = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)


    return (
            <nav className={`p-8 md:p-16 flex justify-between items-center w-full`}>
                <Link  to="/" class={``}><span class="font-bold text-2xl">SA.</span></Link>
                <div class={`flex items-center w-auto `}>
                        <a href="mailto:shaun.aranha@alum.utoronto.ca?subject=Let's%20work!" class={` mx-2 transition duration-500 hover:text-gray-400`}><SiGmail class="inline text-2xl"/></a> 
                        <a href="https://www.linkedin.com/in/shaunaranha" class={`  mx-2  transition duration-500 hover:text-gray-400 text-2xl`}><FaLinkedinIn /> </a>
                </div>

            </nav>
    )
}

export default Navbar