import React from 'react'
import { Link } from 'gatsby';
import { IoIosArrowDown } from "react-icons/io"; 
import { BiDownArrow } from "react-icons/bi";

const Hero = () => {
    return (
        <div class="flex lg:px-64 md:px-32 px-8 sm:mt-24 mt-28 sm:mb-32 mb-20 md:mt-20 md:mb-24 flex-col border-white border-0">
            <h1 class="text-2xl lg:text-3xl font-semibold p-0">Hi!</h1>
            <h2 class="text-5xl mb-8 lg:text-6xl font-bold md:p-0">I'm Shaun Aranha. </h2>
            <p class="text-2xl p-0 lg:text-4xl">I am a software engineer determined on building exceptional user experiences
            through the web or applications.</p>
            <Link class="self-center my-24 border-white border-0 stroke-2 text-4xl animate-bounce"><IoIosArrowDown /></Link>

        </div>
    )
}

export default Hero