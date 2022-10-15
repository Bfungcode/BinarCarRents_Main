import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Table, Card, CardImg } from 'reactstrap';
import '../styling/Register.css';
import { register } from "../features/auth/authSlice";
import axios from "axios";

import { useFormik } from "formik";
import * as Yup from "yup";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const handleSubmit = async (values, actions, navigate, dispatch) => {
    const { email, password } = values;
    dispatch(register({ email, password }))
        .unwrap()
        .then(() => {
            navigate('/login');
        })
        .catch(() => {
            console.log('error')
        })
}


const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            name: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Required!"),
            email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            password: Yup.string()
                .min(8, "Minimum 8 characters")
                .required("Required!")
        }),
        // onSubmit: values => {
        //   alert(JSON.stringify(values, null, 2));
        // },

        onSubmit: (values, actions) => {
            handleSubmit(values, actions, navigate, dispatch)
        },
    });

    return (
        <>
            <Row className="rowRegister">
                <Col >
                    <div className="formregister">
                        <div className="smallrectangle"></div>
                        <br></br>
                        <h3>Sign up!</h3>
                        <br></br>
                        <form onSubmit={formik.handleSubmit} method="post">
                            <Table>
                                <label>Name</label>
                                <br></br>
                                <input
                                    type="name"
                                    name="name"
                                    placeholder="Nama Lengkap"
                                    className="input"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.name && formik.touched.name ? (
                                    <div style={{ color: "red" }}  >{formik.errors.name}</div>
                                ) : null}
                            </Table>
                            <Table>
                                <label>Email</label>
                                <br></br>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Contoh : xyz@gmail.com"
                                    className="input"
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
                                    type="password"
                                    name="password"
                                    placeholder="Min 8 karakter"
                                    className="input"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div style={{ color: "red" }}  >{formik.errors.password}</div>
                                ) : null}
                            </Table>

                            <div>
                                <button type="submit" className="buttonregister">Sign Up</button>
                            </div>

                            <div>
                                <p className="textsignin">Already have an account? <a href='/login' className="textsignin">Sign in here</a></p>
                            </div>
                        </form>
                    </div>
                </Col>

                <Col className="rightCol">
                    <img class="bgImage" src="../Rectangle.jpg" alt="" />
                    {/* <Card inverse>
                        <CardImg
                            alt="Card image cap"
                            src="../Rectangle.jpg"
                            width="100%"
                            height="50%" />
                    </Card> */}
                </Col>

            </Row>
        </>
    );
};

export default Register;