import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Head from '../components/head'

import {FaGithub } from "react-icons/fa"

const Projects = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(
            filter: { fields: {collection: { eq: "projects" }}}
        ) {
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
        <div id="projects" class="md:m-20 m-8 flex flex-col justify-center">
            <Head title="Projects" />
            <header>
                <h2 class="text-4xl font-bold">latest projects</h2>
                <p class="italic">Here's some of the projects I've built recently.</p>
            </header>
            <ol class="flex flex-col sm:flex-wrap flex-initial md:flex-row md:space-x-6 space-y-4 md:space-y-0 my-8" >
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li class="rounded-lg p-4 shadow-md transition duration-500 ease-in-out hover:bg-gray-700 flex-1 hover:shadow-2xl bg-gray-800">
                                <h2 class="font-semibold text-xl mb-4">{edge.node.frontmatter.title}</h2>
                                <p dangerouslySetInnerHTML={{ __html: edge.node.html }}/>
                                <a href="https://www.github.com/shaunaranha" class="mx-2"><FaGithub /> </a> 
                        </li>
                    )
                    })}
            </ol>
            <a href="https://www.github.com/shaunaranha" class="cursor-pointer font-semibold transition ease-in-out duration-500 shadow-none hover:shadow-2xl hover:text-black  rounded-lg my-2 py-2 px-2 border-2 border-white w-48 self-center items-center inline-flex justify-center hover:bg-white">view all projects</a>
        </div>
    )
}

export default Projects