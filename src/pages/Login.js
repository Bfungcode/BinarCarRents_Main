import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Table, Card, CardImg } from 'reactstrap';
import '../styling/Login.css';

import axios from "axios";

import { useFormik } from "formik";
import * as Yup from "yup";

import { useNavigate } from "react-router-dom";

const handleSubmit = async (values, actions, navigate) => {
    try {
        const response = await axios({
            method: "POST",
            url: "https://bootcamp-rent-car.herokuapp.com/customer/auth/login",
            data: values,
        })
        actions.setSubmitting(false);
        actions.resetForm();
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/')
    } catch (error) {
        actions.setSubmitting(false);
        alert("Login Gagal");
    }
};

const Login = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            password: Yup.string()
                .min(6, "Minimum 6 characters")
                .required("Required!")
        }),

        onSubmit: (values, actions) => {
            handleSubmit(values, actions, navigate)
        },
    });

    return (
        <>
            <Row className="rowLogin">
                <Col>
                    <div className="formlogin">
                        <div className="smallrectangle"></div>
                        <br></br>
                        <h3>Welcome Back!</h3>
                        <br></br>
                        <form onSubmit={formik.handleSubmit} method="post">
                            <Table>
                                <label>Email</label>
                                <br></br>
                                <input
                                    className="input"
                                    type="email"
                                    name="email"
                                    placeholder="Contoh : xyz@gmail.com"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.email && formik.touched.email ? (
                                    <div style={{ color: "red" }}  >{formik.errors.email}</div>
                                ) : null}
                            </Table>
                            <Table>
                                <label>Password</label>
                                <br></br>
                                <input
                                    className="input"
                                    type="password"
                                    name="password"
                                    placeholder="Min 8 karakter"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div style={{ color: "red" }}  >{formik.errors.password}</div>
                                ) : null}
                            </Table>

                            <div>
                                {/* <button className="buttonlogin" type="submit" onClick={ () => navigate('/')} >Submit</button> */}
                                <button className="buttonlogin" type="submit" >Sign In</button>
                            </div>
                            <div>
                                <p className="textsignup">Don't have an account? <a href="./register-user" className="textsignup">Sign Up for free</a></p>
                            </div>

                        </form>
                    </div>
                </Col>

                <Col className="rightCol">
                    <Card inverse>
                        <CardImg
                            alt="Card image cap"
                            src="../Rectangle.jpg"
                            width="100%"
                            height="50%" />
                    </Card>
                </Col>

            </Row>
        </>
    );
};

export default Login;