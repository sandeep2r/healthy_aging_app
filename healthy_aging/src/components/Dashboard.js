import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import DietPlan from './DietPlan';
import MedicinePlan from './MedicinePlan';
import Hospitals from './Hospitals';
import MedicalStore from './MedicalStore';
import EmergencyContact from './EmergencyContact';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [selectedTab, setSelectedTab] = useState(null);
    const navigate = useNavigate();
    const renderContent = () => {
        switch (selectedTab) {
            case 'diet-plan':
                return <DietPlan />;
            case 'medicine-plan':
                return <MedicinePlan />;
            case 'hospitals':
                return <Hospitals />;
            case 'medical-store':
                return <MedicalStore />;
            case 'emergency-contact':
                return <EmergencyContact />;
            default:
                return null;
        }
    };

    const logout = () => {
        localStorage.removeItem('user'); // Remove the user data from localStorage
        alert('logout successfully');
        navigate('/'); // Redirect to the login page
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100 border">
                <div className="my-2">
                    <button
                        className={`btn btn-primary mb-2 mr-3 ${selectedTab === 'diet-plan' && 'active'}`}
                        onClick={() => setSelectedTab('diet-plan')}
                    >
                        Diet Plan
                    </button>
                    <button
                        className={`btn btn-primary mb-2 mr-3 ${selectedTab === 'medicine-plan' && 'active'}`}
                        onClick={() => setSelectedTab('medicine-plan')}
                    >
                        Medicine Plan
                    </button>
                    <button
                        className={`btn btn-primary mb-2 mr-3 ${selectedTab === 'hospitals' && 'active'}`}
                        onClick={() => setSelectedTab('hospitals')}
                    >
                        Hospitals
                    </button>
                    <button
                        className={`btn btn-primary mb-2 mr-3 ${selectedTab === 'medical-store' && 'active'}`}
                        onClick={() => setSelectedTab('medical-store')}
                    >
                        Medical Store
                    </button>
                    <button
                        className={`btn btn-primary mb-2 mr-3 ${selectedTab === 'emergency-contact' && 'active'}`}
                        onClick={() => setSelectedTab('emergency-contact')}
                    >
                        Emergency Contact
                    </button>
                    <button className="btn btn-danger mb-2" onClick={logout}>
                        Logout
                    </button>
                </div>
            </div>

            <div className="result-container">{renderContent()}</div>
        </>
    );
};

export default Dashboard;
