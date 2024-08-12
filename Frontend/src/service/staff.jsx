// api.jsx
import axios from 'axios';

// Create an instance of axios with base URL
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/users', // Adjust this to match your Spring Boot backend URL
});

export const getStaff = async () => {
  try {
    const response = await axiosInstance.get('/getusers');
    return response.data;
  } catch (error) {
    console.error('Error fetching staff:', error);
    throw error;
  }
};



export const deleteStaff = async (sid) => {
  try {
    await axiosInstance.delete(`/delete/${sid}`);
  } catch (error) {
    console.error('Error deleting staff:', error);
    throw error;
  }
};

export const editStaff = async (sid, staff) => {
  try {
    const response = await axiosInstance.put(`/edit/${sid}`, staff);
    return response.data;
  } catch (error) {
    console.error('Error editing staff:', error);
    throw error;
  }
};
