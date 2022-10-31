import React, { useState } from 'react';
import { Container, Button, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App'

const Header = ({ isButtonShow }) => {
    const [sidebar, setSidebar] = useState('collapse')
    window.addEventListener('scroll', () => {
        setSidebar('collapse');
    })
    return (
        <div className='Header-sty'>
            <Container>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container mt-3">
                        <a href="/" className='navbar-brand'>
                            <h4>Binar Cartal</h4>
                        </a>
                        <button onClick={() => sidebar === 'collapse' ? setSidebar(null) : setSidebar('collapse')}
                            className="navbar-toggler" type="button">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`navbar-collapse ${sidebar}`} id='navbarNav'>
                            <ul className="navbar-nav ml-auto mr-5">
                                <li className="nav-item mr-3 fw-bold">
                                    <a className="nav-link" href="/#ourservices">Our Services</a>
                                </li>
                                <li className="nav-item mr-3 fw-bold">
                                    <a className="nav-link" href="/#whyus">Why Us</a>
                                </li>
                                <li className="nav-item mr-3 fw-bold">
                                    <a className="nav-link" href="/#testimonials">Testimonial</a>
                                </li>
                                <li className="nav-item mr-3 fw-bold">
                                    <a className="nav-link" href="/#faq">FAQ</a>
                                </li>
                                <button className="nav-item mr-3 fw-bold" id='buttonHeader'>
                                    <a className="nav-link" id="aHeader" href="/register">Register</a>
                                </button>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container mt-5">
                    <div className="row d-flex justify-content-between ">
                        <div className="col-lg-6 pb-3">
                            <h1>Sewa & Rental Mobil Terbaik di kawasan Tangerang</h1>
                            <p className="mt-4 mr-4">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                            <a href="/car" className="text-reset text-decoration-none">
                                {
                                    isButtonShow && (
                                        <Link to={"/SewaMobil"}>
                                            <Button className="btn-success" id='buttonHeader'>Mulai Sewa Mobil</Button>
                                        </Link>)
                                }
                            </a>
                        </div>
                        <div className="col-lg-6 position-relative" id='carwrapper'>
                            <img className="car-img" src={require("../media/img_car.png")}></img>
                        </div>
                    </div>
                </div>
            </Container >
        </div >
    )
}




export default Header;