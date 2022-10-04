import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Konfirmasi = () => {

    return (
        <>
            <Header />
            <div class="container" style={{ marginTop: "30px" }}>
                <div class="row justify-content-md-center" style={{ gap: "20px" }}>
                    <div class="col-6">
                        <div style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", borderRadius: "10px", marginBottom: "20px", padding: "20px" }}>
                            <div class="row">
                                <div class="col">
                                    <p style={{ fontWeight: "bold" }}> Selesaikan Pembayaran Sebelum </p>
                                    <p> {moment(endTime).format('LLL')} WIB </p>
                                    {/* <p> {expirationDate.toString()} </p> */}
                                </div>
                                <div class="col" style={{ marginBottom: "10px" }}>
                                    <p class="text-end"> 23 : 59 : 59 </p>
                                </div>
                            </div>
                        </div>

                        <div style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", borderRadius: "10px", marginBottom: "20px", padding: "20px" }}>
                            <p style={{ fontWeight: "bold" }}> Lakukan Transfer Ke </p>
                            <div class="row">
                                <div class="col-2">
                                    <p class="text-center" style={{ width: "80px", border: "2px solid lightgrey", padding: "5px", borderRadius: "5px" }}> BCA </p>
                                </div>
                                <div class="col">
                                    <p> BCA Transfer </p>
                                    <p> a.n Binar Car Rental </p>
                                </div>
                            </div>
                            <p style={{ color: "#3C3C3C" }}> Nomor Rekening </p>
                            <p style={{ border: "1px solid black", padding: "5px", borderRadius: "2px" }}> 54104257877 </p>
                            <p style={{ color: "#3C3C3C" }}> Total Bayar </p>
                            <p style={{ border: "1px solid black", padding: "5px", borderRadius: "2px" }}> Rp 3.500.000 </p>
                        </div>

                        <div style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", borderRadius: "10px", marginBottom: "20px", padding: "20px" }}>
                            <p style={{ fontWeight: "bold" }}> Intruksi Pembayaran </p>
                            <div class="row">
                                <div class="col">
                                    <p> ATM BCA </p>
                                </div>
                                <div class="col">
                                    <div className={activeMenu==='m-bca' ? 'active' : 'inactive'}
                                        onClick={()=>setActiveMenu('m-bca')}> M-BCA 
                                    </div>
                                    {activeMenu==='m-bca' && (
                                        <p style={{borderBottom: "2px solid #5CB85F"}}> </p>
                                    )}
                                </div>
                                <div class="col">
                                    <div className={activeMenu==='klik' ? 'active' : 'inactive'}
                                        onClick={()=>setActiveMenu('klik')}> BCA Klik 
                                    </div>
                                    {activeMenu==='klik' && (
                                        <p style={{borderBottom: "2px solid #5CB85F"}}> </p>
                                    )}
                                </div>
                                <div class="col">
                                    <div className={activeMenu==='banking' ? 'active' : 'inactive'}
                                        onClick={()=>setActiveMenu('banking')}> Internet Banking 
                                    </div>
                                    {activeMenu==='banking' && (
                                        <p style={{borderBottom: "2px solid #5CB85F"}}> </p>
                                    )}
                                </div>
                            </div>
                            <hr style={{ margin: "0px" }}></hr>
                            <div style={{ padding: "20px", color: "grey" }}>
                                <li> Masukkan kartu ATM, lalu PIN </li>
                                <li> Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account” </li>
                                <li> Masukkan nomor BCA Virtual Account: 70020+Order ID </li>
                                <p> Contoh: </p>
                                <p> No. Peserta: 12345678, maka ditulis 7002012345678 </p>
                                <li> Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi </li>
                                <li> Ambil dan simpanlah bukti transaksi tersebut </li>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-4" style={{ padding: "20px", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", borderRadius: "10px", height: "100%" }}>
                        <div class="row">
                            <div class="col">
                                <p style={{ fontWeight: "bold" }}> Konfirmasi Pembayaran </p>
                            </div>
                            <div class="col">
                                <p class="text-end"> 09 : 55 </p>
                            </div>
                        </div>
                        <p> Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi. </p>
                        <br />
                        <p> Upload Bukti Pembayaran </p>
                        <p> Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu </p>
                        <p class="text-center" style={{ border: "1px dashed black", backgroundColor: "lightgrey", height: "200px", lineHeight: "200px" }}> img </p>
                        <a href="/sewamobil/tiket">
                            <button style={{ backgroundColor: "#5CB85F", width: "100%", height: "40px", marginBottom: "10px" }}>
                                <p style={{ color: "white", padding: "5px", fontWeight: "bold" }}> Upload </p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Konfirmasi;