import React, { useEffect, useState, useRef } from "react";
import { Row, Button } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCarById } from "../features/rental/rentalSlice";
import { setMessage } from "../features/auth/message-slice";
//Calendar
import { DateRange } from 'react-date-range'
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
    const { id } = useParams();
    const dispatch = useDispatch();

    const getDetail = () => {
        dispatch(getCarById({ id }))
            .unwrap()
            .then((data) => {
                setDetail(data)
            })
            .catch(err => dispatch(setMessage(err)));
    }

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
        if (e.key === "Escape") {
            setOpen(false)
        }
    }

    // Hide on outside click
    const hideOnClickOutside = (e) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false)
        }
    }

    // menu pilih tanggal
    const pilihtanggal = (e) => {
        // setOpen(open => !open);
        setOpen(open => !open);
        localStorage.setItem("tanggalMulai", range[0].startDate);
        localStorage.setItem("tanggalSelesai", range[0].endDate);
        localStorage.setItem("selisihHari", Difference_In_Days);
        e.preventDefault();

    }

    useEffect(() => {
        getDetail();
        return () => {
        };
        document.addEventListener("keydown", hideOnEscape, true);
        document.addEventListener("click", hideOnClickOutside, true);
    }, []);

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