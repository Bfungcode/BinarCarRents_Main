import { useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range'

import format from 'date-fns/format'
import { addDays } from 'date-fns'
import { Button, Row } from 'reactstrap'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const CalendarView = () => {

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

    useEffect(() => {
        // event listeners
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
    }, [])

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
        console.log(range);
        console.log(setRange);
        setOpen(open => !open);
    }

    return (
        <div className="calendarWrap">

            <input
                value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate, "MM/dd/yyyy")}`}
                readOnly
                className="inputBox"
                onClick={() => setOpen(open => !open)}
            />

            <div ref={refOne}>
                {open &&
                    <Row>
                        <DateRange
                            onChange={item => setRange([item.selection])}
                            editableDateInputs={true}
                            moveRangeOnFirstSelection={false}
                            ranges={range}
                            months={2}
                            direction="horizontal"
                            className="calendarElement"
                        />
                        <Button onClick={(e) => { pilihtanggal(e) }}>Pilih Tanggal</Button>
                    </Row>
                }
            </div>

        </div>
    )
}

export default CalendarView;