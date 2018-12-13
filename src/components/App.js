import React from "react";
import "../App.css";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import FormInput from "./FormInput";

const App = () => (
        <div className="container">
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                }}
                onSubmit={(values, {resetForm, setSubmitting}) => {
                    setTimeout(() => {
                        console.log(values);
                        setSubmitting(false);
                        resetForm();
                    }, 500);
                }}
                validationSchema={Yup.object().shape({
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
                })}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleSubmit
                    } = props;
                    return (

                        <form className="form_container" onSubmit={handleSubmit}>
                            <div className="form">
                                <FormInput name="name" placeholder="Full name" onChange={handleChange} value={values.name}
                                           touched={touched.name} errors={errors.name}/>
                                <FormInput name="email" placeholder="Email" onChange={handleChange} value={values.email}
                                           touched={touched.email} errors={errors.email}/>
                                <FormInput name="password" placeholder="Password" onChange={handleChange}
                                           value={values.password}
                                           touched={touched.password} errors={errors.password}/>
                            </div>
                            <button type="submit"
                                    disabled={isSubmitting}
                                    className="submit_button">
                                Create Account
                            </button>
                        </form>
                    );
                }}
            </Formik>
        </div>
    )
;

App.propTypes = {
    values: PropTypes.shape({
        email: PropTypes.string,
        name: PropTypes.string,
        password: PropTypes.string
    }),
};

export default App;