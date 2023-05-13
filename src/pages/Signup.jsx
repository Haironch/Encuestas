import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Conteiner } from "../styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast  } from "react-toastify";


const Formstyled = styled(Form)`
  width: 450px;
  height: auto;
  background-color: #202020;
  padding: 32px 48px;
  box-shadow: 0 5px 15px 0px;
`;
const TitleForm = styled.h2`
  margin: 0;
  margin-bottom: 36px;
  color: #fff;
  font-size: 32px;
  text-align: center;
`;
const InputContainer = styled.div`
  margin-bottom: 32px;
  
`;
const Input = styled(Field)`
  width: 100%;
  height: 36px;
  font-size: 20px;
  text-indent: 4px;
`
const ErrorMessageStyled = styled.span`
  color: #d62828;
`;
const FormButton = styled.button`
  border: none;
  width: 200px;
  height: 44px;
  background-color: #ffcb77;
  color: #202020;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    background-color: #17c3b2;
  }
`;

function Signup({ studentUpdate, setStudentUpdate }) {
  const navigate = useNavigate();
  const isUpdate = Object.keys(studentUpdate).length > 0 ? true : false;
  return (
    <Conteiner>
      <Formik
        initialValues={{
          carrera: isUpdate ? studentUpdate.carrera : "",
          average: isUpdate ? studentUpdate.average : "",
          name: isUpdate ? studentUpdate.name : "",
          lastname: isUpdate ? studentUpdate.lastname : "",
          birthdate: isUpdate ? studentUpdate.birthdate : "",
        }}
        validationSchema={yup.object().shape({
          name: yup.string().required("porfavor ingrese su nombre"),
          lastname: yup.string().required("porfavor ingrese su apellido"),
          birthdate: yup
            .string()
            .required("Por favor ingrese su fecha de nacimiento"),
          carrera: yup.string().required("Por favor ingrese su carrera"),
          average: yup.string().required("Por favor ingrese su promedio"),
        })}
        onSubmit={async (values, { setSubmiting, resetForm }) => {
          if (Object.keys(studentUpdate).length > 0) {
            await axios.put(`/api/student/${studentUpdate._id}`, values);
            toast.success("Estudiante actualizado correctamente.")
            navigate("/estudiantes")
          } else {
            const { data } = await axios.post("/api/students", values);
            console.log(data);
            toast.success("Estudiante creado correctamente.")
          }
          setStudentUpdate({});
          resetForm({})
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Formstyled onSubmit={handleSubmit} noValidate>
            <TitleForm>Registrar a un estudiante</TitleForm>
            <InputContainer>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                values={values.name}
                placeholder="Ingrese su nombre"
              />
              <ErrorMessage name="name">
                {(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
              </ErrorMessage>
            </InputContainer>
            <InputContainer>
              <Input
                type="text"
                name="lastname"
                onChange={handleChange}
                values={values.lastname}
                placeholder="Ingrese su apellido"
              />
              <ErrorMessage name="lastname">
                {(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
              </ErrorMessage>
            </InputContainer>

            <InputContainer>
              <Input
                type="date"
                name="birthdate"
                onChange={handleChange}
                values={values.birthdate}
                placeholder="Ingrese su fecha de nacimiento"
              />
              <ErrorMessage name="birthdate">
                {(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
              </ErrorMessage>
            </InputContainer>

            <InputContainer>
              <Input
                type="text"
                name="carrera"
                onChange={handleChange}
                values={values.carrera}
                placeholder="Ingrese su carrera..."
              />
              <ErrorMessage name="carrera">
                {(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
              </ErrorMessage>
            </InputContainer>
            <InputContainer>
              <Input
                type="text"
                name="average"
                onChange={handleChange}
                values={values.average}
                placeholder="Ingrese su promedio..."
              />
              <ErrorMessage name="average">
                {(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
              </ErrorMessage>
            </InputContainer>
            <FormButton type="submit">
              {Object.keys(studentUpdate).length > 0
                ? "Actualizar"
                : "Ingresar"}
            </FormButton>
          </Formstyled>
        )}
      </Formik>

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
    </Conteiner>
  );
}

export default Signup;