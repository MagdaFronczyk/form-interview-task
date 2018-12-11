import React from "react";
import "../App.css";
import {Field} from "formik";
import classNames from "classnames";

export default (props, {
    errors,
    touched
}) => {
    const name = props.name;
    const placeholder = props.placeholder;
    return (
        <div className="floating_label">
            <Field type="text"
                   name={name}
                   placeholder={placeholder}
                   className={
                       classNames(
                           "input", {"error": errors.name && touched.name}, {"active": touched.name}
                       )
                   }/>
            <div className="floating_element">
                <label htmlFor={props.name} className="label">Full Name</label>
                {
                    touched.name &&
                    errors.name &&
                    <p className="error_message">{errors.name}</p>
                }
            </div>
        </div>
    );
};