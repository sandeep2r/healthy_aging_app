import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddHospital from './AddHospital';
import EditHospital from './EditHospital';
import UserService from '../service/UserService';

const Hospitals = () => {
    const userService = UserService;
    const [hospitals, setHospitals] = useState([]);
    const [showAddHospital, setShowAddHospital] = useState(false);
    const [showEditHospital, setShowEditHospital] = useState(false);
    const [editHospitalId, setEditHospitalId] = useState(null);

    useEffect(() => {
        fetchHospitals();
    }, []);

    const fetchHospitals = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const userId = user.id;
            const response = await userService.getUserHospitalsByUserId(userId);
            setHospitals(response.data);
        } catch (error) {
            console.error('Error fetching hospitals:', error);
        }
    };

    const deleteHospital = async (hospitalId) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const userId = user.id;
            await userService.deleteHospital(userId, hospitalId);
            fetchHospitals();
        } catch (error) {
            console.error('Error deleting hospital:', error);
        }
    };

    const handleAddHospital = () => {
        setShowAddHospital(true);
    };

    const handleAddHospitalClose = () => {
        setShowAddHospital(false);
    };

    const handleEditHospital = (hospitalId) => {
        setEditHospitalId(hospitalId);
        setShowEditHospital(true);
    };

    const handleCallHospitalContact = (contact) => {
        window.location.href = `tel:${contact}`;
    };


    const handleEditHospitalClose = () => {
        setShowEditHospital(false);
    };

    return (
        <div className="container mt-4">
            <h2>Hospitals</h2>

            {!showAddHospital && (
                <button onClick={handleAddHospital} className="btn btn-primary mb-2">
                    Add Hospital
                </button>
            )}
            {showAddHospital ? (
                <AddHospital onClose={handleAddHospitalClose} fetchHospitals={fetchHospitals} />
            ) : (
                <React.Fragment>
                    {showEditHospital && (
                        <EditHospital
                            hospitalId={editHospitalId}
                            onClose={handleEditHospitalClose}
                            fetchHospitals={fetchHospitals}
                        />
                    )}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Contact</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hospitals.map((hospital) => (
                                <tr key={hospital.id}>
                                    <td>{hospital.name}</td>
                                    <td>{hospital.address}</td>
                                    <td>{hospital.contact}</td>
                                    <td>
                                        <button onClick={() => handleEditHospital(hospital.id)} className="btn btn-secondary mr-2">
                                            Edit
                                        </button>
                                        <button onClick={() => deleteHospital(hospital.id)} className="btn btn-danger mr-2">
                                            Delete
                                        </button>
                                        <button
                                            className="btn btn-success"
                                            onClick={() => handleCallHospitalContact(hospital.contact)}
                                        >
                                            Call
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </React.Fragment>
            )}
        </div>
    );
};

export default Hospitals;
