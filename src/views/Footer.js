import React from 'react'
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import {GrMail} from 'react-icons/gr'
import {SiLeetcode,SiGeeksforgeeks,SiCodechef} from 'react-icons/si'
import logo from '../img/logo1.png'

const arr = [
    {icon: <AiFillLinkedin className="h-6 w-6 text-2xl hover:text-primary transition-all duration-500 ease-in-out"/>, title: 'Linkedin',href: 'https://www.linkedin.com/in/shekhar-biswas-17a720186/'},
    {icon: <AiFillGithub className="h-6 w-6 text-2xl hover:text-primary transition-all duration-500 ease-in-out"/>, title: 'Github', href: 'https://github.com/anugoyal998'},
    {icon: <GrMail className="h-6 w-6 text-2xl hover:text-primary transition-all duration-500 ease-in-out"/>, title: 'Mail', href: 'mailto:bshekhar2001@gmail.com'},
    // {icon: <SiLeetcode className="h-6 w-6 text-2xl hover:text-primary transition-all duration-500 ease-in-out"/>, title: 'Leetcode', href: 'https://leetcode.com/anugoyal998/'},
    // {icon: <SiGeeksforgeeks className="h-6 w-6 text-2xl hover:text-primary transition-all duration-500 ease-in-out"/>, title: 'GeeksforGeeks', href: 'https://auth.geeksforgeeks.org/user/anugoyal998/profile'},
    // {icon: <SiCodechef className="h-6 w-6 text-2xl hover:text-primary transition-all duration-500 ease-in-out"/>, title: 'Codechef', href: 'https://www.codechef.com/users/goyalanubhav43'},
]

export const Footer = () => {
    return (
        <div className="bg-primary text-white pt-20 flex flex-col items-center mt-10">
            {/* <img src={logo} alt="logo" /> */}
            <p className="text-xl xs:text-2xl opacity-70 text-center mb-16">Living, learning, & leveling up <br/> one day at a time.</p>
            <div className="flex items-center space-x-3 xs:space-x-4">
                {
                    arr.map((e,key)=> {
                        return <IconCard data={e} key={key} />
                    })
                }
            </div>
            <p className="text-black my-5">Made with ❤ &copy; Shekhar</p>
        </div>
    )
}

const IconCard = ({data})=> {
    const {icon,href} = data
    return(
        <a href={href} target="_blank" className="border-opacity-70 border flex justify-center items-center rounded-full p-2 hover:bg-white cursor-pointer transition-all duration-500 ease-in-out">{icon}</a>
    )
}