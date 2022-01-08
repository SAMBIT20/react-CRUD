import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { addStudent } from "../Service/api";
import { useNavigate } from "react-router";

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

const AddStudent = () => {
  const [student, setStudent] = useState(initilStudents);
  const { name, username, email, phone } = student;
  const classes = useStyle();
  const history = useNavigate();

  const onVlaueChange = (e) => {
    console.log(e.target.value);
    setStudent({ ...student, [e.target.name]: e.target.value });
    console.log(student);
  };

  const addStudentDetails = async () => {
    history("/");
    await addStudent(student);
  };

  return (
    <div>
      <FormGroup className={classes.container}>
        <Typography variant="h4">Add New Student</Typography>
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
        <Button className={classes.button} onClick={() => addStudentDetails()}>
          Add Student
        </Button>
      </FormGroup>
    </div>
  );
};

export default AddStudent;
