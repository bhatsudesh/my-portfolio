import React from 'react'

export default function Contents() {
    return (
        <div className="lg:px-40 px-3">
            <section id="experience" className="px-8 lg:mt-16 mt-8 lg:flex">
                <img src={require("../../images/experience-still3.svg")} className="lg:w-6/12 bg-purple-100 shadow-md rounded-lg mb-2" alt="experience logo"></img>
                <div className="lg:w-6/12 flex align-center justify-center flex-col lg:px-12 px-3">
                    <h2 className="font-extrabold lg:text-4xl text-3xl text-gray-900 tracking-tight mb-2">Experience</h2>
                    <p className="lg:text-xl text-lg text-gray-700 pb-3">- Part of the core development team at <b>Privjs.com</b> and <b>practiskills.com</b>.</p>
                    <p className="lg:text-xl text-lg text-gray-700">- Worked on <b>ReactWind</b> a react component library using Tailwind css.</p><br />
                    <ul className="lg:text-lg text-base text-gray-700">
                        <li className="py-2"><b>Practiskills.com</b> - NodeJs developer.</li>
                        <li className="py-2"><b>Reactwind</b> - ReactJs developer.</li>
                        <li className="py-2"><b>PrivJs.com</b> - ReactJs/NodeJs developer.</li>
                    </ul>
                </div>
            </section>
            <hr className="lg:my-10 my-5 mx-3"></hr>

            <section id="education" className="lg:mt-16 mt-10 px-8 lg:flex lg:flex-row-reverse">
                <img src={require("../../images/education-still.svg")} className="lg:w-6/12 bg-purple-100 shadow-md rounded-lg mb-2" alt="experience logo"></img>
                <div className="lg:w-6/12 flex align-center justify-center flex-col lg:px-12 px-3">
                    <h2 className="font-extrabold lg:text-4xl text-3xl text-gray-900 tracking-tight mb-2">Education</h2>
                    <p className="lg:text-xl text-lg text-gray-700"><b>Dayananda Sagar College of Engineering (MCA)</b><br />
                2017 - 2020<br />Pursuing MCA with 7.57 CGPA.</p><br />
                    <p className="lg:text-xl text-lg text-gray-700"><b>St. Mary’s Syrian College Brahmavar (BCA)</b><br />2014 - 2017<br />
                Completed BCA with 7.92 CGPA.</p>
                </div>
            </section>
            <hr className="lg:my-10 my-5 mx-3"></hr>

            <section id="skill" className="lg:mt-16 mt-10 px-8 lg:flex">
                <img src={require("../../images/skill-still2.svg")} className="lg:w-6/12 bg-purple-100 shadow-md rounded-lg mb-2" alt="experience logo"></img>
                <div className="lg:w-6/12 flex align-center justify-center flex-col lg:px-12 px-3">
                    <h2 className="font-extrabold lg:text-4xl text-3xl text-gray-900 tracking-tight mb-2">Skills</h2>
                    <p className="lg:text-xl text-lg text-gray-700">I look forward to learning more based on the requirements and trend.</p><br />
                    <p className="lg:text-xl text-lg text-gray-700"><b>TECHNICAL SKILLS</b><br />
                NodeJs, ReactJs, JavaScript, HTML5 and CSS3, Python, Java, PHP.</p><br />
                    <p className="lg:text-xl text-lg text-gray-700"><b>TOOLS AND TECHNOLOGIES</b><br />
                REST API, GitHub, Slack, Jira, Gitlab, Insomnia.</p><br />
                    <p className="lg:text-xl text-lg text-gray-700"><b>DATABASE TOOLS</b><br />
                MongoDB, MySQL.</p></div>
            </section>
            <hr className="lg:my-10 my-5 px-3"></hr>

            <section id="project" className="lg:mt-20 mt-10 lg:mb-5 px-8 lg:flex lg:flex-row-reverse">
                <img src={require("../../images/project-still2.svg")} className="lg:w-6/12 bg-purple-100 shadow-md rounded-lg mb-2" alt="experience logo"></img>
                <div className="lg:w-6/12 flex align-center justify-center flex-col lg:px-12 px-3">
                    <h2 className="font-extrabold lg:text-4xl text-3xl text-gray-900 tracking-tight mb-2">Projects</h2>
                    <p className="lg:text-xl text-lg text-gray-700"><b>Super Todo</b><br />
                - ReactJs, HTML5 and TailwindCss<br /></p><br />
                    <p className="lg:text-xl text-lg text-gray-700"><b>Practiskills Admin Panel</b>
                    <svg width="20" height="20" className="inline ml-2 mb-2">
                        <path d="M12 1C9.23858 1 7 3.23858 7 6V11C5.89543 11 5 11.8954 5 13V21C5 22.1046 5.89543 23 7 23H17C18.1046 23 19 22.1046 19 21V13C19 11.8954 18.1046 11 17 11V6C17 3.23858 14.7614 1 12 1ZM15.5 6V11H8.5V6C8.5 4.067 10.067 2.5 12 2.5C13.933 2.5 15.5 4.067 15.5 6ZM12 18C11.4477 18 11 18.4477 11 19V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V19C13 18.4477 12.5523 18 12 18Z" fill="#4A5568"/>
                    </svg> <br />
                - ReactJs, NodeJs(Fastify), MongoDb, HTML5 and TailwindCss.<br /></p><br />
                    <p className="lg:text-xl text-lg text-gray-700"><b>Bus Tracking App</b><br />
                - Apache Cordova, AngularJs, HTML and BootstrapCss.<br /></p><br />
                </div>
            </section>
        </div>
    )
}