import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { FcOk } from "react-icons/fc";
import { BiArrowToBottom } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineArrowLeft, AiOutlineLine } from "react-icons/ai";
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack5';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/5.7.2/pdf.worker.js`;

const Tiket = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    return (
        <>
            {/* HEADER */}
            <div className='Header-sty'>
            <Container>
                <div className='navbar1'>
                    <Navbar>
                        <Container>
                            <Navbar.Brand href="/">
                                <h3>Binar Cartal</h3>
                            </Navbar.Brand>
                            <Nav>
                                <Nav.Link href="#ourservices"><strong>Our Services</strong></Nav.Link>
                                <Nav.Link href="#whyus"><strong>Why Us</strong></Nav.Link>
                                <Nav.Link href="#testimonials"><strong>Testimonials</strong></Nav.Link>
                                <Nav.Link href="#faq"><strong>FAQ</strong></Nav.Link>
                                <Button style={{backgroundColor: "#5CB85F", fontWeight: "bold", padding:"7px"}}> Register </Button>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
                <div class="row" style={{margin: "20px 80px 0px 80px", paddingBottom: "10px"}}>
                    <div class="col">
                        <p style={{marginBottom: "0px"}}>
                            <AiOutlineArrowLeft/>
                            <span style={{fontWeight: "bold"}}> Tiket </span>
                        </p>
                        <p style={{marginLeft: "20px", fontSize: "14px"}}> Order ID: 86754231 </p>
                    
                    </div>
                    <div class="col" style={{textAlign: "right"}}>
                        <p>
                            <span style={{border: "1px solid #0D28A6", padding:"0px 3px", borderRadius: "50%", color: "white", backgroundColor: "#0D28A6"}}><AiOutlineCheck color= "white" size= "15px"/></span>
                            <span> Pilih Metode </span>
                            <span> <AiOutlineLine size= "25px" color= "#0D28A6"/> </span>
                            <span style={{border: "1px solid #0D28A6", padding:"0px 3px", borderRadius: "50%", color: "white", backgroundColor: "#0D28A6"}}><AiOutlineCheck color= "white" size= "15px"/></span>
                            <span> Bayar </span>
                            <span> <AiOutlineLine size= "25px" color= "#0D28A6"/> </span>
                            <span style={{border: "1px solid #0D28A6", padding:"0px 6px", borderRadius: "50%", color: "white", backgroundColor: "#0D28A6"}}>3</span>
                            <span> Tiket </span>
                        </p>
                    
                    </div>
                </div>
            </Container >
        </div>

            <div class="text-center" style={{ marginTop: "20px" }}>
                <FcOk size = "40px"/>
                <p style={{ fontWeight: "bold" }}> Pembayaran Berhasil! </p>
                <p style={{ color: "grey" }}> Tunjukkan invoice ini ke petugas BCR di titik temu. </p>
            </div>

            <div>
                <div class="container" >
                    <div class="row justify-content-md-center">
                        <div class="col-5" style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", padding: "20px", borderRadius: "5px" }}>
                            <div class="row">
                                <div class="col-6">
                                    <p style={{fontWeight: "bold"}}> Invoice </p>
                                    <p> *no invoice </p>
                                </div>
                                <div class="col-6">
                                    <a href="" style={{color: "#0D28A6"}}>
                                        <p class="text-end" >
                                            <span style={{border: "2px solid #0D28A6", padding: "5px", borderRadius: "2px"}}> <BiArrowToBottom size="23px"/> Unduh </span>
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <Document file="/PDF.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                                    <Page pageNumber={pageNumber} />
                                </Document>
                                <p>
                                    Page {pageNumber} of {numPages}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Tiket;