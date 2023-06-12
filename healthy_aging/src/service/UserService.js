import axios from 'axios';

const BASE_API_URL = 'http://localhost:8080/users';

class UserService {
    createUser(user) {
        return axios.post(`${BASE_API_URL}/save`, user);
    }

    getUserById(id) {
        return axios.get(`${BASE_API_URL}/${id}`);
    }

    getAllUsers() {
        return axios.get(`${BASE_API_URL}/list`);
    }

    updateUser(id, user) {
        return axios.put(`${BASE_API_URL}/${id}`, user);
    }

    deleteUser(id) {
        return axios.delete(`${BASE_API_URL}/${id}`);
    }

    // DietPlan CRUD operations

    createDietPlan(userId, dietPlan) {
        return axios.post(`${BASE_API_URL}/${userId}/diet-plans`, dietPlan);
    }

    getDietPlansByUserId(userId) {
        return axios.get(`${BASE_API_URL}/${userId}/diet-plans`);
    }

    getDietPlanById(userId, dietPlanId) {
        return axios.get(`${BASE_API_URL}/${userId}/diet-plans/${dietPlanId}`);
    }

    updateDietPlan(userId, dietPlanId, dietPlan) {
        return axios.put(`${BASE_API_URL}/${userId}/diet-plans/${dietPlanId}`, dietPlan);
    }

    deleteDietPlan(userId, dietPlanId) {
        return axios.delete(`${BASE_API_URL}/${userId}/diet-plans/${dietPlanId}`);
    }

    // MedicinePlan CRUD operations

    createMedicinePlan(userId, medicinePlan) {
        return axios.post(`${BASE_API_URL}/${userId}/medicine-plans`, medicinePlan);
    }

    getMedicinePlanByUserId(userId) {
        return axios.get(`${BASE_API_URL}/${userId}/medicine-plans`);
    }
    getMedicinePlanById(userId, medicinePlanId) {
        return axios.get(`${BASE_API_URL}/${userId}/medicine-plans/${medicinePlanId}`);
    }

    updateMedicinePlan(userId, medicinePlanId, medicinePlan) {
        return axios.put(`${BASE_API_URL}/${userId}/medicine-plans/${medicinePlanId}`, medicinePlan);
    }

    deleteMedicinePlan(userId, medicinePlanId) {
        return axios.delete(`${BASE_API_URL}/${userId}/medicine-plans/${medicinePlanId}`);
    }

    // Hospital CRUD operations

    createHospital(userId, hospital) {
        return axios.post(`${BASE_API_URL}/${userId}/hospitals`, hospital);
    }

    getUserHospitalsByUserId(userId) {
        return axios.get(`${BASE_API_URL}/${userId}/hospitals`);

    }

    getHospitalById(userId, hospitalId) {
        return axios.get(`${BASE_API_URL}/${userId}/hospitals/${hospitalId}`);
    }

    updateHospital(userId, hospitalId, hospital) {
        return axios.put(`${BASE_API_URL}/${userId}/hospitals/${hospitalId}`, hospital);
    }

    deleteHospital(userId, hospitalId) {
        return axios.delete(`${BASE_API_URL}/${userId}/hospitals/${hospitalId}`);
    }

    // MedicalStore CRUD operations

    createMedicalStore(userId, medicalStore) {
        return axios.post(`${BASE_API_URL}/${userId}/medical-stores`, medicalStore);
    }
    getMedicalStoreByUserId(userId) {
        return axios.get(`${BASE_API_URL}/${userId}/medical-stores`);

    }
    getMedicalStoreById(userId, medicalStoreId) {
        return axios.get(`${BASE_API_URL}/${userId}/medical-stores/${medicalStoreId}`);
    }

    updateMedicalStore(userId, medicalStoreId, medicalStore) {
        return axios.put(`${BASE_API_URL}/${userId}/medical-stores/${medicalStoreId}`, medicalStore);
    }

    deleteMedicalStore(userId, medicalStoreId) {
        return axios.delete(`${BASE_API_URL}/${userId}/medical-stores/${medicalStoreId}`);
    }

    // EmergencyContact CRUD operations

    createEmergencyContact(userId, emergencyContact) {
        return axios.post(`${BASE_API_URL}/${userId}/emergency-contacts`, emergencyContact);
    }

    getEmergencyContactByUserId(userId) {
        return axios.get(`${BASE_API_URL}/${userId}/emergency-contacts`);

    }

    getEmergencyContactById(userId, emergencyContactId) {
        return axios.get(`${BASE_API_URL}/${userId}/emergency-contacts/${emergencyContactId}`);
    }

    updateEmergencyContact(userId, emergencyContactId, emergencyContact) {
        return axios.put(`${BASE_API_URL}/${userId}/emergency-contacts/${emergencyContactId}`, emergencyContact);
    }

    deleteEmergencyContact(userId, emergencyContactId) {
        return axios.delete(`${BASE_API_URL}/${userId}/emergency-contacts/${emergencyContactId}`);
    }
}

export default new UserService();
