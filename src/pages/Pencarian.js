import React from 'react'
import Cari from '../components/Cari'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const Pencarian = () => {
    const { isLoggedIn } = useSelector((state) => state.auth)
    const navigate = useNavigate();
    React.useEffect(() => {
        if (!isLoggedIn) {
            alert("Silakan login untuk melanjutkan pemesanan");
            navigate('/login');
        }
    }, [!isLoggedIn])
    return (
        <div>
            <Header isButtonShow={false} />
            <Cari />
            <Footer />
        </div>
    )
}

export default Pencarian