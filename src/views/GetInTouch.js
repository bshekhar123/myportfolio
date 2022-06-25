import React from 'react'

export const GetInTouch = () => {
    return (
        <div className="mt-10 flex flex-col items-center">
            <p className="text-3xl xs:text-4xl font-bold text-primary">Get In Touch</p>
            <p className="font-semibold text-fadedBlack mt-1 text-center text-sm xs:text-base px-3 xs:px-10 sm:px-28 md:px-40 nd:px-56 lg:px-72 xl:px-96">I'm currently looking for internships or any Open Source Collaborations, my inbox is alaways open. Whether you have a question or just want to have a chat!</p>
            <a href="mailto:bshekhar2001@gmail.com" className="text-lg focus:outline-none border-2 border-primary px-3 py-2 text-primary rounded-lg font-bold mt-6 hover:text-white hover:bg-black  transition-all duration-500 ease-in-out"><p className="">Say Hello</p></a >
        </div>
    )
}
