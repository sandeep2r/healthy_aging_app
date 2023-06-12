import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';

const AddHospital = ({ onClose, fetchHospitals }) => {
    const userService = UserService;
    const navigate = useNavigate();

    const [hospital, setHospital] = useState({
        name: '',
        address: '',
        contact: '',
    });

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
            const user = JSON.parse(localStorage.getItem('user'));
            const userId = user.id;
            await userService.createHospital(userId, hospital);
            fetchHospitals(); // Fetch the updated list of hospitals
            onClose(); // Close the add hospital form
            navigate('/hospitals'); // Navigate to the hospitals page
        } catch (error) {
            console.error('Error adding hospital:', error);
        }
    };

    return (
        <div className="container">
            <h2>Add Hospital</h2>
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
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddHospital;
