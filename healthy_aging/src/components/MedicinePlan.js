import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddMedicinePlan from './AddMedicinePlan';
import EditMedicinePlan from './EditMedicinePlan';
import UserService from '../service/UserService';

const MedicinePlan = () => {
    const userService = UserService;
    const [medicinePlans, setMedicinePlans] = useState([]);
    const [showAddMedicinePlan, setShowAddMedicinePlan] = useState(false);
    const [showEditMedicinePlan, setShowEditMedicinePlan] = useState(false);
    const [editMedicinePlanId, setEditMedicinePlanId] = useState(null);

    useEffect(() => {
        fetchMedicinePlans();
    }, []);

    const fetchMedicinePlans = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const userId = user.id;
            const response = await userService.getMedicinePlanByUserId(userId);
            setMedicinePlans(response.data);
        } catch (error) {
            console.error('Error fetching medicine plans:', error);
        }
    };

    const deleteMedicinePlan = async (medicinePlanId) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const userId = user.id;
            await userService.deleteMedicinePlan(userId, medicinePlanId);
            fetchMedicinePlans();
        } catch (error) {
            console.error('Error deleting medicine plan:', error);
        }
    };

    const handleAddMedicinePlan = () => {
        setShowAddMedicinePlan(true);
    };

    const handleAddMedicinePlanClose = () => {
        setShowAddMedicinePlan(false);
    };

    const handleEditMedicinePlan = (medicinePlanId) => {
        setEditMedicinePlanId(medicinePlanId);
        setShowEditMedicinePlan(true);
    };

    const handleEditMedicinePlanClose = () => {
        setShowEditMedicinePlan(false);
    };

    return (
        <div className="container mt-4">
            <h2>Medicine Plans</h2>

            {!showAddMedicinePlan && (
                <button onClick={handleAddMedicinePlan} className="btn btn-primary mb-2">
                    Add Medicine Plan
                </button>
            )}
            {showAddMedicinePlan ? (
                <AddMedicinePlan onClose={handleAddMedicinePlanClose} fetchMedicinePlans={fetchMedicinePlans} />
            ) : (
                <React.Fragment>
                    {showEditMedicinePlan && (
                        <EditMedicinePlan
                            medicinePlanId={editMedicinePlanId}
                            onClose={handleEditMedicinePlanClose}
                            fetchMedicinePlans={fetchMedicinePlans}
                        />
                    )}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Day</th>
                                <th>Breakfast</th>
                                <th>Lunch</th>
                                <th>Dinner</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medicinePlans.map((medicinePlan) => (
                                <tr key={medicinePlan.id}>
                                    <td>{medicinePlan.days}</td>
                                    <td>{medicinePlan.breakfast}</td>
                                    <td>{medicinePlan.lunch}</td>
                                    <td>{medicinePlan.dinner}</td>
                                    <td>
                                        <button
                                            onClick={() => handleEditMedicinePlan(medicinePlan.id)}
                                            className="btn btn-secondary mr-2"
                                        >
                                            Edit
                                        </button>
                                        <button onClick={() => deleteMedicinePlan(medicinePlan.id)} className="btn btn-danger">
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

export default MedicinePlan;
