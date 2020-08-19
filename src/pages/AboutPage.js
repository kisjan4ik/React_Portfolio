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
                    <p> The world of computers and technologies has integrated in our life for the past couple of decades incredibly. </p>
                    <p>I am sure that future is bringing to us even bigger and deeper changes.
                        <p> I was intrigued by programming and being able to use these technologies from inside and not just as user for years and I am realizing my interest and passion now by studying in UCF Coding Bootcamp. My goal is to become a Full Stack Web Developer and to be able to create, build and develop projects. </p>
                        
                        <p></p>Studying in UCF Coding Bottcamp I've gained and continue to improve skills, such as:
                        HTML5, CSS3, JavaScript (ES6),  jQuery, Bootstrap, React, Node & NPM, Express, MySQL, MongoDB, and Git.               <br />
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