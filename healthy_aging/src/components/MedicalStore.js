import React, { useState, useEffect } from 'react';

import UserService from '../service/UserService';
import AddMedicalStore from './AddMedicalStore';
import EditMedicalStore from './EditMedicalStore';

const MedicalStore = () => {
    const userService = UserService;


    const [medicalStores, setMedicalStores] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [editMedicalStoreId, setEditMedicalStoreId] = useState(null);

    useEffect(() => {
        fetchMedicalStores();
    }, []);

    const fetchMedicalStores = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const userId = user.id;
            const response = await userService.getMedicalStoreByUserId(userId);
            setMedicalStores(response.data);
        } catch (error) {
            console.error('Error fetching medical stores:', error);
        }
    };

    const handleAddMedicalStore = () => {
        setShowAddForm(true);
    };

    const handleEditMedicalStore = (medicalStoreId) => {
        setEditMedicalStoreId(medicalStoreId);
        setShowEditForm(true);
    };

    const handleDeleteMedicalStore = async (medicalStoreId) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const userId = user.id;
            await userService.deleteMedicalStore(userId, medicalStoreId);
            fetchMedicalStores(); // Fetch the updated list of medical stores
        } catch (error) {
            console.error('Error deleting medical store:', error);
        }
    };

    const handleCallMedicalStoreContact = (contact) => {
        window.location.href = `tel:${contact}`;
    };

    const handleCloseForm = () => {
        setShowAddForm(false);
        setShowEditForm(false);
        setEditMedicalStoreId(null);
    };

    return (
        <div className="container">
            <h1>Medical Stores</h1>
            <button className="btn btn-primary" onClick={handleAddMedicalStore}>
                Add Medical Store
            </button>

            {showAddForm && (
                <AddMedicalStore onClose={handleCloseForm} fetchMedicalStores={fetchMedicalStores} />
            )}

            {showEditForm && editMedicalStoreId && (
                <EditMedicalStore
                    medicalStoreId={editMedicalStoreId}
                    onClose={handleCloseForm}
                    fetchMedicalStores={fetchMedicalStores}
                />
            )}

            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Contact</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {medicalStores.map((medicalStore) => (
                        <tr key={medicalStore.id}>
                            <td>{medicalStore.name}</td>
                            <td>{medicalStore.address}</td>
                            <td>{medicalStore.contact}</td>
                            <td>
                                <button
                                    className="btn btn-primary mr-2"
                                    onClick={() => handleEditMedicalStore(medicalStore.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger mr-2"
                                    onClick={() => handleDeleteMedicalStore(medicalStore.id)}
                                >
                                    Delete
                                </button>
                                <button
                                    className="btn btn-success"
                                    onClick={() => handleCallMedicalStoreContact(medicalStore.contact)}
                                >
                                    Call
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MedicalStore;
