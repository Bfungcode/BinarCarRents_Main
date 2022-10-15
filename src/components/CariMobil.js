import React, { useState } from 'react';
import '../App'
import {
    CardBody, Card, Button, Form, FormText, FormGroup,
    Input, Label, Container, Row, Col
} from 'reactstrap';
import axios from 'axios';



const CariMobil = ({ cars, setFilteredCars }) => {
    const [formNamaMobil, setFormNamaMobil] = useState(null);
    const [formCategory, setFormCategory] = useState(null);
    const [formPrice, setFormPrice] = useState(null);
    const [formStatus, setFormStatus] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        let url = 'https://bootcamp-rent-cars.herokuapp.com/customer/v2/car'
        try {
            const res = await axios.get(url, {
                params: {
                    page: 1,
                    pageSize: 10,
                    name: formNamaMobil ? formNamaMobil : '',
                    category: formCategory ? formCategory : '',
                    isRented: formStatus ? formStatus : '',
                    minPrice: formPrice ? formPrice : '',
                }
            });
            let data = res.data
            setFilteredCars(res.data.cars)
            return data;
        }
        catch (error) {
            console.log(error);
        }
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
                                        <option value="">Pilih kapasitas mobil</option>
                                        <option value={'small'}> 2 - 4 orang</option>
                                        <option value={'medium'}> 4 - 6 orang</option>
                                        <option value={'large'}> 6 - 8 orang</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <Label>Harga</Label>
                                <FormGroup>
                                    <Input type='text' id="harga" onChange={(e) => setFormPrice(parseInt(e.target.value))}>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <Label>Status</Label>
                                <FormGroup>
                                    <Input type='select' id='harga' onChange={(e) => setFormStatus(e.target.value)}>
                                        <option value="">Status Mobil</option>
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
                </div>
            </Container>
        </div>
    )
}



export default CariMobil