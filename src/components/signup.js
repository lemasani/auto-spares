import React, { useState, useEffect } from 'react';
// import './SignUp.css';

function SignUp() {
    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors, formValues, isSubmit]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Those passwords didn’t match. Try again.";
        }
        return errors;
    };

    return (
        <div id="signup" className="signup-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Choose a username"
                        value={formValues.username}
                        onChange={handleChange}
                    />
                </div>
                <p>{formErrors.username}</p>
                <div className="field">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                </div>
                <p>{formErrors.email}</p>
                <div className="field">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formValues.password}
                        onChange={handleChange}
                    />
                </div>
                <p>{formErrors.password}</p>
                <div className="field">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <p>{formErrors.confirmPassword}</p>
                <button className="fluid ui button blue">Submit</button>
            </form>
            <div className="text">
                Already have an account? <a href="#login">Login</a>
            </div>
        </div>
    );
}

export default SignUp;
