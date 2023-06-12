import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddDietPlan from './AddDietPlan';
import EditDietPlan from './EditDietPlan';
import UserService from '../service/UserService';

const DietPlan = () => {
    const userService = UserService;
    const [dietPlans, setDietPlans] = useState([]);
    const [showAddDietPlan, setShowAddDietPlan] = useState(false);
    const [showEditDietPlan, setShowEditDietPlan] = useState(false);
    const [editDietPlanId, setEditDietPlanId] = useState(null);

    useEffect(() => {
        fetchDietPlans();
    }, []);

    const fetchDietPlans = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const userId = user.id;
            const response = await userService.getDietPlansByUserId(userId);
            setDietPlans(response.data);
        } catch (error) {
            console.error('Error fetching diet plans:', error);
        }
    };

    const deleteDietPlan = async (dietPlanId) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const userId = user.id;
            await userService.deleteDietPlan(userId, dietPlanId);
            fetchDietPlans();
        } catch (error) {
            console.error('Error deleting diet plan:', error);
        }
    };

    const handleAddDietPlan = () => {
        setShowAddDietPlan(true);
    };

    const handleAddDietPlanClose = () => {
        setShowAddDietPlan(false);
    };

    const handleEditDietPlan = (dietPlanId) => {
        setEditDietPlanId(dietPlanId);
        setShowEditDietPlan(true);
    };

    const handleEditDietPlanClose = () => {
        setShowEditDietPlan(false);
    };

    return (
        <div className="container mt-4">
            <h2>Diet Plans</h2>

            {!showAddDietPlan && (
                <button onClick={handleAddDietPlan} className="btn btn-primary mb-2">
                    Add Diet Plan
                </button>
            )}
            {showAddDietPlan ? (
                <AddDietPlan onClose={handleAddDietPlanClose} fetchDietPlans={fetchDietPlans} />
            ) : (
                <React.Fragment>
                    {showEditDietPlan && (
                        <EditDietPlan
                            dietPlanId={editDietPlanId}
                            onClose={handleEditDietPlanClose}
                            fetchDietPlans={fetchDietPlans}
                        />
                    )}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Days</th>
                                <th>Breakfast</th>
                                <th>Lunch</th>
                                <th>Dinner</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dietPlans.map((dietPlan) => (
                                <tr key={dietPlan.id}>
                                    <td>{dietPlan.days}</td>
                                    <td>{dietPlan.breakfast}</td>
                                    <td>{dietPlan.lunch}</td>
                                    <td>{dietPlan.dinner}</td>
                                    <td>
                                        <button
                                            onClick={() => handleEditDietPlan(dietPlan.id)}
                                            className="btn btn-secondary mr-2"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deleteDietPlan(dietPlan.id)}
                                            className="btn btn-danger"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </React.Fragment>
            )}
        </div>
    );
};

export default DietPlan;
