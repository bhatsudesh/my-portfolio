import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

export default function Navbar() {

    function closeNavbar() {
        setNavbarOpen(!navbarOpen)
    }

    function scrollTop() {
        scroll.scrollToTop()
    }
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <header className="fixed top-0 lg:px-48 px-3 flex flex-wrap items-center shadow-lg text-white py-4 w-full" style={{ backgroundColor: "#621CC8" }}>
            <div className="flex-1 flex justify-between items-center">
                <div className="font-bold lg:text-lg text-base hover:text-yellow-400 cursor-pointer" onClick={() => {
                    scrollTop();
                    closeNavbar();
                }
                }> {/*logo*/}
                            PORTFOLIO
                        </div>
            </div>
            <button onClick={() => closeNavbar()} type="button" className="text-gray-300 focus:text-white focus:outline-none hover:text-white lg:hidden block mr-2">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    {navbarOpen
                        ? <path d="M13.4049 12.0025L18.6949 6.7125C19.0849 6.3225 19.0849 5.6925 18.6949 5.3025C18.3049 4.9125 17.6749 4.9125 17.2849 5.3025L11.9949 10.5925L6.70494 5.2925C6.31494 4.9025 5.68494 4.9025 5.29494 5.2925C4.90494 5.6825 4.90494 6.3125 5.29494 6.7025L10.5849 12.0025L5.29494 17.2925C4.90494 17.6825 4.90494 18.3125 5.29494 18.7025C5.48494 18.9025 5.73494 19.0025 5.99494 19.0025C6.25494 19.0025 6.50494 18.9025 6.70494 18.7125L11.9949 13.4125L17.2849 18.7025C17.4849 18.9025 17.7349 19.0025 17.9949 19.0025C18.2549 19.0025 18.5049 18.9025 18.7049 18.7125C19.0949 18.3225 19.0949 17.6925 18.7049 17.3025L13.4049 12.0025Z" fill="#ffffff" />
                        : <path d="M5.03369 6.31641H18.9663C19.519 6.31641 19.9663 5.86914 19.9663 5.31641C19.9663 4.76367 19.519 4.31641 18.9663 4.31641H5.03369C4.48096 4.31641 4.03369 4.76367 4.03369 5.31641C4.03369 5.86914 4.48096 6.31641 5.03369 6.31641ZM18.9663 18.6836H5.03369C4.48096 18.6836 4.03369 19.1309 4.03369 19.6836C4.03369 20.2363 4.48096 20.6836 5.03369 20.6836H18.9663C19.519 20.6836 19.9663 20.2363 19.9663 19.6836C19.9663 19.1309 19.519 18.6836 18.9663 18.6836ZM15.4282 13.5H5.03369C4.48096 13.5 4.03369 13.0527 4.03369 12.5C4.03369 11.9473 4.48096 11.5 5.03369 11.5H15.4282C15.981 11.5 16.4282 11.9473 16.4282 12.5C16.4282 13.0527 15.981 13.5 15.4282 13.5Z" fill="#ffffff" />
                    }
                </svg>
            </button>

            <div className={(navbarOpen ? "block " : "hidden ") + "lg:flex lg:items-center lg:w-auto w-full"} id="menu">
                <nav>
                    <ul className="lg:flex items-center justify-between font-medium text-gray-300 text-base pt-4 lg:pt-0">
                        <li className="lg:px-5 hover:text-yellow-400 active:text-yellow-400 lg:py-0 py-2">
                            <Link to="experience" className="cursor-pointer" smooth={true} duration={1000} onClick={() => closeNavbar()}>EXPERIENCE</Link>
                        </li>
                        <li className="lg:px-5 hover:text-yellow-400 lg:py-0 py-2">
                            <Link to="education" className="cursor-pointer" smooth={true} duration={1000} onClick={() => closeNavbar()}>EDUCATION</Link>
                        </li>
                        <li className="lg:px-5 hover:text-yellow-400 lg:py-0 py-2">
                            <Link to="skill" className="cursor-pointer" smooth={true} duration={1000} onClick={() => closeNavbar()}>SKILLS</Link>
                        </li>
                        <li className="lg:px-5 hover:text-yellow-400 lg:py-0 py-2">
                            <Link to="project" className="cursor-pointer" smooth={true} duration={1000} onClick={() => closeNavbar()}>PROJECTS</Link>
                        </li>
                        <li className="lg:pl-5 hover:text-yellow-400 lg:py-0 py-2">
                            <Link to="contact" className="cursor-pointer" smooth={true} duration={1000} onClick={() => closeNavbar()}>CONTACT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}