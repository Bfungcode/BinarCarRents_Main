import React, { useState } from 'react';
import { Navbar, Container, Nav, NavbarBrand, Button, Row, Col } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import '../App'
import Content from './Content'

const Header = ({ isButtonShow }) => {
    const [sidebar, setSidebar] = useState('collapse');
    window.addEventListener('scroll', () => {
        setSidebar('collapse');
    })
    return (
        <div className='Header-sty'>
            <Container>
                <div className='navbar1'>
                    <Navbar>
                        <Container>
                            <Navbar.Brand href="/">
                                <h4>Binar Cartal</h4>
                            </Navbar.Brand>
                            <Nav>
                                <Nav.Link href="#ourservices"><strong>Our Services</strong></Nav.Link>
                                <Nav.Link href="#whyus"><strong>Why Us</strong></Nav.Link>
                                <Nav.Link href="#testimonials"><strong>Testimonials</strong></Nav.Link>
                                <Nav.Link href="#faq"><strong>FAQ</strong></Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-6 pb-3 d-flex flex-column justify-content-center">
                            <h1>Sewa & Rental Mobil Terbaik di kawasan Tangerang</h1>
                            <h4 className="mt-4 mr-4">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</h4>
                            <a href="/car" className="text-reset text-decoration-none">
                                {
                                    isButtonShow && (
                                        <Link to={"/SewaMobil"}>
                                            <Button className="btn-success">Mulai Sewa Mobil</Button>
                                        </Link>)
                                }
                            </a>
                        </div>
                        <div className="col-lg-6 position-relative" id='carwrapper'>
                            <img className="car-img" src={require("../media/img_car.png")}></img>
                        </div>
                    </div>
                </div>
            </Container>
        </div >
    )
}




export default Header;