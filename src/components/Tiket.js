import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { FcOk } from "react-icons/fc";
import { BiArrowToBottom } from "react-icons/bi";
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack5';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/5.7.2/pdf.worker.js`;

const Tiket = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    return (
        <>
            <Header />
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
                                    <p> invoice </p>
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