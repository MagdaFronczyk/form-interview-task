import React from "react";
import "../App.css";
import {withFormik, Form} from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import FormName from "./FormFullName";
import FormEmail from "./FormEmail";
import FormPassword from "./FormPassword"

const App = ({
                 errors,
                 touched,
                 isSubmitting,
             }) => (
    <div className="container">
        <Form className="form_container">
            <div className="form">
                <FormName/>
                <FormEmail/>
                <FormPassword/>
            </div>
            <button type="submit"
                    disabled={isSubmitting}
                    className="submit_button">
                Create Account
            </button>
        </Form>
    </div>

);

export default withFormik({
    mapPropsToValues() {
        return {
            name: "",
            email: "",
            password: "",
        };
    },
    handleSubmit(values, {resetForm, setSubmitting}) {
        setTimeout(() => {
            console.log(values);
            setSubmitting(false);
            resetForm();
        }, 500);
    },
    validationSchema: Yup.object({
        name: Yup
            .string("name cannot contain numbers")
            .required("full name is required"),
        email: Yup
            .string()
            .email("not a valid email")
            .required("email is required"),
        password: Yup
            .string()
            .min(8, "min 8 characters")
            .required("password is required"),
    })
})(App);

App.propTypes = {
    values: PropTypes.shape({
        email: PropTypes.string,
        name: PropTypes.string,
        password: PropTypes.string
    }),
};
