import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import axios from "axios";
import { Navigate, useParams, useNavigate, Link } from "react-router-dom";
import { getCarById } from "../features/rental/rentalSlice";
import Header from "./Header";
import Footer from "./Footer";
import CariMobil from "./CariMobil";
import { getAuthHeader } from "../features/auth/tokenHeader";
import CalendarView from "./Calendar";
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import moment from 'moment';
import 'moment/locale/id';
import * as Icon from "react-bootstrap-icons";
import '../styling/detailMobil.css'
import userEvent from "@testing-library/user-event";

const DetailMobil = () => {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const controller = new AbortController();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [startRent, setStartRent] = useState();
    const [finishRent, setFinishRent] = useState();
    //spread operator -> mengeluarkan properti dari object
    const loadDetail = async () => {
        setLoading(true);
        try {
            const url = "https://bootcamp-rent-cars.herokuapp.com/customer/car/" + id;
            const { data } = await axios.get(url, {
                signal: controller.signal,
            });
            setDetail(data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };
    const handleSubmit = (e) => {
        const user = JSON.parse(localStorage.getItem("user"))
        let url = 'https://bootcamp-rent-cars.herokuapp.com/customer/order'
        try {
            return axios.post(url, {
                start_rent_at: startRent,
                finish_rent_at: startRent,
                car_id: id,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    access_token: user.access_token,
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        loadDetail();
        setStartRent(moment(localStorage.getItem("tanggalMulai")).format("YYYY-MM-DD"));
        setFinishRent(moment(localStorage.getItem("tanggalSelesai")).format("YYYY-MM-DD"));
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
                            ini halaman kanan
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
                                        <Link to={"/Pembayaran/" + id}>
                                            <Button className="btn-success2" type="submit" onClick={(e) => {
                                                handleSubmit(e)
                                            }}>Mulai Sewa Mobil</Button>
                                        </Link>
                                    </div>
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

export default DetailMobil;