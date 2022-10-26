import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
import { FiImage, FiCopy } from "react-icons/fi";
import { AiOutlineArrowLeft, AiOutlineLine, AiOutlineCheck } from "react-icons/ai";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import { getCarById, uploadSlip } from "../features/rental/rentalSlice";
import Footer from "./Footer";
import moment from 'moment';
import Countdown from './Countdown';
import Dropzone from 'react-dropzone';
import * as Icon from "react-bootstrap-icons";
import 'moment/locale/id';
import 'react-toastify/dist/ReactToastify.css';
import '../styling/PembayaranTiket.css';

const Pembayaran = () => {

    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(false);
    const [menu, setMenu] = useState(true);
    const [bankMenu, setBankMenu] = useState('start');
    const [activeMenu, setActiveMenu] = useState('atm');
    const [metodeMenu, setMetodeMenu] = useState('metode')
    const [uploadMenu, setUploadMenu] = useState('konfirmasi');
    const [rekening, setRekening] = useState('');
    const [tanggalMulaiSewa, setTanggalMulaiSewa] = useState();
    const [tanggalAkhirSewa, setTanggalAkhirSewa] = useState();
    const [file, setFile] = useState();
    const { isLoggedIn } = useSelector((state) => state.auth);
    const { id } = useParams();
    const navigate = useNavigate();
    const controller = new AbortController();
    const selisihHari = localStorage.getItem("selisihHari");
    const orderID = localStorage.getItem("idOrder");
    const dispatch = useDispatch();

    const endTime = new Date().getTime() + 3600000 * 24;
    moment.locale("id");

    const [timeLeft, setEndTime] = Countdown(endTime);

    const hours = Math.floor(timeLeft / 3600000) % 60;
    const minutes = Math.floor(timeLeft / 60000) % 60;
    const seconds = Math.floor(timeLeft / 1000) % 60;

    const minutes2 = Math.floor(timeLeft / 60000) % 10;
    const seconds2 = Math.floor(timeLeft / 1000) % 60;

    const customId = "custom-id-yes";
    const notify = () => {
        toast("Copied to Clipboard!", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            toastId: customId,
        })
    }

    const notifyImg = () => {
        toast("Format file tidak mendukung", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            toastId: customId,
        })
    }

    const [sidebar, setSidebar] = useState('collapse')
    window.addEventListener('scroll', () => {
        setSidebar('collapse');
    })

    const totalBiaya = detail?.price * selisihHari;

    const getDetail = () => {
        dispatch(getCarById({ id }))
            .unwrap()
            .then((data) => {
                setDetail(data)
                console.log(data)
            })
            .catch(err => console.log(err));
    }

    const putSlip = () => {
        dispatch(uploadSlip({ id, slip: file[0] }))
            .unwrap()
    }

    useEffect(() => {
        getDetail();
        setTanggalMulaiSewa(moment(localStorage.getItem("tanggalMulai")).format("LL"));
        setTanggalAkhirSewa(moment(localStorage.getItem("tanggalSelesai")).format("LL"));
    }, []);

    React.useEffect(() => {
        if (!isLoggedIn) {
            alert("Silakan login untuk melanjutkan pemesanan");
            navigate('/login');
        }
    }, [!isLoggedIn])

    return (
        <>
            {/* HEADER */}
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
                        <div>
                            {metodeMenu === 'metode' && (
                                <p onClick={() => navigate(-1)}>
                                    <AiOutlineArrowLeft />
                                    <span style={{ fontWeight: "bold" }}> Pembayaran </span>
                                </p>
                            )}
                            {metodeMenu === 'bayar' && (
                                <>
                                    <p onClick={() => {
                                        setMetodeMenu('metode')
                                        setMenu('true')
                                        setMetodeMenu('metode')
                                        setBankMenu('start')
                                        setUploadMenu('konfirmasi')
                                    }} style={{ marginBottom: "0px" }}>
                                        <AiOutlineArrowLeft />
                                        <span style={{ fontWeight: "bold" }}> {bankMenu} Transfer </span>
                                    </p>
                                    <p style={{ marginLeft: "20px", fontSize: "14px" }}> Order ID: xxxxxxxx </p>
                                </>
                            )}
                        </div>
                        <div className="headerMetode1">
                            {metodeMenu === 'metode' && (
                                <p>
                                    <span style={{ border: "1px solid #0D28A6", padding: "0px 6px", borderRadius: "50%", color: "white", backgroundColor: "#0D28A6" }}>1</span>
                                    <span className="headerMetode2"> Pilih Metode </span>
                                    <span> <AiOutlineLine size="25px" color="#0D28A6" /> </span>
                                    <span style={{ border: "1px solid #0D28A6", padding: "0px 6px", borderRadius: "50%" }}>2</span>
                                    <span className="headerMetode2"> Bayar </span>
                                    <span> <AiOutlineLine size="25px" color="#0D28A6" /> </span>
                                    <span style={{ border: "1px solid #0D28A6", padding: "0px 6px", borderRadius: "50%" }}>3</span>
                                    <span className="headerMetode2"> Tiket </span>
                                </p>
                            )}

                            {metodeMenu === 'bayar' && (
                                <p>
                                    <span style={{ border: "1px solid #0D28A6", padding: "0px 3px", borderRadius: "50%", color: "white", backgroundColor: "#0D28A6" }}><AiOutlineCheck color="white" size="15px" /></span>
                                    <span className="headerMetode2"> Pilih Metode </span>
                                    <span> <AiOutlineLine size="25px" color="#0D28A6" /> </span>
                                    <span style={{ border: "1px solid #0D28A6", padding: "0px 6px", borderRadius: "50%", color: "white", backgroundColor: "#0D28A6" }}>2</span>
                                    <span className="headerMetode2"> Bayar </span>
                                    <span> <AiOutlineLine size="25px" color="#0D28A6" /> </span>
                                    <span style={{ border: "1px solid #0D28A6", padding: "0px 6px", borderRadius: "50%" }}>3</span>
                                    <span className="headerMetode2"> Tiket </span>
                                </p>
                            )}
                        </div>
                    </div>
                </Container >
            </div>

            {menu ? (
                <>
                    <div class="container" id="detailP" style={{ width: "80%" }}>
                        <div class="row justify-content-md-center" style={{ borderRadius: "10px", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", padding: "8px" }}>
                            <p style={{ fontWeight: "bold", paddingLeft: "12px", fontSize: "18px" }}> Detail Pesananmu </p>
                            <div class="col-12">
                                <div class="row" id="detailP">
                                    <div class="col">
                                        <p > Nama/Tipe Mobil </p>
                                        <p style={{ color: "black", fontWeight: "bold" }}> {detail?.name} </p>
                                    </div>
                                    <div class="col">
                                        <p> Kategori </p>
                                        <p style={{ color: "black", fontWeight: "bold" }}> {detail?.category} </p>
                                    </div>
                                    <div class="col">
                                        <p> Tanggal Mulai Sewa </p>
                                        <p style={{ color: "black", fontWeight: "bold" }}> {tanggalMulaiSewa} </p>
                                    </div>
                                    <div class="col">
                                        <p> Tanggal Akhir Sewa </p>
                                        <p style={{ color: "black", fontWeight: "bold" }}> {tanggalAkhirSewa}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container" style={{ marginTop: "20px" }}>
                        <div class="row justify-content-md-center" id="luarFL" style={{ gap: "20px" }}>

                            <div class="col-6" id="pilihBank" style={{ padding: "20px", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", borderRadius: "10px", height: "100%" }}>
                                <div>
                                    <p style={{ fontWeight: "bold", fontSize: "18px" }}> Pilih Bank Transfer </p>
                                    <p> Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking </p>
                                    <div class="row" style={{ paddingTop: "25px" }}>
                                        <div style={{ marginBottom: "30px" }} onClick={() => {
                                            setBankMenu('BCA')
                                            setRekening('372 309 8781')
                                        }}>
                                            <div class="row">
                                                <div class="col">
                                                    <p>
                                                        <span style={{ color: "black", border: "2px solid lightgrey", padding: "5px", borderRadius: "5px", marginRight: "15px" }}> BCA </span>
                                                        <span style={{ color: "black" }}> BCA Transfer </span>
                                                    </p>
                                                </div>
                                                <div class="col">
                                                    {bankMenu === 'BCA' && (
                                                        <h5 style={{ textAlign: "right", marginRight: "30px" }}> <FcCheckmark size="25px" /> </h5>
                                                    )}
                                                </div>
                                            </div>
                                            <hr style={{ margin: "10px 0px 0px 0px", color: "black" }}></hr>
                                        </div>
                                        <div style={{ marginBottom: "30px" }} onClick={() => {
                                            setBankMenu('BNI')
                                            setRekening('800 600 6009')
                                        }}>
                                            <div class="row">
                                                <div class="col">
                                                    <p>
                                                        <span style={{ color: "black", border: "2px solid lightgrey", padding: "5px", borderRadius: "5px", marginRight: "15px" }}> BNI </span>
                                                        <span style={{ color: "black" }}> BNI Transfer </span>
                                                    </p>
                                                </div>
                                                <div class="col">
                                                    {bankMenu === 'BNI' && (
                                                        <h5 style={{ textAlign: "right", marginRight: "30px" }}> <FcCheckmark size="25px" /> </h5>
                                                    )}
                                                </div>
                                            </div>
                                            <hr style={{ margin: "10px 0px 0px 0px", color: "black" }}></hr>
                                        </div>
                                        <div onClick={() => {
                                            setBankMenu('Mandiri')
                                            setRekening('102 000 5263873')
                                        }}>
                                            <div class="row">
                                                <div class="col-8">
                                                    <p className="mandiri">
                                                        <span style={{ color: "black", border: "2px solid lightgrey", padding: "5px", borderRadius: "5px", marginRight: "15px" }}> Mandiri </span>
                                                        <span style={{ color: "black" }}> Mandiri Transfer </span>
                                                    </p>
                                                </div>
                                                <div class="col-4">
                                                    {bankMenu === 'Mandiri' && (
                                                        <h5 style={{ textAlign: "right", marginRight: "30px" }}><FcCheckmark size="25px" /></h5>
                                                    )}
                                                </div>
                                            </div>
                                            <hr style={{ margin: "10px 0px 0px 0px", color: "black" }}></hr>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-4" id="detailPE" style={{ padding: "20px", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", borderRadius: "10px" }}>
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
                                            <p class="text-end" style={{ fontWeight: "bold" }}> Rp {totalBiaya.toLocaleString('en-US')} </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: "bold" }}> Harga </p>
                                        <div class="row">
                                            <div class="col-8">
                                                <p> Sewa Mobil Rp {detail?.price.toLocaleString('en-US')} x {selisihHari} hari </p>
                                            </div>
                                            <div class="col">
                                                <p class="text-end"> Rp {totalBiaya.toLocaleString('en-US')} </p>
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
                                                <p class="text-end" style={{ fontWeight: "bold" }}> Rp {totalBiaya.toLocaleString('en-US')} </p>
                                            </div>
                                        </div>
                                        {bankMenu === 'start' && (
                                            <button style={{ backgroundColor: "#DEF1DF", width: "100%", height: "40px", marginBottom: "10px" }}>
                                                <p style={{ color: "white", padding: "5px", fontWeight: "bold" }}> Bayar </p>
                                            </button>
                                        )}
                                        {bankMenu === 'BCA' && (
                                            <button style={{ backgroundColor: "#5CB85F", width: "100%", height: "40px", marginBottom: "10px" }}
                                                onClick={() => {
                                                    setMenu(!menu)
                                                    setMetodeMenu('bayar')
                                                }} >
                                                <p style={{ color: "white", padding: "5px", fontWeight: "bold" }}> Bayar </p>
                                            </button>
                                        )}
                                        {bankMenu === 'BNI' && (
                                            <button style={{ backgroundColor: "#5CB85F", width: "100%", height: "40px", marginBottom: "10px" }}
                                                onClick={() => {
                                                    setMenu(!menu)
                                                    setMetodeMenu('bayar')
                                                }} >
                                                <p style={{ color: "white", padding: "5px", fontWeight: "bold" }}> Bayar </p>
                                            </button>
                                        )}
                                        {bankMenu === 'Mandiri' && (
                                            <button style={{ backgroundColor: "#5CB85F", width: "100%", height: "40px", marginBottom: "10px" }}
                                                onClick={() => {
                                                    setMenu(!menu)
                                                    setMetodeMenu('bayar')
                                                }} >
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
                        <div class="row justify-content-md-center" id="selesaiKan" style={{ gap: "20px" }}>
                            <div class="col-6" id="pemba">
                                <div style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", borderRadius: "10px", marginBottom: "20px", padding: "20px" }}>
                                    <div class="row">
                                        <div class="col">
                                            <p style={{ fontWeight: "bold" }}> Selesaikan Pembayaran Sebelum </p>
                                            <p> {moment(endTime).format('LLL')} WIB </p>
                                        </div>
                                        <div class="col" style={{ marginBottom: "10px" }}>
                                            <p style={{ textAlign: "right" }}>
                                                <span style={{ backgroundColor: "#FA2C5A", padding: "0px 2px", color: "white" }}>{hours.toString().length === 1 ? "0" : null}{hours}</span>
                                                <span> : </span>
                                                <span style={{ backgroundColor: "#FA2C5A", padding: "0px 2px", color: "white" }}>{minutes.toString().length === 1 ? "0" : null}{minutes}</span>
                                                <span> : </span>
                                                <span style={{ backgroundColor: "#FA2C5A", padding: "0px 2px", color: "white" }}>{seconds.toString().length === 1 ? "0" : null}{seconds}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", borderRadius: "10px", marginBottom: "20px", padding: "20px" }}>
                                    <p style={{ fontWeight: "bold" }}> Lakukan Transfer Ke </p>
                                    <div class="row">
                                        <div class="col-lg-2 col-3">
                                            <p class="text-center" style={{ width: "70px", border: "2px solid lightgrey", padding: "5px", borderRadius: "5px" }}> {bankMenu} </p>
                                        </div>
                                        <div class="col">
                                            <p> {bankMenu} Transfer </p>
                                            <p> a.n Binar Car Rental </p>
                                        </div>
                                    </div>
                                    <p style={{ color: "#3C3C3C" }}> Nomor Rekening </p>
                                    <p style={{ border: "1px solid black", padding: "5px", borderRadius: "2px" }}>
                                        <span> {rekening} </span>
                                        <span onClick={notify}>
                                            <CopyToClipboard text={rekening}>
                                                <FiCopy size="18px" />
                                            </CopyToClipboard>
                                            <ToastContainer />
                                        </span>
                                    </p>
                                    <p style={{ color: "#3C3C3C" }}> Total Bayar </p>
                                    <div>
                                        <p style={{ border: "1px solid black", padding: "5px", borderRadius: "2px" }}>
                                            <span> Rp {totalBiaya.toLocaleString('en-US')} </span>
                                            <span onClick={notify}>
                                                <CopyToClipboard text={detail?.price.toLocaleString('en-US')}>
                                                    <FiCopy size="18px" />
                                                </CopyToClipboard>
                                                <ToastContainer />
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", borderRadius: "10px", marginBottom: "20px", padding: "20px" }}>
                                    <p style={{ fontWeight: "bold" }}> Intruksi Pembayaran </p>
                                    <div class='row'>
                                        <div class="col">
                                            <div onClick={() => setActiveMenu('atm')}> Atm {bankMenu}
                                            </div>
                                            {activeMenu === 'atm' && (
                                                <p style={{ borderBottom: "2px solid #5CB85F" }}> </p>
                                            )}
                                        </div>
                                        <div class="col">
                                            <div onClick={() => setActiveMenu('m-')}> M-{bankMenu}
                                            </div>
                                            {activeMenu === 'm-' && (
                                                <p style={{ borderBottom: "2px solid #5CB85F" }}> </p>
                                            )}
                                        </div>
                                        <div class="col">
                                            <div onClick={() => setActiveMenu('klik')}> {bankMenu} Klik
                                            </div>
                                            {activeMenu === 'klik' && (
                                                <p style={{ borderBottom: "2px solid #5CB85F" }}> </p>
                                            )}
                                        </div>
                                        <div class="col">
                                            <div onClick={() => setActiveMenu('banking')}> Internet Banking
                                            </div>
                                            {activeMenu === 'banking' && (
                                                <p style={{ borderBottom: "2px solid #5CB85F" }}> </p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        {activeMenu === 'atm' && (
                                            <div style={{ padding: "20px", color: "grey" }}>
                                                <li> Masukkan kartu ATM, lalu PIN </li>
                                                <li> Pilih menu “Transaksi Lainnya” – “Transfer” – “Ke Rekening {bankMenu}” </li>
                                                <li> Masukkan nomor Rekening "{rekening}" & nominal transfer </li>
                                                <li> Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi </li>
                                                <li> Ambil dan simpanlah bukti transaksi tersebut </li>
                                            </div>
                                        )}
                                        {activeMenu === 'm-' && (
                                            <div style={{ padding: "20px", color: "grey" }}>
                                                <li> Masuk ke menu M-{bankMenu} </li>
                                                <li> Klik menu “M-Transfer” kemudian tekan YES/OK </li>
                                                <li> Pilih “antar rekening”, lalu pilih mata uang dan jumlah uang yang akan ditransfer </li>
                                                <li> Masukkan nomor Rekening "{rekening}" </li>
                                                <li> Ketik PIN akun {bankMenu}mu, akan muncul keterangan berita yang dapat kamu kosongkan saja </li>
                                                <li> Lalu tekan OK </li>
                                            </div>
                                        )}
                                        {activeMenu === 'klik' && (
                                            <div style={{ padding: "20px", color: "grey" }}>
                                                <li> Buka https://ibank.klik{bankMenu}.com </li>
                                                <li> Masukkan user ID dan PIN klik {bankMenu} </li>
                                                <li> Daftar dan masukkan nomer Rekening "{rekening}" di klik {bankMenu} individual </li>
                                                <li> Masuk ke “Transfer dana “, klik “Rekening {bankMenu}” </li>
                                                <li> Klik nomer rekening yang telah didaftarkan dan masukkan jumlah nominasi uang yang akan ditransfer </li>
                                                <li> Tunggu 8 digit angka untuk memasukkan ke Key{bankMenu} </li>
                                                <li> Setelah angka 8 digit masuk di respon key{bankMenu} APLLI 2, kemudian pencet “selanjutnya” </li>
                                                <li> Tunggu nomor rekening tujuan, lalu nyalakan ulang key {bankMenu} dan tekan 1 </li>
                                                <li> Tunggu respon KEY{bankMenu} APLLI 1, kirim dan tunggu bukti transfer uang muncul </li>
                                            </div>
                                        )}
                                        {activeMenu === 'banking' && (
                                            <div style={{ padding: "20px", color: "grey" }}>
                                                <li> Login dengan user ID dan password pada Internet Banking anda </li>
                                                <li> Pilih menu "Transfer". Pilih pilihan "Transfer Antar Bank" </li>
                                                <li> Pilih bank {bankMenu}, Isi nomor Rekening "{rekening}", nominal transfer dan tekan tombol "Kirim" </li>
                                                <li> Masukan password dan klik "Permintaan M-Token", lalu klik tombol "Kirim" </li>
                                                <li> Ambil dan simpanlah bukti transfer </li>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div class="col-4" id="pemba" style={{ padding: "20px", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", borderRadius: "10px", height: "100%" }}>
                                {uploadMenu === 'konfirmasi' && (
                                    <>
                                        <p> Klik konfirmasi pembayaran untuk mempercepat proses pengecekan </p>
                                        <div onClick={() => setUploadMenu('upload')}>
                                            <button style={{ backgroundColor: "#5CB85F", width: "100%", height: "40px", marginBottom: "10px" }}>
                                                <p style={{ color: "white", padding: "5px", fontWeight: "bold" }}> Konfirmasi </p>
                                            </button>
                                        </div>
                                    </>
                                )}
                                {uploadMenu === 'upload' && (
                                    <>
                                        <div class="row">
                                            <div class="col">
                                                <p style={{ fontWeight: "bold" }}> Konfirmasi Pembayaran </p>
                                            </div>
                                            <div class="col">
                                                <p style={{ textAlign: "right" }}>
                                                    <span style={{ backgroundColor: "#FA2C5A", padding: "0px 2px", color: "white" }}>{minutes2.toString().length === 1 ? "0" : null}{minutes2}</span>
                                                    <span> : </span>
                                                    <span style={{ backgroundColor: "#FA2C5A", padding: "0px 2px", color: "white" }}>{seconds2.toString().length === 1 ? "0" : null}{seconds2}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p> Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi. </p>
                                        <br />
                                        <p> Upload Bukti Pembayaran </p>
                                        <p> Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu </p>
                                        <p class="text-center" style={{ border: "1px dashed black", backgroundColor: "lightgrey", height: "200px", lineHeight: "200px" }}>
                                            <Dropzone onDrop={acceptedFiles => {
                                                if (acceptedFiles[0].type.includes("image")) {
                                                    setFile(acceptedFiles);
                                                } else {
                                                    notifyImg();
                                                }
                                                console.log(acceptedFiles)
                                            }
                                            }>
                                                {({ getRootProps, getInputProps }) => (
                                                    <section>
                                                        <div {...getRootProps()}>
                                                            <input {...getInputProps()} />
                                                            {!file? (                                                                
                                                                <p>Drag & drop image here or click to select image</p>
                                                            ) : (
                                                                <FiImage size="30px"/>
                                                            )}
                                                        </div>
                                                    </section>
                                                )}
                                            </Dropzone>
                                        </p>
                                        {file ? (
                                            <Link to={"Tiket"}>
                                                <button onClick={putSlip} style={{ backgroundColor: "#5CB85F", width: "100%", height: "40px", marginBottom: "10px" }}>
                                                    <p style={{ color: "white", padding: "5px", fontWeight: "bold" }}> Upload </p>
                                                </button>
                                            </Link>
                                        ) : (
                                            <button style={{ backgroundColor: "#DEF1DF", width: "100%", height: "40px", marginBottom: "10px" }}>
                                                <p style={{ color: "white", padding: "5px", fontWeight: "bold" }}> Upload </p>
                                            </button>
                                        )}

                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )
            }
            <Footer />
        </>
    )
}

export default Pembayaran;