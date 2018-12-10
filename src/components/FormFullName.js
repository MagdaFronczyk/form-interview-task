import React from "react";
import "../App.css";
import {withFormik, Field} from "formik";
import classNames from "classnames";
import * as Yup from "yup";

const FormName = ({
                      errors,
                      touched
                  }) => (
    <div className="floating_label">
        <Field type="text"
               name="name"
               placeholder="Full Name"
               className={
                   classNames(
                       "input", {"error": errors.name && touched.name}, {"active": touched.name}
                   )
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
);

const FormikApp = withFormik({
    mapPropsToValues() {
        return {
            name: ""
        };
    },
    validationSchema: Yup.object({
        name: Yup
            .string("name cannot contain numbers")
            .required("full name is required"),
    })
})(FormName);

export default FormikApp;