import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CariMobil from './CariMobil'
import '../App'
import { Container, Row } from 'react-bootstrap'

const Cari = () => {
    const [loading, setLoading] = useState(false);
    const [filteredCars, setFilteredCars] = useState([])

    return (
        <section>
            <CariMobil setFilteredCars={setFilteredCars} />
            <div className="wrappermobil">
                <Container>
                    <Row>
                        {!loading ? (
                            filteredCars.length ? (
                                filteredCars.map((car, index) => {
                                    // {filteredCars && filteredCars.map((car, index) => {
                                    return (
                                        <div className="col-lg-4 col-md-6 mb-4">
                                            <div className="card p-3 mb-5 d-flex flex-column justify-content-between gap-5" style={{ height: '100%' }}>
                                                {car.image ? (<img src={car.image} />) : (<img src={require("../media/mobil1.png")} />)}
                                                <div>
                                                    <p>{car.name}</p>
                                                    {car.price ? (<h4>Rp {car.price} / hari</h4>) : (<h4>Rp. 0 </h4>)}
                                                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h5>
                                                    <a href={`/SewaMobil/${car.id}`} className="btn btn-success" style={{ width: "100%" }}>Pilih Mobil</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                <h3 className="tidakadahasil">Silahkan mencari mobil yang diinginkan</h3>
                            )
                        ) : (
                            <h1 className="loadingmenu">Loading....</h1>
                        )
                        }
                    </Row>
                </Container>
            </div>
        </section >
    )
};


export default Cari