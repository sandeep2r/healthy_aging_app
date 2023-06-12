import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../service/UserService';

const EditEmergencyContact = ({ emergencyContactId, onClose, fetchEmergencyContacts }) => {
    const userService = UserService;
    const { userId } = useParams();

    const [emergencyContact, setEmergencyContact] = useState({
        name: '',
        phoneNumber: '',
    });

    useEffect(() => {
        loadEmergencyContact();
    }, []);

    const loadEmergencyContact = async () => {
        try {
            const response = await userService.getEmergencyContactById(userId, emergencyContactId);
            const loadedEmergencyContact = response.data;
            setEmergencyContact({
                name: loadedEmergencyContact.name,
                phoneNumber: loadedEmergencyContact.phoneNumber,
            });
        } catch (error) {
            console.error('Error loading emergency contact:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEmergencyContact((prevEmergencyContact) => ({
            ...prevEmergencyContact,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await userService.updateEmergencyContact(userId, emergencyContactId, emergencyContact);
            fetchEmergencyContacts(); // Fetch the updated list of emergency contacts
            onClose(); // Close the edit emergency contact form
        } catch (error) {
            console.error('Error updating emergency contact:', error);
        }
    };

    return (
        <div className="container">
            <h2>Edit Emergency Contact</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={emergencyContact.name}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={emergencyContact.phoneNumber}
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

export default EditEmergencyContact;
