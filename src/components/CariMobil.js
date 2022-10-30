import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCars } from '../features/rental/rentalSlice';
import { setMessage } from '../features/auth/message-slice';
import '../App'
import '../styling/Carimobil.css'
import { Button, FormGroup, Input, Label, } from 'reactstrap';

const CariMobil = ({ setFilteredCars, }) => {
    const [formNamaMobil, setFormNamaMobil] = useState('');
    const [formCategory, setFormCategory] = useState('');
    const [formPrice, setFormPrice] = useState('');
    const [formStatus, setFormStatus] = useState('')
    const [count, setCount] = useState(null);
    const [pageCount, setPageCount] = useState(null);
    const [pageSize, setPageSize] = useState(12);
    const [current, setCurrent] = useState(1);
    const [onload, setOnload] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (onload) {
            dispatch(getCars({
                name: formNamaMobil,
                category: formCategory,
                isRented: formStatus,
                minPrice: formPrice,
                page: current,
                pageSize: pageSize,
            }))
                .unwrap()
                .then(data => {
                    setFilteredCars(data.cars)
                    setCount(data.pageCount)
                    setPageCount(data.pageCount)
                })
                .catch(err => {
                    dispatch(setMessage(err))
                })
        }
    }, [current, onload]);


    return (
        <div>
            <div>
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
                                <Button className="btn-success" type="submit" onClick={() => {
                                    setOnload(true);
                                }}> Cari Mobil</Button>
                            </FormGroup>
                        </div>
                    </div>
                </div >
            </div>
            {count >= 1 ? (
                <div className='container'>
                    <div className='tempatPagination'>
                        <div className='button1'>
                            <button className="btn btn-light" disabled={current <= 1} onClick={() => setCurrent(current - 1)}>Prev</button>
                        </div>

                        <div className='buttonDiv'>{current}</div>
                        <div className='button2'>
                            <button className="btn btn-light" disabled={current == pageCount} onClick={() => setCurrent(current + 1)}
                            >Next</button>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div></div>
                </>
            )}
        </div>
    )
}




export default CariMobil