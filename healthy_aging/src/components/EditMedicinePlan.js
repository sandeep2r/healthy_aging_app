import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../service/UserService';

const EditMedicinePlan = ({ medicinePlanId, onClose, fetchMedicinePlans }) => {
    const userService = UserService;
    const { userId } = useParams();

    const [medicinePlan, setMedicinePlan] = useState({
        days: '',
        breakfast: '',
        lunch: '',
        dinner: '',
    });

    useEffect(() => {
        loadMedicinePlan();
    }, []);

    const loadMedicinePlan = async () => {
        try {
            const response = await userService.getMedicinePlanById(userId, medicinePlanId);
            const loadedMedicinePlan = response.data;
            setMedicinePlan({
                days: loadedMedicinePlan.days,
                breakfast: loadedMedicinePlan.breakfast,
                lunch: loadedMedicinePlan.lunch,
                dinner: loadedMedicinePlan.dinner,
            });
        } catch (error) {
            console.error('Error loading medicine plan:', error);
        }
    };

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
            await userService.updateMedicinePlan(userId, medicinePlanId, medicinePlan);
            fetchMedicinePlans();
            onClose();
        } catch (error) {
            console.error('Error updating medicine plan:', error);
        }
    };

    return (
        <div className="container">
            <h2>Edit Medicine Plan</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Day</label>
                    <input
                        type="text"
                        name="days"
                        value={medicinePlan.days}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                    />
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
                    Update
                </button>
                <button onClick={onClose} className="btn btn-secondary ml-2">
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default EditMedicinePlan;
