import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../service/UserService';

const EditHospital = ({ hospitalId, onClose, fetchHospitals }) => {
    const userService = UserService;
    const { userId } = useParams();

    const [hospital, setHospital] = useState({
        name: '',
        address: '',
        contact: '',
    });

    useEffect(() => {
        loadHospital();
    }, []);

    const loadHospital = async () => {
        try {
            const response = await userService.getHospitalById(userId, hospitalId);
            const loadedHospital = response.data;
            setHospital({
                name: loadedHospital.name,
                address: loadedHospital.address,
                contact: loadedHospital.contact,
            });
        } catch (error) {
            console.error('Error loading hospital:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setHospital((prevHospital) => ({
            ...prevHospital,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await userService.updateHospital(userId, hospitalId, hospital);
            fetchHospitals();
            onClose();
        } catch (error) {
            console.error('Error updating hospital:', error);
        }
    };

    return (
        <div className="container">
            <h2>Edit Hospital</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={hospital.name}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={hospital.address}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contact</label>
                    <input
                        type="text"
                        name="contact"
                        value={hospital.contact}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Update
                </button>
                <button onClick={onClose} className="btn btn-secondary ml-2">
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default EditHospital;
