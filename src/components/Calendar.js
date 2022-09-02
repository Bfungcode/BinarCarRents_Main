import React from "react";
import { useEffect, useRef, useState } from "react";
import { Calendar } from "react-date-range";
import format from "date-fns/format";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


const CalendarView = () => {
    const [calendar, setCalendar] = useState('')
    const [open, setOpen] = useState(false)

    const handleSelect = (date) => {
        // console.log(date)
        // console.log(format(date, 'MM/dd/yyyy'))
        setCalendar(format(date, 'MM/dd/yyyy'))
    }

    useEffect (() => {
        setCalendar(format(new Date(), 'MM/dd/yyyy'))
        document.addEventListener("keydown", hideOnEscape, true)
        // document.addEventListener("click", hideOnClickOutside, true)
    }, [])

    const hideOnEscape = (e) => {
        console.log(e.key)
        if ( e.key === "Escape") {
            setOpen(false)
        }
    }

    return (
        <>
        <div className="calendarWrap">
            <input 
                value = {calendar}
                readOnly
                className="inputBox"
                onClick={ () => setOpen(open => !open)}
            />

            {open &&
                <Calendar 
                date={ new Date() }
                onChange= { handleSelect }
                className="calendarElement"
                />
            }
            
        </div>
        </>
    )
};

export default CalendarView;