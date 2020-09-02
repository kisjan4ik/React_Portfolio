import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import me from "../assets/images/me.jpg"
import { MDBIcon } from "mdbreact";


function AboutPage(props) {
    return (
        <div>
            <Hero  title={props.title} />


            <Content>



                <img className="t-about-image" src={me} alt="Olena Turetska" />

                <div className="t-about-text">
                    <p> Full Stack Web Developer equipped with HTML5, CSS3, JavaScript (ES6), MongoDB, MySQL and specialized in building web applications using Node and React. </p>
                    <p>Coming from Transportation Safety Management I received my Full Stack Developer Certificate from the UCF Coding Bootcamp in August 2020. The main focus of my education was to gain technical programming skills and to be able to build beautiful and useful applications and work on big projects with other developers.</p>
                    <p>Skills from my previous experience I am sure are helping me in programming. Those are attention to details, problem-solving, communication and teamwork. </p>
                    <p>Within UCF Bootcamp me and my colleagues were building projects using Express, Node, MySQL. I myself enjoy working with React and Front End, making an application not only work fail-free but also look great. In my final MERN project in UCF I’ve brought to life the idea and the design of the application I once was looking for myself and didn’t find.</p>
                    <p>My passion and hard work in gaining knowledge is proven by my A+ score. And I am looking forward to implementing my knowledge and ideas in Web Development.</p>
                           <br />
                           <p>
                        You can find my <a href="https://drive.google.com/file/d/1v20n-S2v60kDGh-8Q3vfvvaFIvZPJ3Dk/view?usp=sharing" target="_blank" rel="noopener noreferrer">resume</a> here.
                    </p>
                </div>
                
                <div id="icons">
                    <a href="https://github.com/kisjan4ik" target="_blank" rel="noopener noreferrer"><MDBIcon fab icon="github" size="3x" /></a>
                    <a href="https://www.linkedin.com/in/olena-turetska-82126a191/" target="_blank" rel="noopener noreferrer"><MDBIcon fab icon="linkedin" size="3x" /></a>
                    </div>
                    <div id="icons">
                    <MDBIcon icon="envelope" size="3x" /> aliona_kuzmenko@yahoo.com
                    <MDBIcon icon="phone-square" size="3x" className="pl-5"/> 407-308-16-72
                    </div>
            </Content>

        </div>

    )
}

export default AboutPage;