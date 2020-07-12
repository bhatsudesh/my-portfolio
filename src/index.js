import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/nav.js'
import HeroSection from './components/header.js'
import Contents from './components/contents.js'
import Footer from './components/footer.js'

const App = () => {
    return (
        <div className="font-sans">
            <div className="" style={{ backgroundColor: "#691BD4" }}>
                <Navbar />
                <HeroSection />
                <img src={require("../images/bg-shade.png")} className="w-full lg:-mt-20 -mt-8" alt="bg-shades"></img>
            </div>

            {/* contents*/}

            <Contents />
            <img src={require("../images/footer-shadow.png")} className="w-full" alt="bg-shades"></img>
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))