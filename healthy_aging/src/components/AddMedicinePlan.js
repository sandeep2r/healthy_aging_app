import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';

const AddMedicinePlan = ({ onClose, fetchMedicinePlans }) => {
    const userService = UserService;
    const navigate = useNavigate();

    const [medicinePlan, setMedicinePlan] = useState({
        days: '',
        breakfast: '',
        lunch: '',
        dinner: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMedicinePlan((prevMedicinePlan) => ({
            ...prevMedicinePlan,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const userId = user.id;
            await userService.createMedicinePlan(userId, medicinePlan);
            fetchMedicinePlans(); // Fetch the updated list of medicine plans
            onClose(); // Close the add medicine plan form
            navigate('/medicine-plan'); // Navigate to the medicine plans page
        } catch (error) {
            console.error('Error adding medicine plan:', error);
        }
    };

    return (
        <div className="container">
            <h2>Add Medicine Plan</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Days</label>
                    <select
                        name="days"
                        value={medicinePlan.days}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                    >
                        <option value="">Select a day</option>
                        <option value="Sunday">Sunday</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Breakfast</label>
                    <input
                        type="text"
                        name="breakfast"
                        value={medicinePlan.breakfast}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Lunch</label>
                    <input
                        type="text"
                        name="lunch"
                        value={medicinePlan.lunch}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Dinner</label>
                    <input
                        type="text"
                        name="dinner"
                        value={medicinePlan.dinner}
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

export default AddMedicinePlan;
