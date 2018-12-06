import React, {Component} from "react";
import "./App.css";
import {withFormik, Form, Field} from "formik";

const App = () => (
    <Form>
        <Field type="text" name="name" placeholder="Full Name"/>
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
    handleSubmit(values){
        console.log(values);
    }
})(App);

export default FormikApp;
