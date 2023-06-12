import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { Routes, Route } from "react-router-dom";

import RegistrationComponent from './components/RegistrationComponent';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import DietPlan from './components/DietPlan';
import MedicinePlan from './components/MedicinePlan';
import MedicalStore from './components/MedicalStore';
import EmergencyContact from './components/EmergencyContact';
import Hospitals from './components/Hospitals';
import AddDietPlan from './components/AddDietPlan';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/save" element={<RegistrationComponent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/diet-plan" element={<DietPlan />} />
          <Route path="/medicine-plan" element={<MedicinePlan />} />
          <Route path="/hospitals" element={<Hospitals />} />
          < Route path="/emergency-contacts" element={<EmergencyContact />} />
          < Route path="/medical-stores" element={<MedicalStore />} />
          <Route path="/add-diet-plan" element={<AddDietPlan />}></Route>
        </Routes >

      </BrowserRouter >

    </>
  );
}

export default App;
