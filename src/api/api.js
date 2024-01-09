import axios from "axios";

const baseURL = "https://money-manager-2a22.onrender.com/";

export const getAllIncome = async () => {
    try {
        const res = await axios.get(`${baseURL}income/get`);
        return res.data;
    } catch (error) {
        return null;
    }
};

export const getAllExpense = async () => {
    try {
        const res = await axios.get(`${baseURL}expense/get`);
        return res.data;
    } catch (error) {
        return null;
    }
};

export const addIncome = async (formData) => {
    try {
        const res = await axios.post(`${baseURL}income/post`, formData);
        return res.data.income;
    } catch (error) {
        console.error("Error adding income:", error);
        throw error;
        
    }
};

export const addExpense = async (formData) => {
    try {
        const res = await axios.post(`${baseURL}expense/post`, formData);
        return res.data.expense;
    } catch (error) {
        console.error("Error adding expense:", error);
        throw error;
    }
};