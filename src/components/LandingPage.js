import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
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