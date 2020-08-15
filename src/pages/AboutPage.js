import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import me from "../assets/images/me.jpg"
import { MDBIcon } from "mdbreact";

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <div className="icons">
                    <a href="https://github.com/kisjan4ik" target="_blank" rel="noopener noreferrer"><MDBIcon fab icon="github" size="3x" className="mb-3" /></a>
                    <a href="https://www.linkedin.com/in/olena-turetska-82126a191/" target="_blank" rel="noopener noreferrer"><MDBIcon fab icon="linkedin" size="3x" className="mb-3" /></a>
                    <p> <MDBIcon icon="envelope" size="3x" /> aliona_kuzmenko@yahoo.com</p>
                    <p><MDBIcon icon="phone-square" size="3x" /> 407-308-16-72</p>
                </div>
            <Content>

                
                <img className="t-about-image" src={me} alt="Olena Turetska" />

                <div className="t-about-text">
                    <p> It was always easy for me to learn and that is why I almost never had to work hard while
                    learning new stuff.
                    I started to work for a big company when I still was studying in an University. Back then I
                    lived in Ukraine and my position in the copmany was a translator of technical documentation,
                    mostly I translated documents from Russian into English.
                    </p>
                    <p> Then I decided to find a job that would be closer to my major and that's why I worked for a
                    while in a bank.
                    I was thinking not once in my life that programming is an interesting thing to do but always
                    thought one shoud have a specifically "built" brain to do it. And that was the reason I had
                    never tried learning to code.
                    </p>
                    <p> But I've moved to USA a couple of years ago and have decided that it was already a big change in
                    my life and what is the reason not to try to make another one. This is how I found the UCF
                        Bootcamp. </p>
                    <p> I can say now that this is exciting and hard at the same time. It is one of those rare times I
                    really need to work hard to learn and understand the stuff. But I really enjoy that I can
                    actually see what I have built and that gives me an inspiration I've never had before, because
                    all my previous jobs did not have an option for me to actually see the result of my work.
                        <br />
                        I have big expectaions about what I will know and what I will be able to do after this Bootcamp
                        and I will do my best in learning!
                        <br />
                        You can find my <a href="https://drive.google.com/file/d/1r3BJgwF9QB9e0eGWQN3milVVGOp74fK0/view?usp=sharing" target="_blank" rel="noopener noreferrer">resume</a> here.
                    </p>
                </div>
            </Content>

        </div>
    )
}

export default AboutPage;