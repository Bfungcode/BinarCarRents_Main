import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCars } from '../features/rental/rentalSlice';
import '../App'
import '../styling/Carimobil.css'
import {
    CardBody, Card, Button, Form, FormText, FormGroup,
    Input, Label, Container, Row, Col
} from 'reactstrap';
import axios from 'axios';



const CariMobil = ({ cars, setFilteredCars }) => {
    const [formNamaMobil, setFormNamaMobil] = useState('');
    const [formCategory, setFormCategory] = useState('');
    const [formPrice, setFormPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [formStatus, setFormStatus] = useState('')
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const dispatch = useDispatch();

    const getAllCars = () => {
        dispatch(getCars({
            name: formNamaMobil,
            category: formCategory,
            isRented: formStatus,
            minPrice: formPrice,
            page: page,
            pageSize: pageSize,
        }))
            .unwrap()
            .then(data => {
                setFilteredCars(data.cars)
                console.log(data);
            })
            .catch(err => {
                console.log(err)
            })
    }
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     dispatch(getCars({ formNamaMobil, formCategory, formStatus, formPrice, hal, halaman }))
    //         .unwrap()
    //         .then(data => {
    //             setFilteredCars(data.cars)
    //         })
    //         // let url = 'https://bootcamp-rent-cars.herokuapp.com/customer/v2/car'
    //         // try {
    //         //     const res = await axios.get(url, {
    //         //         params: {
    //         //             page: 1,
    //         //             pageSize: 10,
    //         //             name: formNamaMobil ? formNamaMobil : '',
    //         //             category: formCategory ? formCategory : '',
    //         //             isRented: formStatus ? formStatus : '',
    //         //             minPrice: formPrice ? formPrice : '',
    //         //         }
    //         //     });
    //         //     let data = res.data
    //         //     setFilteredCars(res.data.cars)
    //         //     return data;
    //         .catch(err => console.error(err))
    // }
    // const getAllCars = 
    return (
        <div className='container' id='contCari'>
            <div className='row' id='row'>
                <div className='col'>
                    <Label>Nama</Label>
                    <FormGroup>
                        <Input type="text" placeholder='Nama Mobil' id="namamobil" onChange={(e) => { setFormNamaMobil(e.target.value) }} ></Input>
                    </FormGroup>
                </div>
                <div className='col'>
                    <Label>Kategori</Label>
                    <FormGroup>
                        <Input type='select' id="kategori" onChange={(e) => setFormCategory(e.target.value)}>
                            <option value="">Pilih kapasitas mobil</option>
                            <option value={'small'}> 2 - 4 orang</option>
                            <option value={'medium'}> 4 - 6 orang</option>
                            <option value={'large'}> 6 - 8 orang</option>
                        </Input>
                    </FormGroup>
                </div>
                <div className='col'>
                    <Label>Harga</Label>
                    <FormGroup>
                        <Input type='text' id="harga" onChange={(e) => setFormPrice(parseInt(e.target.value))}>
                        </Input>
                    </FormGroup>
                </div>
                <div className='col'>
                    <Label>Status</Label>
                    <FormGroup>
                        <Input type='select' id='harga' onChange={(e) => setFormStatus(e.target.value)}>
                            <option value="">Status Mobil</option>
                            <option value={true}>Disewakan</option>
                            <option value={false}>Tidak Disewakan</option>
                        </Input>
                    </FormGroup>
                </div>
                <div className='col'>
                    <FormGroup>
                        <br></br>
                        <Button className="btn-success" type="submit" onClick={() => { getAllCars() }}> Cari Mobil</Button>
                    </FormGroup>
                </div>
            </div>
        </div >
    )
}



export default CariMobil