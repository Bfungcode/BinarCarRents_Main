import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import axios from "axios";
import { Navigate, useParams, useNavigate, Link } from "react-router-dom";
//Calendar
import { DateRange, DateRangePicker } from 'react-date-range'
import format from 'date-fns/format'
import { addDays } from 'date-fns'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import '../styling/detailMobil.css'

import moment from 'moment';
// Indonesian locale
var idLocale = require('moment/locale/id'); 
moment.locale('id', idLocale);

const CalendarView = () => {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const controller = new AbortController();
    const navigate = useNavigate();

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

    // date state
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ])

    // open close
    const [open, setOpen] = useState(false)

    // get the target element to toggle 
    const refOne = useRef(null)

    // hide dropdown on ESC press
    const hideOnEscape = (e) => {
        // console.log(e.key)
        if (e.key === "Escape") {
            setOpen(false)
        }
    }

    // Hide on outside click
    const hideOnClickOutside = (e) => {
        // console.log(refOne.current)
        // console.log(e.target)
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false)
        }
    }

    // menu pilih tanggal
    const pilihtanggal = (e) => {
        // setOpen(open => !open);
        // console.log(setRange);
        setOpen(open => !open);
        localStorage.setItem("tanggalMulai", range[0].startDate);
        localStorage.setItem("tanggalSelesai", range[0].endDate);
        localStorage.setItem("selisihHari", Difference_In_Days);
        console.log(range);
        e.preventDefault();

    }

    useEffect(() => {
        loadDetail();
        return () => {
        };
        document.addEventListener("keydown", hideOnEscape, true);
        document.addEventListener("click", hideOnClickOutside, true);
    }, []);

    const tanggalAwal1 = localStorage.getItem("tanggalMulai");
    const tanggalAkhir1 = localStorage.getItem("tanggalSelesai");

    //Hitung selisih waktu
    const Difference_In_Time = range[0].endDate.getTime() - range[0].startDate.getTime();
    //Hitung Selisih hari
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return (
        <>
            <input
                value={`${format(range[0].startDate, "MM/dd/yyyy")} sampai ${format(range[0].endDate, "MM/dd/yyyy")}`}
                readOnly
                className="inputBoxCalendar"
                onClick={() => setOpen(open => !open)}
            />

            <div className="calendarBox">
                <div ref={refOne}>
                    {open &&
                        <Row>
                            <DateRange
                                onChange={item => setRange([item.selection])}
                                editableDateInputs={true}
                                moveRangeOnFirstSelection={false}
                                ranges={range}
                                months={1}
                                direction="horizontal"
                                className="calendarElement"
                            />
                            <Button className="btnCalendar" onClick={(e) => { pilihtanggal(e) }}>Pilih Tanggal</Button>
                        </Row>
                    }
                </div>

            </div>
        </>
    )
}

export default CalendarView;