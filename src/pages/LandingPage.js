import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
const LandingPage = () => {
    return (
        <>
            <Header isButtonShow={true} />
            <Content />
            <Footer />
        </>
    )
}

export default LandingPage