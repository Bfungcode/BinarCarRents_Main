import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom"
import './styling/Header.css'
import './styling/Content.css'
import './styling/Footer.css'
import './styling/detailMobil.css'
import './styling/Carimobil.css'
import './styling/Cari.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import LandingPage from './pages/LandingPage';
import Pencarian from './pages/Pencarian';
import DetailMobil from './components/DetailMobil';
import Pembayaran from './components/Pembayaran';
import Tiket from './components/Tiket';
<<<<<<< HEAD
import Konfirmasi from './components/Konfirmasi';
=======
import Login from './pages/Login';
import Register from './pages/Register';
>>>>>>> 2bc7369 (get star date dan end date di pembayaran page)


function App() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<LandingPage />} /> 
=======
      <Route path="/" element={<LandingPage />} />
>>>>>>> 2bc7369 (get star date dan end date di pembayaran page)
      <Route path='SewaMobil'>
        <Route index element={<Pencarian />} />
        <Route path=':id' element={<DetailMobil />} />
      </Route>
      <Route path='Pembayaran'>
        <Route index element={<DetailMobil />} />
<<<<<<< HEAD
        <Route path=':id'>
          <Route index element={<Pembayaran/>} />
          <Route path='Konfirmasi' element={<Konfirmasi/>} />
          <Route path='Tiket' element={<Tiket />} />
        </Route>
      </Route>
=======
        <Route path=':id' element={<Pembayaran />} />
      </Route>
      <Route path='Tiket' element={<Tiket />} />
      <Route path="login-user" element={ <Login /> } />
      <Route path="register-user" element={ <Register /> } />
>>>>>>> 2bc7369 (get star date dan end date di pembayaran page)
    </Routes >
  )
}

export default App;
