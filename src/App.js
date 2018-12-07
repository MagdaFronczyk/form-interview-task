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
                <div className="floating_label">
                    {
                        touched.name &&
                        errors.name &&
                        <p className="error_message">{errors.name}</p>
                    }
                    <Field type="text"
                           name="name"
                           placeholder="Full Name"
                           className="input"/>
                    <label htmlFor="name"
                           className="label">
                        Full Name
                    </label>
                </div>
                <div className="floating_label">
                    {
                        touched.email &&
                        errors.email &&
                        <p className="error_message">{errors.email}</p>
                    }
                    <Field type="email"
                           name="email"
                           placeholder="Email"
                           className="input"/>
                    <label htmlFor="name"
                           className="label">
                        Email
                    </label>
                </div>
                <div className="floating_label">
                    {
                        touched.password &&
                        errors.password &&
                        <p className="error_message">{errors.password}</p>
                    }
                    <Field type="password"
                           name="password"
                           placeholder="Password"
                           className="input"/>
                    <label htmlFor="name"
                           className="label">
                        Password
                    </label>
                </div>
            </div>
            <button type="submit"
                    disabled={isSubmitting}
                    className="submit_button">
                Create Account
            </button>
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
        name: Yup
            .string("Your name cannot contain numbers")
            .required("Full name is required"),
        email: Yup
            .string()
            .email("It is not a valid email.")
            .required("Email is required"),
        password: Yup
            .string()
            .min(8, "Your password must be 9 characters or longer")
            .required("Password is required"),
    })
})(App);

export default FormikApp;
