import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Osap from "../images/osap.jpg"
import C4S from "../images/C4S.jpg"
import LG from "../images/labourgame.jpg"

const Experience = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark (
            filter: { fields: { collection: { eq: "experiences" }}}  
        )    
        {
            edges {
                node {
                    frontmatter {
                        title
                        date
                    }
                    fields {
                        slug
                    }
                    html
                }
            }
        }
    }
    `)
    return (
        <div class="flex flex-col md:mx-20 mx-8 mb-16">
            <header class="mb-8">
                <h2 class="text-4xl font-bold">experience</h2>
                <p class="italic">Below you can find my recent professional experiences.</p>
            </header>
            <div id="experience-cards" class="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8 md:gap-y-20">
                <div className="w-full rounded-lg overflow-hidden shadow-md bg-gray-800 pb-8 transition ease-in-out duration-500 hover:shadow-2xl animate fade-in-up one">
                    <img class="w-full" src={C4S} alt="Compass for Success" />
                    <div class="px-6 py-4">
                        <div class="mb-6">
                            <h4 class="font-bold text-2xl text-white">Compass for Success</h4>
                            <p>Junior Software Developer</p>
                        </div>
                        <p class="text-white text-base mb-8">
                        Implemented new features and made sure application was stable for releases
                        </p>
                    </div>
                </div>
                <div class="w-full rounded-lg overflow-hidden shadow-md bg-gray-800 pb-8 transition ease-in-out duration-500 hover:shadow-2xl animate fade-in-up one">
                    <img class="w-full" src={LG} alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="mb-6">
                            <h4 class="font-bold text-2xl text-white ">University of Toronto Mississauga</h4>
                            <p>Front End Developer</p>
                        </div>
                        <p class="text-white text-base mb-8">
                        Developed the interface for a game that was hosted on an AWS server
                        </p>
                    </div>
                </div>
                <div class="w-full rounded-lg overflow-hidden shadow-md bg-gray-800 pb-8 transition ease-in-out duration-500 hover:shadow-2xl animate fade-in-up one">
                    <img class="w-full" src={Osap} alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="mb-6">
                            <h4 class="font-bold text-2xl text-white">OSAP</h4>
                            <p class="text-gray-200">QA Engineer</p>
                        </div>
                        <p class="text-white text-base mb-8">
                        Ensured high quality user experience through automated testing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
