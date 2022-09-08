import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Tiket = () => {

    return(
        <>
        <Header/>
        <div class="text-center" style={{marginTop: "20px"}}>
            <p style={{textAlign:"center"}}> &#10004; </p>
            <p style={{fontWeight: "bold"}}> Pembayaran Berhasil! </p>
            <p style={{color: "grey"}}> Tunjukkan invoice ini ke petugas BCR di titik temu. </p>
        </div>
        
        <div>
            <div class="container" >
                <div class="row justify-content-md-center">
                    <div class="col-5" style={{boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", padding: "20px", borderRadius: "5px"}}>
                        <div class="row">
                            <div class="col-6">
                                <p> invoice </p>
                                <p> *no invoice </p>
                            </div>
                            <div class="col-6">
                                <a href="">
                                    <p class="text-end"> Unduh </p>
                                </a> 
                            </div>
                        </div>
                        <div style={{border: "1px dashed black", borderRadius: "5px", backgroundColor: "lightgrey", height:"100px"}}>
                            <p class="text-center" style={{lineHeight: "100px"}}> PDF Viewer </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Tiket;