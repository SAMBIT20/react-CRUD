import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { editStudent, getStudents } from "../Service/api";
import { useNavigate, useParams } from "react-router";

const useStyle = makeStyles({
  container: {
    width: "30%",
    margin: "5% 0 0 35%",
    "& > *": {
      marginTop: "20px",
    },
    border: "2px solid gray",
    padding: "15px",
    borderRadius: "5px",
  },
  button: {
    background: "#0088ff  !important",
    color: "white",
  },
});

const initilStudents = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditStudent = () => {
  const [student, setStudent] = useState(initilStudents);
  const { name, username, email, phone } = student;
  const { id } = useParams();
  const classes = useStyle();
  const history = useNavigate();

  useEffect(() => {
    loadStudentData();
  }, []);

  const loadStudentData = async () => {
    const response = await getStudents(id);
    setStudent(response.data);
  };
  const onVlaueChange = (e) => {
    console.log(e.target.value);
    setStudent({ ...student, [e.target.name]: e.target.value });
    console.log(student);
  };

  const editStudentDetails = async () => {
    await editStudent(id, student);
    history("/");
  };

  return (
    <div>
      <FormGroup className={classes.container}>
        <Typography variant="h4">Edit Student</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onVlaueChange(e)} name="name" value={name} />
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input
            onChange={(e) => onVlaueChange(e)}
            name="username"
            value={username}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            onChange={(e) => onVlaueChange(e)}
            name="email"
            value={email}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input
            onChange={(e) => onVlaueChange(e)}
            name="phone"
            value={phone}
          />
        </FormControl>
        <Button className={classes.button} onClick={() => editStudentDetails()}>
          Edit Student
        </Button>
      </FormGroup>
    </div>
  );
};

export default EditStudent;
