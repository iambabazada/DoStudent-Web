import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Name cannot be empty'),
    surname: Yup.string().required('Lastname cannot be empty'),
    email: Yup.string().email('Enter a valid email address').required('Email cannot be empty'),
    password: Yup.string().min(8, "Must be at least 8 characters").required('Password cannot be empty'),
});



const Register = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            username: '',
            email: '',
            password: '',
            university: '',
            age: '',
            location: '',
            qualification: '',
            phone: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: validationSchema
    });




    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                ) : null
                }
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="surname"
                    name="surname"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.surname}
                />
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <label htmlFor="email">Username</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                <label htmlFor="email">Age</label>
                <input
                    id="age"
                    name="age"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                />
                <label htmlFor="email">university</label>
                <input
                    id="university"
                    name="university"
                    type="username"
                    onChange={formik.handleChange}
                    value={formik.values.university}
                />
                <label htmlFor="email">Location</label>
                <input
                    id="location"
                    name="location"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.location}
                />
                <label htmlFor="email">gender</label>
                <select name="" id="gender" value="" onChange={formik.handleChange}>
                    <option value="male">
                        Male
                    </option>
                    <option value="Female">
                        Female
                    </option>
                </select>

                <label htmlFor="email">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <label htmlFor="email">qualification</label>
                <input
                    id="qualification"
                    name="qualification"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.text}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register