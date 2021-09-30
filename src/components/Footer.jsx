import React from 'react'


//import { graphql, useStaticQuery} from 'gatsby'

import { FaLinkedinIn, FaGithub } from "react-icons/fa"
const Footer = () => {
   /* const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
`) */
    return (
        <footer class="p-4 m-4 flex justify-center">
            <a href="https://www.linkedin.com/in/shaunaranha" class="mx-2"><FaLinkedinIn /> </a>
            <a href="https://www.github.com/shaunaranha" class="mx-2"><FaGithub /> </a>
        </footer>
    )
}

export default Footer