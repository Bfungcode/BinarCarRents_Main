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
import LandingPage from './components/LandingPage';
import CariMobil from './components/CariMobil'
import Pencarian from './components/Pencarian';
import DetailMobil from './components/DetailMobil';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path='SewaMobil'>
        <Route index element={<Pencarian />} />
        <Route path=':id' element={<DetailMobil />} />
      </Route>
    </Routes >
  )
}

export default App;
