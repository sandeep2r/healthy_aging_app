import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../service/UserService';

const EditDietPlan = ({ dietPlanId, onClose, fetchDietPlans }) => {
    const userService = UserService;
    const { userId } = useParams();

    const [dietPlan, setDietPlan] = useState({
        days: '',
        breakfast: '',
        lunch: '',
        dinner: '',
    });

    useEffect(() => {
        loadDietPlan();
    }, []);

    const loadDietPlan = async () => {
        try {
            const response = await userService.getDietPlanById(userId, dietPlanId);
            const loadedDietPlan = response.data;
            setDietPlan({
                days: loadedDietPlan.days,
                breakfast: loadedDietPlan.breakfast,
                lunch: loadedDietPlan.lunch,
                dinner: loadedDietPlan.dinner,
            });
        } catch (error) {
            console.error('Error loading diet plan:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDietPlan((prevDietPlan) => ({
            ...prevDietPlan,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await userService.updateDietPlan(userId, dietPlanId, dietPlan);
            fetchDietPlans();
            onClose();
        } catch (error) {
            console.error('Error updating diet plan:', error);
        }
    };

    return (
        <div className="container">
            <h2>Edit Diet Plan</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Days</label>
                    <input
                        type="text"
                        name="days"
                        value={dietPlan.days}
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
                        value={dietPlan.breakfast}
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
                        value={dietPlan.lunch}
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
                        value={dietPlan.dinner}
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

export default EditDietPlan;
