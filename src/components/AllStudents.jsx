import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { getStudents, deleteStudentDe } from "../Service/api";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "& > *": {
      background: "#0088ff",
      color: "white",
      fontSize: "18px",
    },
  },
});

const AllStudents = () => {
  const classes = useStyle();
  const [student, setStudent] = useState([]);

  useEffect(() => {
    getStudent();
  }, []);

  const getStudent = async () => {
    const response = await getStudents();
    setStudent(response.data);
  };

  const deleteStudent = async (id) => {
    await deleteStudentDe(id);
    getStudent();
  };

  return (
    <div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>Student Id</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {student.map((stu) => (
            <TableRow>
              <TableCell>{stu.id}</TableCell>
              <TableCell>{stu.username}</TableCell>
              <TableCell>{stu.name}</TableCell>
              <TableCell>{stu.email}</TableCell>
              <TableCell>{stu.phone}</TableCell>
              <TableCell>
                <Button color="primary" component={Link} to={`/edit/${stu.id}`}>
                  <i class="bx bx-edit"></i>
                </Button>
                <Button color="secondary" onClick={() => deleteStudent(stu.id)}>
                  <i class="bx bxs-trash-alt"></i>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllStudents;
