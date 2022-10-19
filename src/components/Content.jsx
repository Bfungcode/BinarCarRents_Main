import { Row, Col, Container, Button, Accordion, Carousel, Card } from 'react-bootstrap'
import React, { useState } from 'react'
import * as Icon from 'react-bootstrap-icons'
import '../App'
import { CardBody } from 'reactstrap'
import 'swiper/scss'
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide, } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import axios from 'axios'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Content = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <div className='Content-sty'>
            <Container>
                <div className='mini1' id='ourservices'>
                    <div className='contain'>
                        <Col>
                            <img className="gambarService" src={require("../media/img_service.png")}></img>
                        </Col>
                        <Col>
                            <div className='tulisan1'>
                                <h2>Best Car Rental for any kind of trip in Tangerang!</h2>
                                <br></br>
                                <p>Sewa mobil di Tangerang bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                                <div className='listverif'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                                        <path d="M17.3333 8L9.99996 15.3333L6.66663 12" stroke="#0D28A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <br></br>
                                    <h5>Sewa Mobil Dengan Supir di Bali 12 Jam</h5>
                                </div>
                                <div className='listverif'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                                        <path d="M17.3333 8L9.99996 15.3333L6.66663 12" stroke="#0D28A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <br></br>
                                    <h5>Sewa Mobil Lepas Kunci di Bali 24 Jam</h5>
                                </div>
                                <div className='listverif'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                                        <path d="M17.3333 8L9.99996 15.3333L6.66663 12" stroke="#0D28A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <br></br>
                                    <h5>Sewa Mobil Jangka Panjang Bulanan</h5>
                                </div>
                                <div className='listverif'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                                        <path d="M17.3333 8L9.99996 15.3333L6.66663 12" stroke="#0D28A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <br></br>
                                    <h5>Gratis Antar - Jemput Mobil di Bandara</h5>
                                </div>
                                <div className='listverif'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                                        <path d="M17.3333 8L9.99996 15.3333L6.66663 12" stroke="#0D28A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <br></br>
                                    <h5>Layanan Airport Transfer / Drop In Out</h5>
                                </div>
                            </div>
                        </Col>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='mini2' id="whyus">
                    <h2>Why Us?</h2>
                    <br></br>
                    <h4>Mengapa harus pilih Binar Car Rental?</h4>
                    <br></br>
                    <div className='allcard'>
                        <div className='container'>
                            <div className="row">
                                <div className='col-sm-12 p-1 col-md-6 col-lg-3'>
                                    <Card>
                                        <Card.Body>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="16" cy="16" r="16" fill="#F9CC00" />
                                                <path d="M11.8333 24.3333H9.33329C8.89127 24.3333 8.46734 24.1577 8.15478 23.8452C7.84222 23.5326 7.66663 23.1087 7.66663 22.6667V16.8333C7.66663 16.3913 7.84222 15.9674 8.15478 15.6548C8.46734 15.3423 8.89127 15.1667 9.33329 15.1667H11.8333M17.6666 13.5V10.1667C17.6666 9.50362 17.4032 8.86774 16.9344 8.3989C16.4656 7.93006 15.8297 7.66666 15.1666 7.66666L11.8333 15.1667V24.3333H21.2333C21.6352 24.3379 22.0253 24.197 22.3315 23.9367C22.6378 23.6763 22.8397 23.3141 22.9 22.9167L24.05 15.4167C24.0862 15.1778 24.0701 14.9339 24.0027 14.7019C23.9354 14.4698 23.8184 14.2552 23.6598 14.0729C23.5013 13.8906 23.305 13.7449 23.0846 13.646C22.8642 13.5471 22.6249 13.4973 22.3833 13.5H17.6666Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <h2>Mobil Lengkap</h2>
                                            <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih, terawat dan nyaman dipakai</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className='col-sm-12 p-1 col-md-6 col-lg-3'>
                                    <Card>
                                        <Card.Body>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="16" cy="16" r="16" fill="#FA2C5A" />
                                                <path d="M23.1583 17.175L17.1833 23.15C17.0285 23.305 16.8447 23.4279 16.6424 23.5118C16.44 23.5956 16.2232 23.6388 16.0041 23.6388C15.7851 23.6388 15.5682 23.5956 15.3659 23.5118C15.1636 23.4279 14.9797 23.305 14.825 23.15L7.66663 16V7.66666H16L23.1583 14.825C23.4687 15.1373 23.6429 15.5597 23.6429 16C23.6429 16.4403 23.4687 16.8627 23.1583 17.175V17.175Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M11.8334 11.8333H11.8417" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <h2>Harga Murah</h2>
                                            <p>Harga murah dan bersaing, bisa badingkan harga kami dengan rental mobil lain</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className='col-sm-12 p-1 col-md-6 col-lg-3'>
                                    <Card>
                                        <Card.Body>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="16" cy="16" r="16" fill="#0D28A6" />
                                                <path d="M16 24.3333C20.6023 24.3333 24.3333 20.6024 24.3333 16C24.3333 11.3976 20.6023 7.66666 16 7.66666C11.3976 7.66666 7.66663 11.3976 7.66663 16C7.66663 20.6024 11.3976 24.3333 16 24.3333Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M16 11V16L19.3333 17.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <h2>Layanan 24 Jam</h2>
                                            <p>Siap melayani kebutuhan Anda selama 24jam nonstop. Kami juga tersedia di akhir minggu</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className='col-sm-12 p-1 col-md-6 col-lg-3'>
                                    <Card>
                                        <Card.Body>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="16" cy="16" r="16" fill="#5CB85F" />
                                                <path d="M16.0001 18.5C19.2217 18.5 21.8334 15.8883 21.8334 12.6667C21.8334 9.44501 19.2217 6.83334 16.0001 6.83334C12.7784 6.83334 10.1667 9.44501 10.1667 12.6667C10.1667 15.8883 12.7784 18.5 16.0001 18.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12.8416 17.575L11.8333 25.1667L15.9999 22.6667L20.1666 25.1667L19.1583 17.5667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <h2>Sopir Profesional</h2>
                                            <p>Sopir yang dijamin profesional, berpengalaman, jujur, ramah dan tepat waktu</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='mini3' id="testimonials">
                    <Row>
                        <h2>Testimonial</h2>
                        <p>Berbagi review positif dari para pelanggan kami</p>
                    </Row>
                </div>
                <div className='carouselReview'>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={2}
                        navigation
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={swiper => console.log(swiper)}
                    >
                        <div className='swiperBungkus'>
                            <SwiperSlide className="container">
                                <div className='row p-3'>
                                    <div className='col d-flex flex-column justify-cposition-relative rightCol'>
                                        <div className='testimonials image'>
                                            <img className="" src={require("../media/fotoreview1.png")}></img>
                                        </div>
                                        <div className='col justify-content-center'>
                                            <svg width="80" height="16" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#F9CC00" />
                                                <path d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z" fill="#F9CC00" />
                                                <path d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z" fill="#F9CC00" />
                                                <path d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z" fill="#F9CC00" />
                                                <path d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z" fill="#F9CC00" />
                                            </svg>
                                            <h5>“Lorem ipsum dolor sit amet, consectetur”</h5>
                                            <h5>John Dee 32, Bromo</h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                        <div className='swiperBungkus'>
                            <SwiperSlide className="container">
                                <div className='row p-3'>
                                    <div className='col d-flex flex-column justify-cposition-relative rightCol'>
                                        <div className='testimonials image'>
                                            <img className="" src={require("../media/fotoreview1.png")}></img>
                                        </div>
                                        <div className='col justify-content-center'>
                                            <svg width="80" height="16" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#F9CC00" />
                                                <path d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z" fill="#F9CC00" />
                                                <path d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z" fill="#F9CC00" />
                                                <path d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z" fill="#F9CC00" />
                                                <path d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z" fill="#F9CC00" />
                                            </svg>
                                            <h5>“Lorem ipsum dolor sit amet, consectetur”</h5>
                                            <h5>John Dee 32, Bromo</h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                        <div className='swiperBungkus'>
                            <SwiperSlide className="container">
                                <div className='row p-3'>
                                    <div className='col d-flex flex-column justify-cposition-relative rightCol'>
                                        <div className='testimonials image'>
                                            <img className="" src={require("../media/fotoreview1.png")}></img>
                                        </div>
                                        <div className='col justify-content-center'>
                                            <svg width="80" height="16" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#F9CC00" />
                                                <path d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z" fill="#F9CC00" />
                                                <path d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z" fill="#F9CC00" />
                                                <path d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z" fill="#F9CC00" />
                                                <path d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z" fill="#F9CC00" />
                                            </svg>
                                            <h5>“Lorem ipsum dolor sit amet, consectetur”</h5>
                                            <h5>John Dee 32, Bromo</h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>

                    </Swiper>
                </div>
            </Container >
            <Container>
                <div className='mini4'>
                    <div className='paragraf'>
                        <h1>Sewa Mobil di Tangerang Sekarang</h1>
                        <br></br>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, excepturi!.</h5>
                        <br></br>
                        <Link to={"/SewaMobil"}>
                            <Button className="btn-success">Mulai Sewa Mobil</Button>
                        </Link>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='faq-content' id='faq'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h1>Frequently Asked Question</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint atque saepe modi voluptatibus! Reiciendis, odio!</p>
                        </div>
                        <div className='col-lg-6'>
                            <div className='row- mx-1'>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header><h5>Apa saja syarat yang dibutuhkan?</h5></Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ipsa.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <br></br>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header><h5>Berapa hari minimal sewa mobil lepas kunci?</h5></Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, eos!
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <br></br>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header><h5>Berapa hari sebelumnya sabaiknya booking sewa mobil?</h5></Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, eos!
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <br></br>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header><h5>Apakah Ada Biaya antar-jemput ?</h5></Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, eos!
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <br></br>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header><h5>Berapa hari minimal sewa mobil lepas kunci?</h5></Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, eos!
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
        </div >
    )
}

export default Content;