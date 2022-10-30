import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FcOk } from "react-icons/fc";
import { BiArrowToBottom } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import { getOrder } from "../features/rental/rentalSlice";
import { AiOutlineArrowLeft, AiOutlineLine } from "react-icons/ai";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Viewer } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
import { setMessage } from "../features/auth/message-slice";
import PropagateLoader from "react-spinners/PropagateLoader";
import Footer from "./Footer";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '../styling/Tiket.css'


const Tiket = () => {
    const orderId = JSON.parse(localStorage.getItem("idOrder"))
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [sidebar, setSidebar] = useState('collapse')
    window.addEventListener('scroll', () => {
        setSidebar('collapse');
    })

    React.useEffect(() => {
        if (!isLoggedIn) {
            alert("Silakan login untuk melanjutkan pemesanan");
            navigate('/login');
        }
    }, [!isLoggedIn])

    useEffect(() => {
        if (!detail || detail.status !== true) {
            const interval = setInterval(async () => {
                setLoading(true);
                try {
                    await dispatch(getOrder({ id: orderId }))
                        .unwrap()
                        .then((data) => {
                            setDetail(data);
                        })
                }
                catch {
                    dispatch(setMessage("error"))
                }
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [detail]);

    return (
        <>
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
                                        <a className="nav-link" href="/#ourServices">Our Services</a>
                                    </li>
                                    <li className="nav-item mr-3 fw-bold">
                                        <a className="nav-link" href="/#whyUs">Why Us</a>
                                    </li>
                                    <li className="nav-item mr-3 fw-bold">
                                        <a className="nav-link" href="/#testimonial">Testimonial</a>
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
                    <div className="headerMetode" style={{ margin: "20px 80px 0px 80px", paddingBottom: "10px" }}>
                        <div className="headerMetode4">
                            <p onClick={() => navigate(-1)} style={{ marginBottom: "0px" }}>
                                <AiOutlineArrowLeft />
                                <span style={{ fontWeight: "bold" }}> Tiket </span>
                            </p>
                            <p style={{ marginLeft: "20px", fontSize: "14px" }}> Order ID: {orderId} </p>
                        </div>
                        <div className="headerMetode1">
                            <p>
                                <span style={{ border: "1px solid #0D28A6", padding: "0px 3px", borderRadius: "50%", color: "white", backgroundColor: "#0D28A6" }}><AiOutlineCheck color="white" size="15px" /></span>
                                <span className="headerMetode2"> Pilih Metode </span>
                                <span> <AiOutlineLine size="25px" color="#0D28A6" /> </span>
                                <span style={{ border: "1px solid #0D28A6", padding: "0px 3px", borderRadius: "50%", color: "white", backgroundColor: "#0D28A6" }}><AiOutlineCheck color="white" size="15px" /></span>
                                <span className="headerMetode2"> Bayar </span>
                                <span> <AiOutlineLine size="25px" color="#0D28A6" /> </span>
                                <span style={{ border: "1px solid #0D28A6", padding: "0px 6px", borderRadius: "50%", color: "white", backgroundColor: "#0D28A6" }}>3</span>
                                <span className="headerMetode2"> Tiket </span>
                            </p>

                        </div>
                    </div>
                </Container >
            </div>

            {detail?.status ? (
                <div className="container">
                    <div class="text-center" style={{ marginTop: "20px" }}>
                        <FcOk size="50px" />
                        <p style={{ fontWeight: "bold", fontSize: "18px", marginTop: "10px" }}> Pembayaran Berhasil! </p>
                        <p style={{ color: "grey" }}> Tunjukkan invoice ini ke petugas BCR di titik temu. </p>
                    </div>

                    <div>
                        <div class="container" id="idTiket" >
                            <div class="row justify-content-md-center" id="idTiket2">
                                <div id="idTiket3" style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", padding: "20px", borderRadius: "5px" }}>
                                    <div class="row">
                                        <div class="col-6">
                                            <p style={{ fontWeight: "bold" }}> Invoice </p>
                                        </div>
                                        <div class="col-6">
                                            <a href="platinum.pdf" style={{ color: "#0D28A6" }} download>
                                                <p class="text-end" >
                                                    <span style={{ border: "2px solid #0D28A6", padding: "5px", borderRadius: "2px" }}> <BiArrowToBottom size="23px" /> Unduh </span>
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
                                            <Viewer fileUrl="/platinum.pdf"
                                            />
                                        </Worker>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <h4 class="text-center" style={{ marginTop: "40px" }}> Menunggu Konfirmasi Pembayaran </h4>
                    <p style={{ textAlign: "center", marginTop: "50px", marginBottom: "250px" }}>
                        <PropagateLoader
                            size={20}
                            color="#5CB85F"
                            speedMultiplier={1} />
                    </p>
                </>
            )}
            <Footer />
        </>
    )
}

export default Tiket;