import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Conteiner } from "../styles";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const NewContainer = styled(Conteiner)`
  flex-direction: column;
`;
const Title = styled("h1")`
  margin: 0;
  margin-bottom: 36px;
  color: #fff;
  font-size: 32px;
  text-align: center;
`;
const StudentsContainer = styled.div`
  margin: 0 auto;
  width: 80%;
`;
const StudentContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  color: #acacac;
  background-color: #202020;
  font-size: 20px;
  font-weight: bold;
`;
const StudentsCardWrapper = styled.div` 
  height: 500px;
  overflow-y: auto;
`;

function User({ setStudentUpdate }) {
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    const { data } = await axios.get(`/api/students`);
    setStudents(data);
  };

  useEffect(() => {
    getStudents();
  }, []);
  return (
    <NewContainer>
      <Title>Listado de estudiantes</Title>
      <StudentsContainer>
        <StudentContainerTitle>
          <p>Nombre</p>
          <p>Nacimiento</p>
          <p>Carrera</p>
          <p>Porcentaje</p>
          <div>Acciones</div>
        </StudentContainerTitle>
        <StudentsCardWrapper>
          {students.map((student, index) => (
            <StudentCard
              {...{ student, getStudents, setStudentUpdate, index }}
              key={student._id}
            />
          ))}
        </StudentsCardWrapper>
      </StudentsContainer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </NewContainer>
  );
}

const StudentCardWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  background-color: ${({ index }) => (index % 2 === 0 ? "#404340" : "#2E302E")};
  color: #eaf4f4;
`;
const Button = styled.button`
  border: none;
  width: 100px;
  height: 36px;
  font-size: 16px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    background-color: #17c3b2;
  }
`;
const ButtonUpdate = styled(Button)`
  background-color: #023e7d;
`;
const ButtonDelete = styled(Button)`
  background-color: #f25c54;
`;

function StudentCard({ student, getStudents, setStudentUpdate, index }) {
  const { _id: id, name, lastname, birthdate, carrera, average } = student;

  const navigate = useNavigate();

  // delete student
  const handleDeleteStudent = async () => {
    if (confirm("Esta seguro de eliminar este estudiante?")) {
      await axios.delete(`/api/student/${id}`);
      getStudents();
      toast.success("Estudiante borrado correctamente!");
    }
  };

  // update student
  const handleUpdateStudent = async () => {
    setStudentUpdate(student);
    navigate("/crear-estudiante");
  };

  return (
    <StudentCardWrapper index={index}>
      <p>
        {name} {lastname}
      </p>
      <p>{birthdate}</p>
      <p>{carrera}</p>
      <p>{average}</p>
      <div>
        <ButtonDelete
          style={{ marginRight: "10px" }}
          onClick={handleDeleteStudent}
        >
          Borrar
        </ButtonDelete>
        <ButtonUpdate onClick={handleUpdateStudent}>Actualizar</ButtonUpdate>
      </div>
    </StudentCardWrapper>
  );
}

export default User;
