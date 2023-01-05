import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import PatientLogin from './PatientLogin'
import DoctorLogin from './DoctorLogin'
import SupplierLogin from './SupplierLogin'
import PatientHome from './PatientHome'

export default function Example () {
  return (
    <div>
      <Navbar/>
      <PatientHome/>
      <Home/>
      <PatientLogin/>
      <DoctorLogin/>
      <SupplierLogin/>
    </div>
  )
};

