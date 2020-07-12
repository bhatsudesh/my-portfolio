import React from 'react'
import { Link } from 'react-scroll'

export default function HeroSection() {
    return (
        <div className="text-white lg:mt-10 mt-2 lg:px-48 px-3 lg:pt-20 pt-20">{/*hero container*/}
            <div className="mt-2 lg:flex">
                <div className="lg:w-6/12 flex align-center justify-center flex-col lg:px-10 lg:ml-10 px-1">
                    <h1 className="font-normal lg:text-6xl text-5xl tracking-tighter mb-2">Hey, I'm Sudesh.</h1>
                    <p className="font-hairline lg:text-2xl text-xl px-1">JavaScript developer from Mangalore, Karnataka. I create cool web application using ReactJs. Also, worked in back-end using NodeJs.</p>
                    <Link to="experience" smooth={true} duration={1000} delay={100} className="bg-yellow-400 x`cursor-pointer hover:bg-yellow-300 uppercase tracking-wide font-semibold lg:text-sm text-xs text-gray-700 w-32 mt-4 py-3 shadow-lg px-5 rounded-lg">Explore me</Link>
                </div>
                <img src={require("../../images/profile-image.png")} className="lg:w-5/12 lg:px-10 lg:ml-10 lg:py-10 w-5/6 px-2 ml-8 pt-2" alt="profile image" />
            </div>
        </div>
    )
} 