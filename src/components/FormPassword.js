import React from "react";
import "../App.css";
import {withFormik, Field} from "formik";
import classNames from "classnames";
import * as Yup from "yup";

const FormPassword = ({
                          errors,
                          touched
                      }) => (
    <div className="floating_label">
        <Field type="password"
               name="password"
               placeholder="Password"
               className={
                   classNames(
                       "input", {"error": errors.password && touched.password}, {"active": touched.password}
                   )
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
);

export default withFormik({
    mapPropsToValues() {
        return {
            password: "",
        };
    },
    validationSchema: Yup.object({
        password: Yup
            .string()
            .min(8, "min 8 characters")
            .required("password is required"),
    })
})(FormPassword);