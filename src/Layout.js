
import React from 'react';
import './style.css';
import {Carousel, CarouselItem, Nav, Navbar, Card, CardImg, CardGroup} from 'react-bootstrap';


const fontstyle={
    float:"right",
    color: "white"
}

const Layout=(props)=>{
    
    return(/* HTML放這裡 */
        <div className="full">
            <div className="wrapper">
                <div className="header">
                    <div className="shortcut" style={{width:"1280px",margin:"0px auto"}}>
                        <div className="shortcut_left">
                            {/* <div className={nav_cover}>遮罩層不知道要幹嘛 </div> */}
                            <div className="nav_main clearfix">
                                <Nav defaultActiveKey="/home" as="ul">
                                    <Nav.Item as="li">
                                        <img src="img/GU_logo.svg" alt='' style={{width:"50px"}}></img>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link style={fontstyle} href="/home">WOMEN</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link style={fontstyle} eventKey="link-1">MEN</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link style={fontstyle} eventKey="link-2">KID</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </div>
                        <div className="shortcut_right">
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="carousel_container" >
                        <div className="carousel_wrapper">
                            <Carousel>
                                <Carousel.Item interval={3000}>
                                    <img src="img/c1.jpg" alt="error"></img>
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <img src="img/c2.jpg" alt="error"></img>
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <img src="img/c3.jpg" alt="error"></img>
                                </Carousel.Item>
                            </Carousel>
                            
                        </div>
                    </div>
                    <div className="banner-container">
                        <div className="banner-wrapper">
                            <img src="img/b1.jpg" alt=""></img>
                        </div>
                        <div className="banner-wrapper">
                            <img src="img/b2.jpg" alt=""></img>
                        </div>
                    </div>
                    <div className="h-content">
                        <CardGroup  style={{width:"100%"}} >
                            <Card>
                                <Card.Img src="img/cl1.jpg" >
                                </Card.Img>
                                <Card.Body>
                                    <Card.Text>
                                        
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>
                            <Card>
                                <Card.Img src="img/cl2.jpg"  >
                                </Card.Img>
                                <Card.Body>
                                    <Card.Text>
                                        
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>
                            <Card>
                                <Card.Img src="img/cl3.jpg"  >
                                </Card.Img>
                                <Card.Body>
                                    <Card.Text>
                                        
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>
                            <Card>
                                <Card.Img src="img/cl4.jpg"  >
                                </Card.Img>
                                <Card.Body>
                                    <Card.Text>
                                        
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>
                        </CardGroup>
                        
                        
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="shortcut">
                    <div className="shortcut_down">
                        <h5 style={fontstyle} >@Director:En</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Layout; //輸出App函式