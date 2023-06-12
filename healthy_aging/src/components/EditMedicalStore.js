import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../service/UserService';

const EditMedicalStore = ({ medicalStoreId, onClose, fetchMedicalStores }) => {
    const userService = UserService;
    const { userId } = useParams();

    const [medicalStore, setMedicalStore] = useState({
        name: '',
        address: '',
        contact: '',
    });

    useEffect(() => {
        loadMedicalStore();
    }, []);

    const loadMedicalStore = async () => {
        try {
            const response = await userService.getMedicalStoreById(userId, medicalStoreId);
            const loadedMedicalStore = response.data;
            setMedicalStore({
                name: loadedMedicalStore.name,
                address: loadedMedicalStore.address,
                contact: loadedMedicalStore.contact,
            });
        } catch (error) {
            console.error('Error loading medical store:', error);
        }
    };

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
            await userService.updateMedicalStore(userId, medicalStoreId, medicalStore);
            fetchMedicalStores(); // Fetch the updated list of medical stores
            onClose(); // Close the edit medical store form
        } catch (error) {
            console.error('Error updating medical store:', error);
        }
    };

    return (
        <div className="container">
            <h2>Edit Medical Store</h2>
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
                    Update
                </button>
                <button onClick={onClose} className="btn btn-secondary ml-2">
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default EditMedicalStore;
