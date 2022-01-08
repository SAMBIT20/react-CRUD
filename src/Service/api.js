import axios from "axios";

const url = "http://localhost:8000/students";

export const getStudents = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};

export const addStudent = async (student) => {
  return await axios.post(url, student);
};

export const editStudent = async (id, student) => {
  return await axios.put(`${url}/${id}`, student);
};

export const deleteStudentDe = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
