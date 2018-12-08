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
                    <Field type="text"
                           name="name"
                           placeholder="Full Name"
                           className={
                               errors.password && touched.password ? 'input error active' : 'input'
                           }/>
                    <div className="floating_element">
                        <label htmlFor="name" className="label">Full Name</label>
                        {
                            touched.name &&
                            errors.name &&
                            <p className="error_message">{errors.name}</p>
                        }
                    </div>
                </div>
                <div className="floating_label">
                    <Field type="email"
                           name="email"
                           placeholder="Email"
                           className={
                               errors.password && touched.password ? 'input error active' : 'input'
                           }/>
                    <div className="floating_element">
                        <label htmlFor="name" className="label">Email</label>
                        {
                            touched.email &&
                            errors.email &&
                            <p className="error_message">{errors.email}</p>
                        }
                    </div>
                </div>
                <div className="floating_label">
                    <Field type="password"
                           name="password"
                           placeholder="Password"
                           className={
                               errors.password && touched.password ? 'input error active' : 'input'
                           }
                    />
                    <div className="floating_element">
                        <label htmlFor="name" className="label">Password</label>
                        {
                            touched.password &&
                            errors.password &&
                            <p className="error_message">{errors.password}</p>
                        }
                    </div>
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

export default withFormik({
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
