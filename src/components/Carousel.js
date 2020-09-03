import React from "react";
import Card from "./Card"
import xfiles from "../assets/images/xfiles.jpg";
import mvc from "../assets/images/mvc.jpg";
import project1 from "../assets/images/project1.jpg";
import password from "../assets/images/password.jpg";
import yrkdng from "../assets/images/yourkidding.JPG";
import Row from "react-bootstrap/Row";
import Container from  "react-bootstrap/Container";


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "X-Files",
                    subtitle: "Recorded UFO sightings shared experience",
                    imgSrc: xfiles,
                    link: "https://murmuring-reef-63999.herokuapp.com/user/login",
                    selected: false
                },
                {
                    id: 1,
                    title: "Eat-Da-Burger",
                    subtitle: "MVC app to select items from menu",
                    imgSrc: mvc,
                    link: "https://shrouded-scrubland-07214.herokuapp.com/",
                    selected: false
                },
                {
                    id: 2,
                    title: "GIG crashers",
                    subtitle: "Events and possible flights destination searher",
                    imgSrc: project1,
                    link: "https://kisjan4ik.github.io/Gig-Crasher/",
                    selected: false
                },
                {
                    id: 3,
                    title: "Password Generator",
                    subtitle: "Random password generator",
                    imgSrc: password,
                    link: "https://kisjan4ik.github.io/JavaScript-Password-Generator/",
                    selected: false
                },
                {
                    id: 4,
                    title: "Your KID-ing",
                    subtitle: "Web application to find entertainment for kids",
                    imgSrc: yrkdng,
                    link: "https://calm-basin-38354.herokuapp.com/",
                    selected: false
                }


            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        })

this.setState({
    items
})
    }

makeItems = (items) => {
    return items.map (item => {
        return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
    })
}

    render() {
        return (
            <Container id="body" fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}

                </Row>
            </Container>
        )
    }
}

export default Carousel;