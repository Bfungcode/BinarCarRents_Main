import React from 'react'
import CariMobil from '../components/CariMobil'
import Cari from '../components/Cari'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Pencarian = () => {
    return (
        <div>
            <Header isButtonShow={false} />
            <Cari />
            <Footer />
        </div>
    )
}

export default Pencarian