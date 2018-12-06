import React from "react";
import "./App.css";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

const App = ({
                 errors,
                 touched,
                 isSubmitting
             }) => (
    <div className="container">
        <Form className="form_container">
            <div className="form">
                <div id="floatContainer" className="float_container">
                    <label htmlFor="floatField"/>
                    {touched.name && errors.name && <p>{errors.name}</p>}
                    <Field type="text" name="name" placeholder="Full Name" id="floatField"/>
                </div>
                <div>
                    {touched.email && errors.email && <p>{errors.email}</p>}
                    <Field type="email" name="email" placeholder="Email"/>
                </div>
                <div>
                    {touched.password && errors.password && <p>{errors.password}</p>}
                    <Field type="password" name="password" placeholder="Password"/>
                </div>
            </div>
            <button type="submit" disabled={isSubmitting}>Create Account</button>
        </Form>
    </div>

);

const FormikApp = withFormik({
    mapPropsToValues() {
        return {
            name: "",
            email: "",
            password: "",
        };
    },
    handleSubmit(values, {resetForm}) {
        setTimeout(() => {
            console.log(values);
            resetForm();
        }, 500);
    },
    validationSchema: Yup.object({
        name: Yup.string("Your name cannot contain numbers").required("Full name is required"),
        email: Yup.string().email("It is not a valid email.").required("Email is required"),
        password: Yup.string().min(8, "Your password must be 9 characters or longer").required("Password is required."),
    })
})(App);

export default FormikApp;
