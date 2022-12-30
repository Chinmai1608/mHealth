import React from 'react'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import PatientLogin from './PatientLogin'
import DoctorLogin from './DoctorLogin'
import SupplierLogin from './SupplierLogin'

export default function Example () {
  return (
    <div>
      <Navbar/>
      <Home/>
      <PatientLogin/>
      <DoctorLogin/>
      <SupplierLogin/>
    </div>
  )
};

