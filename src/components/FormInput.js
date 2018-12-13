import React from "react";
import "../App.css";
import classNames from "classnames";

export default (props) => {
    const name = props.name;
    const placeholder = props.placeholder;
    const errors = props.errors;
    const touched = props.touched;
    return (
        <div className="floating_label">
            <input type="text"
                   name={name}
                   placeholder={placeholder}
                   className={
                       classNames(
                           "input", {"error": errors && touched}, {"active": touched}
                       )
                   }/>
            <div className="floating_element">
                <label htmlFor={name} className="label">{name}</label>
                {
                    touched &&
                    errors &&
                    <p className="error_message">{errors}</p>
                }
            </div>
        </div>
    );
};