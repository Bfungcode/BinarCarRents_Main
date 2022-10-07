import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useParams, useNavigate, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CariMobil from "./CariMobil";
import CalendarView from "./Calendar";
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import * as Icon from "react-bootstrap-icons";
import '../styling/detailMobil.css'

const DetailMobil = () => {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const controller = new AbortController();
    const navigate = useNavigate();
    //spread operator -> mengeluarkan properti dari object
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

    useEffect(() => {
        loadDetail();
        return () => {
        };
    }, []);

    return (

        <div className="page">
            <Header />
            <CariMobil />
            <div className="detailmobil-sty">
                <Container>
                    <Row>
                        <Col>
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
                        </Col>
                        <Col>
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
                                    <Link to={"/Pembayaran/" + id}>
                                        <Button className="btn-success">Mulai Sewa Mobil</Button>
                                    </Link>
                                    {/* <Button className="lanjutkanpembayaran" onClick={() => navigate(`${urlPage}/pembayaran`)}>Lanjutkan</Button> */}
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default DetailMobil