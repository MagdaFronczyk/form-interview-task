import React from "react";
import "./App.css";
import {withFormik, Form, Field} from "formik";
import * as Yup from 'yup';

const App = ({}) => (
    <Form>
        <div>
            <Field type="text" name="name" placeholder="Full Name"/>
        </div>
        <Field type="email" name="email" placeholder="Email"/>
        <Field type="password" name="password" placeholder="Password"/>
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
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required(),
    })
})(App);

export default FormikApp;
