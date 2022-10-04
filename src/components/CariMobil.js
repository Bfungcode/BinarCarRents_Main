import React, { useState } from 'react';
import '../App'
import {
    CardBody, Card, Button, Form, FormText, FormGroup,
    Input, Label, Container, Row, Col
} from 'reactstrap';



const CariMobil = ({ cars, setFilteredCars }) => {
    const [formNamaMobil, setFormNamaMobil] = useState('');
    const [formCategory, setFormCategory] = useState('');
    const [formPrice, setFormPrice] = useState('default');

    const handleSubmit = (e) => {
        const pilihanHarga = (harga) => {
            return (
                (harga < 400000 && formPrice === 'KURANG_400') ||
                (harga >= 400000 && harga <= 600000 && formPrice === '400-600') ||
                (harga > 600000 && formPrice === 'LEBIH_600')
            )
        }
        const carsFiltered = cars.filter((item) =>
            formNamaMobil.includes(item.name) ||
            item.category === formCategory ||
            pilihanHarga(item.price)
        );
        setFilteredCars(carsFiltered)
        e.preventDefault();
    }
    return (
        <div className='allwrapper'>
            <Container>
                <div className='formwrapper'>
                    <Form>
                        <Row>
                            <Col>
                                <Label>Nama</Label>
                                <FormGroup>
                                    <Input type="text" placeholder='Nama Mobil' id="namamobil" onChange={(e) => { setFormNamaMobil(e.target.value) }} ></Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <Label>Kategori</Label>
                                <FormGroup>
                                    <Input type='select' id="kategori" onChange={(e) => setFormCategory(e.target.value)}>
                                        <option value="" disabled selected>Pilih kapasitas mobil</option>
                                        <option value={'small' && '2 - 4 orang'}> 2 - 4 orang</option>
                                        <option value={'4 - 6 orang'}> 4 - 6 orang</option>
                                        <option value={'6 - 9 orang'}> 6 - 8 orang</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <Label>Harga</Label>
                                <FormGroup>
                                    <Input type='select' id="harga" onChange={(e) => setFormPrice(e.target.value)}>
                                        <option value="" disabled selected>Harga Mobil</option>
                                        <option value={'KURANG_400'}>&lt; Rp 400000</option>
                                        <option value={'400-600'}>Rp 400000 - Rp.600000</option>
                                        <option value={'LEBIH_600'}>&gt; Rp 600000</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <Label>Status</Label>
                                <FormGroup>
                                    <Input type='select' id='harga' onChange={(e) => (e.target.value)}>
                                        <option value="" disabled selected>Status Mobil</option>
                                        <option>Disewakan</option>
                                        <option>Tidak Disewakan</option>
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
                </div>
            </Container>
        </div>
    )
}



export default CariMobil