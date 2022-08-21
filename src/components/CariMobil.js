import React, { useState } from 'react';
import '../App'
import {
    CardBody, Card, Button, Form, FormText, FormGroup,
    Input, Label, Container, Row, Col
} from 'reactstrap';



const CariMobil = ({ cars, setFilteredCars }) => {
    const [formNamaMobil, setFormNamaMobil] = useState('');
    const [formCategory, setFormCategory] = useState('');
    const [formPrice, setFormPrice] = useState('');
    const [formStatus, setFormStatus] = useState(false);

    const handleSubmit = (e) => {
        const pilihanHarga = (harga) => {
            return (
                (harga < 400000 && formPrice === 'KURANG_400') ||
                (harga >= 400000 && harga <= 600000 && formPrice === '400-600') ||
                (harga > 60000 && formPrice === 'LEBIH_600')
            )
        }
        const carsFiltered = cars.filter((item) =>
            formNamaMobil === item.name
        );
        setFilteredCars(carsFiltered)
        e.preventDefault();
    }
    return (
        <div className='wrapper'>
            <div className='Carimobil-sty'>
                <Container>
                    <Form>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <label>Nama Mobil</label>
                                    <Input type="text" id="namamobil" onChange={(e) => { setFormNamaMobil(e.target.value) }} ></Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <label>Kategori</label>
                                    <Input type='select' id="kategori" onChange={(e) => setFormCategory(e.target.value)}>
                                        <option> 2 - 4 orang</option>
                                        <option> 4 - 6 orang</option>
                                        <option> 6 - 8 orang</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <label>Harga</label>
                                    <Input type='select' id="harga" onChange={(e) => setFormPrice(e.target.value)}>
                                        <option>&gt; Rp 400000</option>
                                        <option>Rp 400000 - Rp.600000</option>
                                        <option>&gt; Rp 600000</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Status</Label>
                                    <Input type='select' id='harga' onChange={(e) => setFormStatus(e.target.value)}>
                                        <option value={true}>Disewakan</option>
                                        <option value={false}>Tidak Disewakan</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <br></br>
                                    <Button className="btn-success" type="submit" onClick={(e) => { handleSubmit(e) }}> Cari Mobil</Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </div >
    )
}



export default CariMobil