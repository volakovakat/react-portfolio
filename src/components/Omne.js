import {Container, Col, Row, Image, Button, Jumbotron, Card, Badge} from "react-bootstrap";
import Socials from "./Socials";
import "./Omne.css";
import Pdf from "./documents/CV_Katerina_Volakova.pdf";
import Footer from "./Footer";

function Omne() {
    return (
        <>
            <Jumbotron className="customJumb" fluid>
                <Container className="fullHeader">
                    <Row>
                        <Col className="headerMain" xs={12} lg={7} md={6}>
                            <h1>Ahoj,<br/> jsem Kateřina Voláková</h1>
                            <p>Juniorní programátorka z Prahy</p>
                            <p>
                                <a className="btn btn-info" href="#omne-info">Víc o mně</a>
                            </p>
                            <Socials/>
                        </Col>
                        <Col xs={12} lg={5} md={6}>
                            <Image className="portraitCircle" src="images/portrait-circle.png" fluid/>
                        </Col>
                    </Row>

                </Container>
            </Jumbotron>


            <Container>
                <Row id="omne-info" className="omneInfo">
                    <Col className="align-self-center" xs={12} lg={6} md={6}>
                        <div>
                            <h1>O mně</h1>
                        </div>


                        <p className="text-justify">Ahoj, jmenuju se Kačka a jsem front-end nadšenec. Ovládám HTML, CSS
                            a Wordpress na pokročilé úrovni. JavaScript a React na úrovni juniora. Zkušenosti sbírám zatím
                            na soukromých projektech nebo pomáhám neziskovkám. Zajímám se i o grafiku a UX design.<br/>
                            Pokud zrovna nesedím u pracovního stolu, tak mě najdete v kavárně nebo v přírodě na
                            procházce. Nejradši ale cestuju po světe s napínavou knížkou v batohu.
                        </p>
                        <p>
                            <a className="btn btn-info" href="#zkusenosti">Zkušenosti</a>
                            <a href={Pdf} target="_blank">
                                <Button variant="warning" className="resumeButton">Resume</Button>
                            </a>
                        </p>
                    </Col>
                    <Col xs={10} lg={5} md={5} style={{textAlign: "center"}}>
                        <Image className="myImage" src="images/kacenka.png" fluid/>
                    </Col>
                </Row>
            </Container>

            <Container className="activitiesCont" id="zkusenosti">
                <Row className="justify-content-center">
                    <h1 className="bgImage">Moje<br/>aktivity</h1>
                </Row>
                <Row className="activitiesRow">
                    <Col className="infoVol" xs={11} lg={5} md={5}>
                        <h2>Czechitas</h2>
                        <h4>březen 2021 - současnost</h4>
                        <p className="text-justify">
                            Komunita <a href="https://www.czechitas.cz/">Czechitas</a> motivuje ženy, vzdělává je a
                            pomáhá jim najít vysněnou práci v IT oboru.<br/>
                            V roli kouče pomáhám lektorovi s výukou během kurzů a účastnicím s plněním úkolů, dodatečným
                            vysvětlením probírané látky a celkovou podporou účastnic. Vyzkoušela jsem si i roli tzv.
                            workshopistky, která má za úkol kompletní organizaci na místě v den konání akce.</p>
                    </Col>
                    <Col className={"verticalLine"} lg={2}>
                        <Image src="images/czechitas.svg" className="milestoneStyle"/>
                    </Col>
                    <Col xs={12} lg={5} md={5} className={"align-self-center"}>
                        <Image className={"myImage"} src="images/czechitas1.jpeg" fluid/>
                    </Col>
                </Row>

                <Row className="activitiesRow">
                    <Col xs={{span: 12, order: "last"}} lg={{span: 5, order: "first"}} md={5}
                         className={"align-self-center"}>
                        <Image className={"myImage"} src="images/reactgirls.jpeg" fluid/>
                    </Col>
                    <Col className={"verticalLine"}>
                        <Image src="images/reactgirls.svg" className="milestoneStyle"/>
                    </Col>
                    <Col className="infoVol align-self-center" xs={{span: 11, order: "first"}}
                         lg={{span: 5, order: "last"}} md={5}>

                        <h2>ReactGirls</h2>
                        <h4>únor 2021 - současnost</h4>
                        <p className="text-justify">
                            <a href="https://reactgirls.com/">ReactGirls</a> je komunita, která podobně jako Czechitas
                            pomáhá ženám na jejich cestě do IT světa.<br/>
                            Jsem členem organizačního týmu a mé hlavní zapojení je v marketingu. Mám na starosti
                            sociální sítě ReactGirls a tvorbu grafiky s nimi spojenou. Pokud se konají offline akce,
                            pomáhám s organizací před i na místě. Na blogu ReactGirls nedávno vyšel článek <a
                            href="https://reactgirls.medium.com/skute%C4%8Dn%C3%A9-p%C5%99%C3%ADb%C4%9Bhy-kate%C5%99ina-vol%C3%A1kov%C3%A1-5ffa08a89b6f"
                            target="blank">o mojí cestě k programování.</a></p>

                    </Col>
                </Row>

                <Row className="activitiesRow">
                    <Col className="infoVol" xs={11} lg={5} md={5}>
                        <h2>Česko.digital</h2>
                        <p><a href="https://cesko.digital/">Česko.digital</a> je komunita expertních dobrovolníků z
                            mnoha oborů od IT přes projektové řízení až po marketing, kteří chtějí ve svém volném čase
                            pomáhat a dělat tak Česko lepším místem k životu.</p>
                        <h4>listopad 2020 - červen 2021</h4>
                        <p className="text-justify">
                            Konkrétně do projektu <a href="https://www.ucimeonline.cz/" target="_blank">Učíme
                            online</a> jsem se zapojila tvorbou pravidelného newsletteru, tvorbou příspěvků na sociální
                            sítě a editací webových stránek, postavených na Wordpressu.</p>
                        <h4>srpen 2021 - současnost</h4>
                        <p className="text-justify">
                            Nově jsem zapojená do projektu <a href="https://www.jehlomat.cz/"
                                                              target="_blank">Jehlomat</a> jako Junior Front End
                            Developer.
                            Hlavním cílem projektu je zapojení veřejnosti při hlášení nálezů injekčního materiálu pomoci
                            mobilní aplikace či webového rozhraní.
                        </p>
                    </Col>

                    <Col className={"verticalLine"}>
                        <Image src="images/ceskodigital.svg" className="milestoneStyle"/>
                    </Col>
                    <Col xs={12} lg={5} md={5} className={"align-self-center"}>
                        <Image className={"myImage"} src="images/uo.png" fluid/>
                    </Col>
                </Row>
                <Row className="endVerticalLine" id="projekty">
                    <h1 className="bgImageBottom">Dokončené<br/>projekty</h1>
                </Row>

            </Container>
            <Container className="activitiesCont">
                <Row className="projectsRow">
                    <Card className="cardProjectCustom">
                        <Card.Img variant="top" src="images/coin-hunter.png"/>
                        <Card.Body>
                            <Card.Title><strong>Coin Hunter</strong></Card.Title>
                            <div className="badgesCustom">
                                <Badge variant="secondary">HTML</Badge>{' '}
                                <Badge variant="secondary">CSS</Badge>{' '}
                                <Badge variant="secondary">JavaScript</Badge>
                            </div>
                            <Card.Text>
                                Cílem projektu bylo vytvořit hru, ve které se panáček pohybuje pomocí šipek a sbírá
                                mince. Zároveň se počítá skóre. Hra končí po sebrání všech pěti mincí.

                                Projekt byl vytvořený v rámci kurzu JavaScript od Czechitas.
                            </Card.Text>
                            <div>
                                <Button className="button-left" variant="info"
                                        href="https://volakovakat.github.io/projekt1-coin-hunter/"
                                        target="blank">Demo</Button>

                                <Button className="button-right" variant="warning"
                                        href="https://github.com/volakovakat/projekt1-coin-hunter" target="blank">Zdrojový
                                    kód</Button>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className="cardProjectCustom">
                        <Card.Img variant="top" src="images/flappy-bird.png"/>
                        <Card.Body>
                            <Card.Title><strong>Flappy Bird</strong></Card.Title>
                            <div className="badgesCustom">
                                <Badge variant="secondary">React Native</Badge>
                            </div>

                            <Card.Text>
                                Vytvoření známé hry za použití frameworku Expo. Jedná se o sadu nástrojů a služeb
                                postavených na React Native a nativních platformách, které pomohou vyvíjet, stavět,
                                nasazovat a rychle iterovat na iOS, Android a webové aplikace.
                            </Card.Text>
                            <div>
                                {/*<Button className="button-left" variant="info" href="https://volakovakat.github.io/flappy-birds/" target="blank">Demo</Button>*/}

                                <Button variant="warning"
                                        href="https://github.com/volakovakat/flappy-birds" target="blank">Zdrojový
                                    kód</Button>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className="cardProjectCustom">
                        <Card.Img variant="top" src="images/shoes.png"/>
                        <Card.Body>
                            <Card.Title><strong>Kódování dle grafického zadání</strong></Card.Title>
                            <div className="badgesCustom">
                                <Badge variant="secondary">HTML</Badge>{' '}
                                <Badge variant="secondary">CSS</Badge>
                            </div>

                            <Card.Text>
                                Příklad stylování e-shop karty. Na úlohách tohoto typu průběžně cvičím CSS.
                            </Card.Text>
                            <div>
                                <Button className="button-left" variant="info"
                                        href="https://volakovakat.github.io/Cviceni-Boty/" target="blank">Demo</Button>

                                <Button className="button-right" variant="warning"
                                        href="https://github.com/volakovakat/Cviceni-Boty" target="blank">Zdrojový
                                    kód</Button>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className="cardProjectCustom">
                        <Card.Img variant="top" src="images/jvnejremeslnik.png"/>
                        <Card.Body>
                            <Card.Title><strong>Řemeslník Jaroslav Vanečko</strong></Card.Title>
                            <Badge className="badgesCustom" variant="secondary">Wordpress</Badge>
                            <Card.Text>
                                Tvorba nového webu pomocí redakčního systému Wordpress.
                            </Card.Text>
                            <div>
                                <Button className="button-left" variant="info" href="https://www.jvnejremeslnik.cz/"
                                        target="blank">Přejít na web</Button>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className="cardProjectCustom">
                        <Card.Img variant="top" src="images/portfolio-img.png"/>
                        <Card.Body>
                            <Card.Title><strong>Portfolio</strong></Card.Title>
                            <div className="badgesCustom">
                                <Badge variant="secondary">React</Badge>{' '}
                                <Badge variant="secondary">Bootstrap</Badge>{' '}
                                <Badge variant="secondary">Node.js</Badge>
                            </div>

                            <Card.Text>
                                Tyto webové stránky také řadím mezi své projekty. Poprvé jsem si na nich osahala
                                Bootstrap v kombinaci s Reactem.<br/>
                                Největší výzvou bylo zprovoznění formuláře pomocí backendu.
                            </Card.Text>
                            <div>
                                <Button className="button-left" variant="info" href="https://katerinavolakova.cz">Zpět
                                    na úvod</Button>
                                <Button className="button-right" variant="warning"
                                        href="https://github.com/volakovakat/react-portfolio" target="blank">Zdrojový
                                    kód</Button>
                            </div>

                        </Card.Body>
                    </Card>

                    <Card className="cardProjectCustom">
                        <Card.Img variant="bottom" src="images/canvaimage.png"/>
                        <Card.Body className="cardBodyGithub">
                            <Card.Title><strong>Další projekty<br/>jsou k dispozici na mém<br/>Github
                                účtu.</strong></Card.Title>
                            <div>
                                <Badge variant="info">HTML</Badge>{' '}
                                <Badge variant="info">CSS</Badge>{' '}
                                <Badge variant="info">JavaScript</Badge>{' '}
                                <Badge variant="info">React</Badge>
                            </div>

                            <Button variant="warning" className="githubBtn">Přejít na Github <Image
                                src="images/githublogosimple.svg"/></Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>

            <Footer></Footer>

        </>
    );
};
export default Omne;




