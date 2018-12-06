import React from "react";
import "./App.css";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";

const App = ({errors,touched}) => (
    <Form>
        <div>
            {touched.name && errors.name && <p>{errors.name}</p>}
            <Field type="text" name="name" placeholder="Full Name"/>
        </div>
        <div>
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field type="email" name="email" placeholder="Email"/>
        </div>
        <div>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password"/>
        </div>
        <button type="submit">Create Account</button>
    </Form>
);

const FormikApp = withFormik({
    mapPropsToValues() {
        return {
            name: "",
            email: "",
            password: ""
        };
    },
    handleSubmit(values) {
        console.log(values);
    },
    validationSchema: Yup.object({
        name: Yup.string("Your name cannot contain numbers").required("Full name is required"),
        email: Yup.string().email("It is not a valid email.").required("Email is required"),
        password: Yup.string().min(9,"Your password must be 9 characters or longer").required("Password is required."),
    })
})(App);

export default FormikApp;
