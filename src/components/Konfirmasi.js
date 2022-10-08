<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Countdown from './Countdown';
import moment from 'moment';
import 'moment/locale/id';
import { FiImage, FiCopy } from "react-icons/fi";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Konfirmasi = () => {

    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(false);
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

    const postData = async () => {
        await axios
            .post('https://bootcamp-rent-car.herokuapp.com/customer/order',{
                id: id,
                mulaiSewa: '4 Oktober 2022',
                akhirSewa: '10 Oktober 2022' 
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            })
    };

    useEffect(() => {
        loadDetail();
        postData();
    }, []);

=======
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Konfirmasi = () => {

>>>>>>> 2bc7369 (get star date dan end date di pembayaran page)
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
<<<<<<< HEAD
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
=======
                                    <p> Jumat, 9 September 2022 jam 13.00 WIB </p>
                                </div>
                                <div class="col" style={{ marginBottom: "10px" }}>
                                    <p class="text-end"> 23 : 59 : 59 </p>
>>>>>>> 2bc7369 (get star date dan end date di pembayaran page)
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
<<<<<<< HEAD
                            <p style={{ border: "1px solid black", padding: "5px", borderRadius: "2px" }}>
                                <span> 54104257877 </span>
                                <span>
                                    <CopyToClipboard text="54104257877">
                                        <FiCopy size="18px" />
                                    </CopyToClipboard>
                                </span>
                            </p>
                            <p style={{ color: "#3C3C3C" }}> Total Bayar </p>
                            <p style={{ border: "1px solid black", padding: "5px", borderRadius: "2px" }}>
                                <span> Rp {detail?.price.toLocaleString('en-US')} </span>
                                <span>
                                    <CopyToClipboard text={detail?.price.toLocaleString('en-US')}>
                                        <FiCopy size="18px" />
                                    </CopyToClipboard>
                                </span>
                            </p>
=======
                            <p style={{ border: "1px solid black", padding: "5px", borderRadius: "2px" }}> 54104257877 </p>
                            <p style={{ color: "#3C3C3C" }}> Total Bayar </p>
                            <p style={{ border: "1px solid black", padding: "5px", borderRadius: "2px" }}> Rp 3.500.000 </p>
>>>>>>> 2bc7369 (get star date dan end date di pembayaran page)
                        </div>

                        <div style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", borderRadius: "10px", marginBottom: "20px", padding: "20px" }}>
                            <p style={{ fontWeight: "bold" }}> Intruksi Pembayaran </p>
<<<<<<< HEAD
                            <div class='row'>
                                <div class="col">
                                    <div className={activeMenu==='atm' ? 'active' : 'inactive'}
                                        onClick={()=>setActiveMenu('atm')}> Atm BCA 
                                    </div>
                                    {activeMenu==='atm' && (
                                        <p style={{borderBottom: "2px solid #5CB85F"}}> </p>
                                    )}
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
                            <div>
                                {activeMenu==='atm' && (
                                    <div style={{ padding: "20px", color: "grey" }}>
                                        <li> Masukkan kartu ATM, lalu PIN </li>
                                        <li> Pilih menu “Transaksi Lainnya” – “Transfer” – “Ke Rek BCA Virtual Account” </li>
                                        <li> Masukkan nomor BCA Virtual Account: 70020+Order ID </li>
                                        <p> Contoh: </p>
                                        <p> No. Peserta: 12345678, maka ditulis 7002012345678 </p>
                                        <li> Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi </li>
                                        <li> Ambil dan simpanlah bukti transaksi tersebut </li>
                                    </div>
                                )}
                                {activeMenu==='m-bca' && (
                                    <div style={{ padding: "20px", color: "grey" }}>
                                        <li> Masuk ke menu m-BCA </li>
                                        <li> Klik menu “m-Transfer” kemudian tekan YES/OK </li>
                                        <li> Pilih “antar rekening”, lalu pilih mata uang dan jumlah uang yang akan di transfer </li>
                                        <li> Ketikkan nomor rekening 54104257877 </li>
                                        <li> Ketik PIN akun BCAmu, akan muncul keterangan berita yang dapat kamu kosongkan saja </li>
                                        <li> Lalu tekan OK </li>
                                    </div>
                                )}
                                {activeMenu==='klik' && (
                                    <div style={{ padding: "20px", color: "grey" }}>
                                        <li> Buka https://ibank.klikbca.com </li>
                                        <li> Masukkan user ID dan PIN klik BCA </li>
                                        <li> Daftar dan masukkan nomer rekening tujuan di klik BCA individual </li>
                                        <li> Masuk ke “Trasfer dana “, klik “Rekening BCA” </li>
                                        <li> Klik nomer rekening yang telah didaftarkan dan masukkan jumlah nominasi uang yang akan ditransfer </li>
                                        <li> Tunggu 8 digit angka untuk memasukkan ke KeyBCA </li>
                                        <li> Setelah angka 8 digit masuk di respon keyBCA APLLI 2, kemudian pencet “selanjutnya” </li>
                                        <li> Tunggu nomer rekening tujuan, lalu nyalakan ulang key BCA dan tekan 1 </li>
                                        <li> Tunggu respon KEYBCA APLLI 1, kirim dan tunggu bukti transfer uang muncul </li>
                                    </div>
                                )}
                                {activeMenu==='banking' && (
                                    <div style={{ padding: "20px", color: "grey" }}>
                                        <li> Login dengan user ID dan password pada Internet Banking anda </li>
                                        <li> Pilih menu "Transfer". Pilih pilihan "Transfer Antar Bank" </li>
                                        <li> Isi nomor rekening tujuan, bank tujuan, nominal transfer dan tekan tombol "Kirim" </li>
                                        <li> Masukan password dan klik "Permintaan m-Token", lalu klik tombol "Kirim" </li>
                                        <li> Ambil dan simpanlah bukti transfer </li>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-4" style={{ padding: "20px", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", borderRadius: "10px", height: "100%" }}>
                        {uploadMenu==='konfirmasi' && (
                            <>
                            <div className={uploadMenu==='upload' ? 'active' : 'inactive'}
                                onClick={()=>setUploadMenu('upload')}>
                                    <p> Klik konfirmasi pembayaran untuk mempercepat proses pengecekan </p>
                                    <button onClick={postData} style={{ backgroundColor: "#5CB85F", width: "100%", height: "40px", marginBottom: "10px" }}>
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
                                <a href="Tiket">
                                    <button onClick={postData} style={{ backgroundColor: "#5CB85F", width: "100%", height: "40px", marginBottom: "10px" }}>
                                        <p style={{ color: "white", padding: "5px", fontWeight: "bold" }}> Upload </p>
                                    </button>
                                </a>
                            </>
                        )}
=======
                            <div class="row">
                                <div class="col">
                                    <p> ATM BCA </p>
                                </div>
                                <div class="col">
                                    <p> M-BCA </p>
                                </div>
                                <div class="col">
                                    <p> BCA Klik </p>
                                </div>
                                <div class="col">
                                    <p> Internet Banking </p>
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
>>>>>>> 2bc7369 (get star date dan end date di pembayaran page)
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Konfirmasi;