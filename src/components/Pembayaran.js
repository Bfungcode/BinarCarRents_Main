import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Pembayaran = () => {
    const halaman = 1;

    return (
        <>
            <Header />
            <div class="container" style={{ width: "78%" }}>
                <div class="row justify-content-md-center" style={{ borderRadius: "10px", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", padding: "8px" }}>
                    <p style={{ fontWeight: "bold", paddingLeft: "12px", fontSize: "18px" }}> Detail Pesananmu </p>
                    <div class="col-12">
                        <div class="row">
                            <div class="col">
                                <p> Nama/Tipe Mobil </p>
                                <p style={{ color: "gray" }}> Innova </p>
                            </div>
                            <div class="col">
                                <p> Kategori </p>
                                <p style={{ color: "gray" }}> 6 - 8 orang </p>
                            </div>
                            <div class="col">
                                <p> Tanggal Mulai Sewa </p>
                                <p style={{ color: "gray" }}> 9 September 2022 </p>
                            </div>
                            <div class="col">
                                <p> Tanggal Akhir Sewa </p>
                                <p style={{ color: "gray" }}> 16 September 2022 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container" style={{ marginTop: "20px" }}>
                <div class="row justify-content-md-center" style={{ gap: "20px" }}>
                    <div class="col-6" style={{ padding: "20px", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", borderRadius: "10px", height: "100%" }}>
                        <div className="pembayaran-box">
                            <p style={{ fontWeight: "bold", fontSize: "18px" }}> Pilih Bank Transfer </p>
                            <p> Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking </p>
                            <div class="row" style={{ paddingTop: "25px" }}>
                                <div style={{ marginBottom: "30px" }}>
                                    <p style={{ display: "inline", color: "black", border: "2px solid lightgrey", padding: "5px", borderRadius: "5px", marginRight: "15px" }}> BCA </p>
                                    <p style={{ display: "inline", color: "black" }}> BCA Transfer </p>
                                    <hr style={{ margin: "35px 0px 0px 0px", color: "black" }}></hr>
                                </div>
                                <div style={{ marginBottom: "30px" }}>
                                    <p style={{ display: "inline", color: "black", border: "2px solid lightgrey", padding: "5px", borderRadius: "5px", marginRight: "15px" }}> BNI </p>
                                    <p style={{ display: "inline", color: "black" }}> BNI Transfer </p>
                                    <hr style={{ margin: "35px 0px 0px 0px", color: "black" }}></hr>
                                </div>
                                <div>
                                    <p style={{ display: "inline", color: "black", border: "2px solid lightgrey", padding: "5px", borderRadius: "5px", marginRight: "15px" }}> Mandiri </p>
                                    <p style={{ display: "inline", color: "black" }}> Mandiri Transfer </p>
                                    <hr style={{ margin: "35px 0px 0px 0px", color: "black" }}></hr>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-4" style={{ padding: "20px", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", borderRadius: "10px" }}>
                        <div className="pembayaran-box">
                            <div style={{ marginBottom: "30px" }}>
                                <p style={{ fontWeight: "bold", lineHeight: "0px" }}> Innova </p>
                                <i style={{ display: "inline" }}> <Icon.People /> </i>
                                <p style={{ display: "inline", color: "gray" }}> 6-8 orang </p>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <p> Total </p>
                                </div>
                                <div class="col">
                                    <p class="text-end" style={{ fontWeight: "bold" }}> Rp 3.500.000 </p>
                                </div>
                            </div>
                            <div>
                                <p style={{ fontWeight: "bold" }}> Harga </p>
                                <div class="row">
                                    <div class="col-8">
                                        <p> Sewa Mobil Rp 500.000 x 7 hari </p>
                                    </div>
                                    <div class="col">
                                        <p class="text-end"> Rp 3.500.000 </p>
                                    </div>
                                </div>
                                <p style={{ fontWeight: "bold" }}> Biaya Lainnya </p>
                                <div class="row">
                                    <div class="col">
                                        <li style={{ marginLeft: "25px" }}> Pajak </li>
                                        <li style={{ marginLeft: "25px" }}> Biaya Makan Sopir </li>
                                    </div>
                                    <div class="col" style={{ textAlign: "right" }}>
                                        <p style={{ display: "inline", color: "#5CB85F" }}> Termasuk </p>
                                        <p style={{ color: "#5CB85F" }}> Termasuk </p>
                                    </div>
                                </div>
                                <br />
                                <p style={{ fontWeight: "bold" }}> Belum Termasuk </p>
                                <li style={{ marginLeft: "25px" }}> Bensin </li>
                                <li style={{ marginLeft: "25px" }}> Tol dan parkir </li>
                                <hr />
                                <div class="row">
                                    <div class="col">
                                        <p style={{ fontWeight: "bold" }}> Total </p>
                                    </div>
                                    <div class="col">
                                        <p class="text-end" style={{ fontWeight: "bold" }}> Rp 3.500.000 </p>
                                    </div>
                                </div>
                                <Link to={"/Tiket"}>
                                    <button style={{ backgroundColor: "#DEF1DF", width: "100%", height: "40px", marginBottom: "10px" }}>
                                        <p style={{ color: "white", padding: "5px", fontWeight: "bold" }}> Bayar </p>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Pembayaran;