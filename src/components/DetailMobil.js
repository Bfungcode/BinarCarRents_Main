import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { getCarById, postOrder } from "../features/rental/rentalSlice";
import { useParams, Link, useNavigate } from "react-router-dom";
import { setMessage } from "../features/auth/message-slice";
import Header from "./Header";
import Footer from "./Footer";
import CariMobil from "./CariMobil";
import CalendarView from "./Calendar";
import { Card, Button } from 'react-bootstrap'
import { Modal, ModalBody, } from 'reactstrap';
import moment from 'moment';
import 'moment/locale/id';
import * as Icon from "react-bootstrap-icons";
import '../styling/detailMobil.css'

const DetailMobil = () => {
    const [detail, setDetail] = useState(null);
    const { id } = useParams();
    const dispatch = useDispatch();
    const [modal, setModal] = React.useState(false);
    const toggle = () => setModal(!modal);
    const [startRent, setStartRent] = useState();
    const [finishRent, setFinishRent] = useState();
    const navigate = useNavigate();

    const getDetail = () => {
        dispatch(getCarById({ id }))
            .unwrap()
            .then((data) => {
                setDetail(data)
            })
            .catch(err => dispatch(setMessage(err)));
    }

    const makeOrder = () => {
        dispatch(postOrder({ start_rent_at: startRent, finish_rent_at: finishRent, car_id: id }))
            .unwrap()
            .then((data) => {
                localStorage.setItem("idOrder", JSON.stringify(data?.id));
                navigate('/Pembayaran/' + id)
            })
            .catch(() => {
                dispatch(setMessage('error'))
                toggle()

            })

    }
    useEffect(() => {
        getDetail();
        setStartRent(moment(localStorage.getItem("tanggalMulai")).format("YYYY-MM-DD"));
        setFinishRent(moment(localStorage.getItem("tanggalSelesai")).format("YYYY-MM-DD"));
        return () => {
        };
    }, []);

    return (
        <div className="page">
            <Header />
            <CariMobil />
            <Modal isOpen={modal}
                toggle={toggle}
                modalTransition={{ timeout: 500 }}>
                <ModalBody style={{ color: "red" }} >
                    Server Error
                </ModalBody>
            </Modal>
            <div className="detailmobil-sty">
                <div className="container">
                    <div className="row" id="rowF">
                        <div className="col">
                            <div className="paragraf1">
                                <h4>Tentang Paket</h4>
                                <br></br>
                                <h5>Include</h5>
                                <br></br>
                                <ul>
                                    <li>Apa Saja yang termasuk dalam paket misal durasi max 12jam</li>
                                    <li>Sudah termasuk bensin selama 12 jam</li>
                                    <li>Sudah termasuk Tiket Wisata</li>
                                    <li>Sudah Termasuk Pajak</li>
                                </ul>
                                <br></br>
                                <h5>Exclude</h5>
                                <br></br>
                                <ul>
                                    <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                </ul>
                                <br></br>
                                <h5>Refund, Reschedule, Overtime</h5>
                                <br></br>
                                <ul>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="paketMobil">
                                <Card className="cardstyle">
                                    {detail?.image ? (<img src={detail?.image} />) : (<img src={require("../media/mobil1.png")} />)}
                                    <Card.Body>
                                        <h5>{detail?.name}</h5>
                                        <div className="jumlahorang">
                                            <i><Icon.People /></i>
                                            <h5>{detail?.category}</h5>
                                        </div>
                                        <div>
                                            <br></br>
                                            <h6>Tentukan Lama Sewa Mobil</h6>
                                            <CalendarView />
                                        </div>
                                        <div className="total">
                                            <h5>Total</h5>
                                            <h5>Rp {detail?.price}</h5>
                                        </div>
                                    </Card.Body>
                                    <div>
                                        <Button className="btn-success2" type="submit" onClick={() => {
                                            makeOrder()
                                        }}>Mulai Sewa Mobil</Button>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default DetailMobil;