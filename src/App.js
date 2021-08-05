import {Nav, Container, Navbar, Button} from 'react-bootstrap';
import React, {useState} from "react";
import './App.css';
import { HashLink as Link } from 'react-router-hash-link';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Kontakt from "./components/Kontakt";
import Omne from './components/Omne';
import './App.css';

function App() {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };
    window.addEventListener('scroll', checkScrollTop);

    return (
        <>
            <Router>
                <Container id="top-of-the-page" fluid>
                    <Navbar collapseOnSelect expand="lg" className="menuCustom">
                        <Navbar.Brand href="#home">
                            <img
                                src="images/logo.svg"
                                width="50"
                                height="50"
                                className="d-inline-block align-top"
                                alt="site logo"
                            />
                            <p className="logoName"><Link style={{color: 'black', textDecoration: "none"}} to="/">Kateřina Voláková</Link></p>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                            <Nav activeKey="/home">
                                <Nav.Item className="text-center">
                                    <Nav.Link><Link style={{color: 'black'}} to="/">O mně</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="text-center">
                                    <Nav.Link className="menu-link-color"><Link style={{color: 'black'}} to="/#projekty">Projekty</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="text-center">
                                    <Nav.Link className="menu-link-color"><Link style={{color: 'black'}} to="/kontakt">Kontakt</Link></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>

                <Switch>
                    <Route path="/kontakt">
                        <Kontakt/>
                    </Route>
                    <Route path="/omne/projekty">
                        <Omne/>
                    </Route>
                    <Route path="/">
                        <Omne/>
                    </Route>
                </Switch>
            </Router>

            {showScroll && <a href="#top-of-the-page"><Button variant="light" className="backToTopBtn">⇧</Button></a>}
        </>
    );
}

export default App;
