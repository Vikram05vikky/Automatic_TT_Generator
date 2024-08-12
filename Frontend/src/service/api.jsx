import axios from "axios";

const baseURL = 'http://localhost:8080'

const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const SignUp = (name, email, password,role) => axiosInstance.post('api/v1/auth/register', { name, email, password,role });
// const fetchClass = ()=>axiosInstance.get('/classes/getclasses');
// const getStaff=()=>axiosInstance.get('/users/getusers');

const fetchClasses = () => axiosInstance.get('/classes/getclasses');
const addClass = (classData) => axiosInstance.post('/classes/add', classData);
const editClass = (id, classData) => axiosInstance.put(`/classes/edit/${id}`, classData);
const deleteClass = (id) => axiosInstance.delete(`/classes/delete/${id}`);

const fetchSubjects = () => axiosInstance.get('/subs/getsubs');
const addSubject = (subjectData) => axiosInstance.post('/subs/add', subjectData);
const editSubject = (id, subjectData) => axiosInstance.put(`/subs/update/${id}`, subjectData);
const deleteSubject = (id) => axiosInstance.delete(`/subs/delete/${id}`);

const getStaff = () => axiosInstance.get('/users/getusers');
const editStaff = (id, staffData) => axiosInstance.put(`/users/edit/${id}`, staffData);
const deleteStaff = (id) => axiosInstance.delete(`/users/delete/${id}`);

export {axiosInstance,SignUp, fetchClasses, addClass, editClass, deleteClass,getStaff,fetchSubjects,addSubject,editSubject,deleteSubject,editStaff,deleteStaff}
