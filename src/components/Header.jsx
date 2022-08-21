import { Navbar, Container, Nav, NavbarBrand, Button, Row, Col } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import '../App'


const Header = () => {
    const styles = {
        Container: {
            width: "50%"
        }
    }

    return (
        <div className='Header-sty'>
            <Container expand="sm">
                <Navbar>
                    <Container>
                        <Navbar.Brand>
                            <h4>Binar Cartal</h4>
                        </Navbar.Brand>
                        <Nav>
                            <Nav.Link><a href='#'>Our Services</a></Nav.Link>
                            <Nav.Link><a href='#'>Why Us</a></Nav.Link>
                            <Nav.Link><a href='#'>Testimonials</a></Nav.Link>
                            <Nav.Link><a href='#'>FAQ</a></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Container fluid="sm" className="Header2">
                    <Row>
                        <Col>
                            <div className="intro">
                                <h1>Sewa & Rental Mobil Terbaik di kawasan Tangerang</h1>
                                <h4>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</h4>
                                <Link to={"/SewaMobil"}>
                                    <Button className="btn-success">"Mulai Sewa Mobil"</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col>                           <div className="gambarMobil1">
                            <img src={require("../media/img_car.png")}></img>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div >
    )
}



export default Header