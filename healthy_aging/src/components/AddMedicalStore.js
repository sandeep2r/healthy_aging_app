import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';

const AddMedicalStore = ({ onClose, fetchMedicalStores }) => {
    const userService = UserService;
    const navigate = useNavigate();

    const [medicalStore, setMedicalStore] = useState({
        name: '',
        address: '',
        contact: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMedicalStore((prevMedicalStore) => ({
            ...prevMedicalStore,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const userId = user.id;
            await userService.createMedicalStore(userId, medicalStore);
            fetchMedicalStores(); // Fetch the updated list of medical stores
            onClose(); // Close the add medical store form
            navigate('/medical-stores'); // Navigate to the medical stores page
        } catch (error) {
            console.error('Error adding medical store:', error);
        }
    };

    return (
        <div className="container">
            <h2>Add Medical Store</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={medicalStore.name}
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
                        value={medicalStore.address}
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
                        value={medicalStore.contact}
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

export default AddMedicalStore;
