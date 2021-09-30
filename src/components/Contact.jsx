import React from 'react'
import { FaLinkedinIn, FaGithub } from "react-icons/fa"

import Head from './head'

import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import {SiGmail} from "react-icons/si"
const Contact = () => {
    return (
        <div id="contact" class="rounded p-4 m-4 grid grid-rows-2 grid-cols-3 ">
                <Head title="Contact" />   
                    <h2 class="col-span-3 font-bold text-3xl">contact me</h2>
                    <p class="col-span-3">Feel free to reach out to me at anytime!</p>
                    {/* make this a div? */}
                    <a href="filler" class="mr-2 border-2 items-center px-2 py-2 rounded border-transparent font-normal bg-black text-base hover:bg-white hover:text-black"><SiGmail class="mr-2 inline"/> Mail</a>
                    <a href="https://www.linkedin.com/in/shaunaranha" class="mr-2 items-center border-2 px-2 py-2 bg-black border-transparent rounded font-normal text-base hover:bg-white hover:text-black"><FaLinkedinIn class="inline mr-2"/>Linkedin </a>
                    <a href="https://www.github.com/shaunaranha" class="mr-2 border-2 px-2 py-2 bg-black border-transparent rounded font-normal text-base hover:bg-white hover:text-black"><FaGithub class="mr-2 inline"/> Github</a>
    
        
        </div>
    )
}

export default Contact