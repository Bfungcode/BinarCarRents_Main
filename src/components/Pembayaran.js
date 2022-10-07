import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
import { FiImage, FiCopy } from "react-icons/fi";
import moment from 'moment';
import 'moment/locale/id';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Countdown from './Countdown';

const Pembayaran = () => {
    
    const [menu, setMenu] = useState(true);
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(false);
    const [bankMenu, setBankMenu] = useState('start');
    const [activeMenu, setActiveMenu] = useState('atm');
    const [uploadMenu, setUploadMenu] = useState('konfirmasi');
    const { id } = useParams();
    const controller = new AbortController();

    const endTime = new Date().getTime() + 3600000 * 24;
    const createdDate = moment(new Date()).utc().format();
    const expirationDate = moment(createdDate).add(1, 'd').format('LLL');
    moment.locale("id");
    // console.log(endTime);
    // console.log(createdDate);
    console.log(expirationDate);

    const [timeLeft, setEndTime] = Countdown(endTime);

    const hours = Math.floor(timeLeft / 3600000) % 60;
    const minutes = Math.floor(timeLeft / 60000) % 60;
    const seconds = Math.floor(timeLeft / 1000) % 60;
  
    const minutes2 = Math.floor(timeLeft / 60000) % 10;
    const seconds2 = Math.floor(timeLeft / 1000) % 60;
    
    const loadDetail = async () => {
        setLoading(true);
        try {
            const url = "https://bootcamp-rent-car.herokuapp.com/admin/car/" + id;
            const { data } = await axios.get(url, {
                signal: controller.signal,
            });
            setDetail(data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    const biayaHarian = detail?.price / 5;
    console.log(biayaHarian);

    useEffect(() => {
        loadDetail();
    }, []);

    return (
        <>
        <Header />
        { menu? (
        <>
            <div class="container" style={{ width: "78%" }}>
                <div class="row justify-content-md-center" style={{ borderRadius: "10px", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", padding: "8px" }}>
                    <p style={{ fontWeight: "bold", paddingLeft: "12px", fontSize: "18px" }}> Detail Pesananmu </p>
                    <div class="col-12">
                        <div class="row">
                            <div class="col">
                                <p> Nama/Tipe Mobil </p>
                                <p style={{ color: "gray" }}> {detail?.name} </p>
                            </div>
                            <div class="col">
                                <p> Kategori </p>
                                <p style={{ color: "gray" }}> {detail?.category} </p>
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
                        <div>
                            <p style={{ fontWeight: "bold", fontSize: "18px" }}> Pilih Bank Transfer </p>
                            <p> Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking </p>
                            <div class="row" style={{ paddingTop: "25px" }}>
                                <div style={{ marginBottom: "30px"}} className={bankMenu==='BCA' ? 'active' : 'inactive'}
                                    onClick={()=>setBankMenu('BCA')}>
                                    <div class="row">
                                        <div class="col">
                                            <p>
                                                <span style={{ color: "black", border: "2px solid lightgrey", padding: "5px", borderRadius: "5px", marginRight: "15px" }}> BCA </span>
                                                <span style={{ color: "black" }}> BCA Transfer </span>
                                            </p>
                                        </div>
                                        <div class="col">
                                            {bankMenu==='BCA' && (
                                                <h5 style={{textAlign: "right", marginRight: "30px"}}><FcCheckmark size= "25px" /></h5> 
                                            )}
                                        </div>
                                    </div>
                                    <hr style={{ margin: "10px 0px 0px 0px", color: "black" }}></hr>
                                </div>
                                <div style={{ marginBottom: "30px" }} className={bankMenu==='BNI' ? 'active' : 'inactive'}
                                    onClick={()=>setBankMenu('BNI')}>
                                    <div class="row">
                                        <div class="col">
                                            <p>
                                                <span style={{ color: "black", border: "2px solid lightgrey", padding: "5px", borderRadius: "5px", marginRight: "15px" }}> BNI </span>
                                                <span style={{ color: "black" }}> BNI Transfer </span>
                                            </p>
                                        </div>
                                        <div class="col">
                                            {bankMenu==='BNI' && (
                                                <h5 style={{textAlign: "right", marginRight: "30px"}}> <FcCheckmark size= "25px" /> </h5>
                                            )}
                                        </div>
                                    </div>
                                    <hr style={{ margin: "10px 0px 0px 0px", color: "black" }}></hr>
                                </div>
                                <div className={bankMenu==='Mandiri' ? 'active' : 'inactive'}
                                    onClick={()=>setBankMenu('Mandiri')}>
                                    <div class="row">
                                        <div class="col">
                                            <p>
                                                <span style={{ color: "black", border: "2px solid lightgrey", padding: "5px", borderRadius: "5px", marginRight: "15px" }}> Mandiri </span>
                                                <span style={{ color: "black" }}> Mandiri Transfer </span>
                                            </p>
                                        </div>
                                        <div class="col">
                                            {bankMenu==='Mandiri' && (
                                                <h5 style={{textAlign: "right", marginRight: "30px"}}><FcCheckmark size= "25px" /></h5>
                                            )}
                                        </div>
                                    </div>
                                    <hr style={{ margin: "10px 0px 0px 0px", color: "black" }}></hr>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-4" style={{ padding: "20px", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", borderRadius: "10px" }}>
                        <div>
                            <div style={{ marginBottom: "30px" }}>
                                <p style={{ fontWeight: "bold", lineHeight: "0px" }}> {detail?.name} </p>
                                <i style={{ display: "inline" }}> <Icon.People /> </i>
                                <p style={{ display: "inline", color: "gray" }}> {detail?.category} </p>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <p> Total </p>
                                </div>
                                <div class="col">
                                    <p class="text-end" style={{ fontWeight: "bold" }}> Rp {detail?.price.toLocaleString('en-US')} </p>
                                </div>
                            </div>
                            <div>
                                <p style={{ fontWeight: "bold" }}> Harga </p>
                                <div class="row">
                                    <div class="col-8">
                                        <p> Sewa Mobil Rp {biayaHarian.toLocaleString('en-US')} x 5 hari </p>
                                    </div>
                                    <div class="col">
                                        <p class="text-end"> Rp {detail?.price.toLocaleString('en-US')} </p>
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
                                        <p class="text-end" style={{ fontWeight: "bold" }}> Rp {detail?.price.toLocaleString('en-US')} </p>
                                    </div>
                                </div>
                                {bankMenu==='start' && (
                                        <button style={{ backgroundColor: "#DEF1DF", width: "100%", height: "40px", marginBottom: "10px" }}>
                                            <p style={{ color: "white", padding: "5px", fontWeight: "bold" }}> Bayar </p>
                                        </button>
                                )}
                                {bankMenu==='BCA' && (
                                    <button style={{ backgroundColor: "#5CB85F", width: "100%", height: "40px", marginBottom: "10px" }}
                                        onClick={()=>setMenu(!menu)}>
                                        <p style={{ color: "white", padding: "5px", fontWeight: "bold" }}> Bayar </p>
                                    </button>
                                )}
                                {bankMenu==='BNI' && (
                                    <button style={{ backgroundColor: "#5CB85F", width: "100%", height: "40px", marginBottom: "10px" }}
                                        onClick={()=>setMenu(!menu)}>
                                        <p style={{ color: "white", padding: "5px", fontWeight: "bold" }}> Bayar </p>
                                    </button>
                                )}
                                {bankMenu==='Mandiri' && (
                                    <button style={{ backgroundColor: "#5CB85F", width: "100%", height: "40px", marginBottom: "10px" }}
                                        onClick={()=>setMenu(!menu)}>
                                        <p style={{ color: "white", padding: "5px", fontWeight: "bold" }}> Bayar </p>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>

            ) : (

                <>
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
                                        <p style={{textAlign : "right"}}>
                                            <span style={{backgroundColor: "#FA2C5A", padding: "0px 2px", color: "white"}}>{hours.toString().length === 1 ? "0" : null}{hours}</span>
                                            <span> : </span>
                                            <span style={{backgroundColor: "#FA2C5A", padding: "0px 2px", color: "white"}}>{minutes.toString().length === 1 ? "0" : null}{minutes}</span>
                                            <span> : </span>
                                            <span style={{backgroundColor: "#FA2C5A", padding: "0px 2px", color: "white"}}>{seconds.toString().length === 1 ? "0" : null}{seconds}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                
                            <div style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", borderRadius: "10px", marginBottom: "20px", padding: "20px" }}>
                                <p style={{ fontWeight: "bold" }}> Lakukan Transfer Ke </p>
                                <div class="row">
                                    <div class="col-2">
                                        <p class="text-center" style={{ width: "80px", border: "2px solid lightgrey", padding: "5px", borderRadius: "5px" }}> {bankMenu} </p>
                                    </div>
                                    <div class="col">
                                        <p> {bankMenu} Transfer </p>
                                        <p> a.n Binar Car Rental </p>
                                    </div>
                                </div>
                                <p style={{ color: "#3C3C3C" }}> Nomor Rekening </p>
                                <p style={{ border: "1px solid black", padding: "5px", borderRadius: "2px" }}>
                                    <span> 54104257877 </span>
                                    <span>
                                        <CopyToClipboard text="54104257877">
                                            <FiCopy size="18px" />
                                        </CopyToClipboard>
                                    </span>
                                </p>
                                <p style={{ color: "#3C3C3C" }}> Total Bayar </p>
                                <div>
                                    <p style={{ border: "1px solid black", padding: "5px", borderRadius: "2px" }}>
                                        <span> Rp {detail?.price.toLocaleString('en-US')} </span>
                                        <span>
                                            <CopyToClipboard text={detail?.price.toLocaleString('en-US')}>
                                                <FiCopy size="18px" />
                                            </CopyToClipboard>
                                        </span>
                                    </p>
                                </div>
                            </div>
                
                            <div style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", borderRadius: "10px", marginBottom: "20px", padding: "20px" }}>
                                <p style={{ fontWeight: "bold" }}> Intruksi Pembayaran </p>
                                <div class='row'>
                                    <div class="col">
                                        <div className={activeMenu==='atm' ? 'active' : 'inactive'}
                                            onClick={()=>setActiveMenu('atm')}> Atm {bankMenu} 
                                        </div>
                                        {activeMenu==='atm' && (
                                            <p style={{borderBottom: "2px solid #5CB85F"}}> </p>
                                        )}
                                    </div>
                                    <div class="col">
                                        <div className={activeMenu==='m-bca' ? 'active' : 'inactive'}
                                            onClick={()=>setActiveMenu('m-bca')}> M-{bankMenu} 
                                        </div>
                                        {activeMenu==='m-bca' && (
                                            <p style={{borderBottom: "2px solid #5CB85F"}}> </p>
                                        )}
                                    </div>
                                    <div class="col">
                                        <div className={activeMenu==='klik' ? 'active' : 'inactive'}
                                            onClick={()=>setActiveMenu('klik')}> {bankMenu} Klik 
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
                                <div>
                                    {activeMenu==='atm' && (
                                        <div style={{ padding: "20px", color: "grey" }}>
                                            <li> Masukkan kartu ATM, lalu PIN </li>
                                            <li> Pilih menu “Transaksi Lainnya” – “Transfer” – “Ke Rek {bankMenu} Virtual Account” </li>
                                            <li> Masukkan nomor {bankMenu} Virtual Account: 70020+Order ID </li>
                                            <p> Contoh: </p>
                                            <p> No. Peserta: 12345678, maka ditulis 7002012345678 </p>
                                            <li> Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi </li>
                                            <li> Ambil dan simpanlah bukti transaksi tersebut </li>
                                        </div>
                                    )}
                                    {activeMenu==='m-bca' && (
                                        <div style={{ padding: "20px", color: "grey" }}>
                                            <li> Masuk ke menu M-{bankMenu} </li>
                                            <li> Klik menu “M-Transfer” kemudian tekan YES/OK </li>
                                            <li> Pilih “antar rekening”, lalu pilih mata uang dan jumlah uang yang akan di transfer </li>
                                            <li> Ketikkan nomor rekening 54104257877 </li>
                                            <li> Ketik PIN akun {bankMenu}mu, akan muncul keterangan berita yang dapat kamu kosongkan saja </li>
                                            <li> Lalu tekan OK </li>
                                        </div>
                                    )}
                                    {activeMenu==='klik' && (
                                        <div style={{ padding: "20px", color: "grey" }}>
                                            <li> Buka https://ibank.klik{bankMenu}.com </li>
                                            <li> Masukkan user ID dan PIN klik {bankMenu} </li>
                                            <li> Daftar dan masukkan nomer rekening tujuan di klik {bankMenu} individual </li>
                                            <li> Masuk ke “Trasfer dana “, klik “Rekening {bankMenu}” </li>
                                            <li> Klik nomer rekening yang telah didaftarkan dan masukkan jumlah nominasi uang yang akan ditransfer </li>
                                            <li> Tunggu 8 digit angka untuk memasukkan ke Key{bankMenu} </li>
                                            <li> Setelah angka 8 digit masuk di respon key{bankMenu} APLLI 2, kemudian pencet “selanjutnya” </li>
                                            <li> Tunggu nomer rekening tujuan, lalu nyalakan ulang key {bankMenu} dan tekan 1 </li>
                                            <li> Tunggu respon KEY{bankMenu} APLLI 1, kirim dan tunggu bukti transfer uang muncul </li>
                                        </div>
                                    )}
                                    {activeMenu==='banking' && (
                                        <div style={{ padding: "20px", color: "grey" }}>
                                            <li> Login dengan user ID dan password pada Internet Banking anda </li>
                                            <li> Pilih menu "Transfer". Pilih pilihan "Transfer Antar Bank" </li>
                                            <li> Isi nomor rekening tujuan, bank tujuan, nominal transfer dan tekan tombol "Kirim" </li>
                                            <li> Masukan password dan klik "Permintaan M-Token", lalu klik tombol "Kirim" </li>
                                            <li> Ambil dan simpanlah bukti transfer </li>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        
                        
                        <div class="col-4" style={{ padding: "20px", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", borderRadius: "10px", height: "100%" }}>
                            {uploadMenu==='konfirmasi' && (
                                <>
                                <p> Klik konfirmasi pembayaran untuk mempercepat proses pengecekan </p>
                                <div className={uploadMenu==='konfirmasi' ? 'active' : 'inactive'}
                                    onClick={()=>setUploadMenu('upload')}>
                                        <button style={{ backgroundColor: "#5CB85F", width: "100%", height: "40px", marginBottom: "10px" }}>
                                            <p style={{ color: "white", padding: "5px", fontWeight: "bold" }}> Konfirmasi </p>
                                        </button>     
                                </div>
                                </>
                            )}
                            {uploadMenu==='upload' && (
                                <>
                                <div class="row">
                                    <div class="col">
                                        <p style={{ fontWeight: "bold" }}> Konfirmasi Pembayaran </p>
                                    </div>
                                <div class="col">
                                    <p style={{textAlign : "right"}}>
                                        <span style={{backgroundColor: "#FA2C5A", padding: "0px 2px", color: "white"}}>{minutes2.toString().length === 1 ? "0" : null}{minutes2}</span>
                                        <span> : </span>
                                        <span style={{backgroundColor: "#FA2C5A", padding: "0px 2px", color: "white"}}>{seconds2.toString().length === 1 ? "0" : null}{seconds2}</span>
                                    </p>
                                </div>
                                </div>
                                    <p> Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi. </p>
                                    <br />
                                    <p> Upload Bukti Pembayaran </p>
                                    <p> Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu </p>
                                    <p class="text-center" style={{ border: "1px dashed black", backgroundColor: "lightgrey", height: "200px", lineHeight: "200px" }}> <FiImage size="25px"/> </p>
                                    <Link to={"Tiket"}>
                                        <button style={{ backgroundColor: "#5CB85F", width: "100%", height: "40px", marginBottom: "10px" }}>
                                            <p style={{ color: "white", padding: "5px", fontWeight: "bold" }}> Upload </p>
                                        </button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                </>
                )}
                <Footer />
            </>
    )
}

export default Pembayaran;