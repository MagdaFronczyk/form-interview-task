import React from "react";
import "../App.css";
import {withFormik, Field} from "formik";
import classNames from "classnames";
import * as Yup from "yup";

const FormEmail = ({
                       errors,
                       touched
                   }) => (
    <div className="floating_label">
        <Field type="email"
               name="email"
               placeholder="Email"
               className={
                   classNames(
                       "input", {"error": errors.email && touched.email}, {"active": touched.email}
                   )
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
);

export default withFormik({
    mapPropsToValues() {
        return {
            email: "",
        };
    },
    validationSchema: Yup.object({
        email: Yup
            .string()
            .email("not a valid email")
            .required("email is required")
    })
})(FormEmail);