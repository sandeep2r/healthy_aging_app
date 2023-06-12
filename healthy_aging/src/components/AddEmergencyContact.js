import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';

const AddEmergencyContact = ({ onClose, fetchEmergencyContacts }) => {
    const userService = UserService;
    const navigate = useNavigate();

    const [emergencyContact, setEmergencyContact] = useState({
        name: '',
        phoneNumber: '',
    });

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
            const user = JSON.parse(localStorage.getItem('user'));
            const userId = user.id;
            await userService.createEmergencyContact(userId, emergencyContact);
            fetchEmergencyContacts(); // Fetch the updated list of emergency contacts
            onClose(); // Close the add emergency contact form
            navigate('/emergency-contacts'); // Navigate to the emergency contacts page
        } catch (error) {
            console.error('Error adding emergency contact:', error);
        }
    };

    return (
        <div className="container">
            <h2>Add Emergency Contact</h2>
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
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddEmergencyContact;
