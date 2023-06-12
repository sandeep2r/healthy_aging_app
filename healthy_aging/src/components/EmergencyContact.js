import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';
import AddEmergencyContact from './AddEmergencyContact';
import EditEmergencyContact from './EditEmergencyContact';

const EmergencyContact = () => {
    const userService = UserService;
    const navigate = useNavigate();

    const [emergencyContacts, setEmergencyContacts] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [editEmergencyContactId, setEditEmergencyContactId] = useState(null);

    useEffect(() => {
        fetchEmergencyContacts();
    }, []);

    const fetchEmergencyContacts = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const userId = user.id;
            const response = await userService.getEmergencyContactByUserId(userId);
            setEmergencyContacts(response.data);
        } catch (error) {
            console.error('Error fetching emergency contacts:', error);
        }
    };

    const handleAddEmergencyContact = () => {
        setShowAddForm(true);
    };

    const handleEditEmergencyContact = (emergencyContactId) => {
        setEditEmergencyContactId(emergencyContactId);
        setShowEditForm(true);
    };

    const handleDeleteEmergencyContact = async (emergencyContactId) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const userId = user.id;
            await userService.deleteEmergencyContact(userId, emergencyContactId);
            fetchEmergencyContacts(); // Fetch the updated list of emergency contacts
        } catch (error) {
            console.error('Error deleting emergency contact:', error);
        }
    };

    const handleCloseForm = () => {
        setShowAddForm(false);
        setShowEditForm(false);
        setEditEmergencyContactId(null);
    };

    const handleCallEmergencyContact = (phoneNumber) => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <div className="container">
            <h1>Emergency Contacts</h1>
            <button className="btn btn-primary" onClick={handleAddEmergencyContact}>
                Add Emergency Contact
            </button>

            {showAddForm && <AddEmergencyContact onClose={handleCloseForm} fetchEmergencyContacts={fetchEmergencyContacts} />}

            {showEditForm && editEmergencyContactId && (
                <EditEmergencyContact
                    emergencyContactId={editEmergencyContactId}
                    onClose={handleCloseForm}
                    fetchEmergencyContacts={fetchEmergencyContacts}
                />
            )}

            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {emergencyContacts.length > 0 ? (
                        emergencyContacts.map((emergencyContact) => (
                            <tr key={emergencyContact.id}>
                                <td>{emergencyContact.name}</td>
                                <td>{emergencyContact.phoneNumber}</td>
                                <td>
                                    <button
                                        className="btn btn-primary mr-2"
                                        onClick={() => handleEditEmergencyContact(emergencyContact.id)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger mr-2"
                                        onClick={() => handleDeleteEmergencyContact(emergencyContact.id)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => handleCallEmergencyContact(emergencyContact.phoneNumber)}
                                    >
                                        Call
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No emergency contacts found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default EmergencyContact;
