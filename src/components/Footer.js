import {Col, Container, Row} from "react-bootstrap";
import Socials from "./Socials";
import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <Socials></Socials>
            <p>Navrhla & vytvořila Kateřina Voláková<br/>2021</p>
        </div>
    );
}

export default Footer;