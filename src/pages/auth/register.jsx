import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import * as Yup from 'yup';
import styles from '../../styles/pages/auth/Register.module.css'
import Button from '../../components/Button/Button';

const validationSchema = Yup.object({
    name: Yup.string().required('Name cannot be empty'),
    surname: Yup.string().required('Lastname cannot be empty'),
    email: Yup.string().email('Enter a valid email address').required('Email cannot be empty'),
    password: Yup.string().min(8, "Must be at least 8 characters").required('Password cannot be empty'),
    username: Yup.string().required('Username cannot be empty'),
    age: Yup.number().required('Age cannot be empty'),
    university: Yup.string().required('University cannot be empty'),
    location: Yup.string().required('Location cannot be empty'),
    qualification: Yup.string().required('Qualification cannot be empty'),
    gender: Yup.string().required('gender cannot be empty')
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
            gender: '',
            age: '',
            location: '',
            qualification: '',
            phone: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: validationSchema,
        validateOnMount: true
    });

    return (
        <div className={styles.register}>
            <div className={styles.image_box}>

            </div>
            <div className={styles.form_box}>
                <form onSubmit={formik.handleSubmit} className={styles.form}>
                    <h2 className={styles.title}>
                        Register
                    </h2>
                    <div className={styles.d_flex}>
                        <div className={styles.left}>
                            <div className={styles.form_group}>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                />
                                {formik.errors.name ? (
                                    <div className={styles.error}>{formik.errors.name}</div>
                                ) : null
                                }
                            </div>
                            <div className={styles.form_group}>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    id="surname"
                                    name="surname"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.surname}
                                />
                                {formik.errors.surname ? (
                                    <div className={styles.error}>{formik.errors.surname}</div>
                                ) : null
                                }
                            </div>
                            <div className={styles.form_group}>
                                <label htmlFor="email">Email Address</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                                {formik.errors.email ? (
                                    <div className={styles.error}>{formik.errors.email}</div>
                                ) : null
                                }
                            </div>
                            <div className={styles.form_group}>
                                <label htmlFor="email">Username</label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.username}
                                />
                                {formik.errors.username ? (
                                    <div className={styles.error}>{formik.errors.username}</div>
                                ) : null
                                }
                            </div>

                            <div className={styles.form_group}>
                                <label htmlFor="email">Age</label>
                                <input
                                    id="age"
                                    name="age"
                                    type="number"
                                    onChange={formik.handleChange}
                                    value={formik.values.age}
                                />
                                {formik.errors.age ? (
                                    <div className={styles.error}>{formik.errors.age}</div>
                                ) : null
                                }
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.form_group}>
                                <label htmlFor="email">university</label>
                                <input
                                    id="university"
                                    name="university"
                                    type="username"
                                    onChange={formik.handleChange}
                                    value={formik.values.university}
                                />
                                {formik.errors.university ? (
                                    <div className={styles.error}>{formik.errors.university}</div>
                                ) : null
                                }
                            </div>
                            <div className={styles.form_group}>
                                <label htmlFor="email">Location</label>
                                <input
                                    id="location"
                                    name="location"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.location}
                                />
                                {formik.errors.location ? (
                                    <div className={styles.error}>{formik.errors.location}</div>
                                ) : null
                                }
                            </div>
                            <div className={styles.form_group}>
                                <label htmlFor="gender">Gender</label>
                                <select
                                    name="gender"
                                    id="gender"
                                    value={formik.values.gender}
                                    onChange={formik.handleChange}
                                    className={styles.select}
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                {formik.touched.gender && formik.errors.gender ? (
                                    <div className={styles.error}>{formik.errors.gender}</div>
                                ) : null
                                }
                            </div>
                            <div className={styles.form_group}>
                                <label htmlFor="email">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                                {formik.errors.password ? (
                                    <div className={styles.error}>{formik.errors.password}</div>
                                ) : null
                                }
                            </div>
                            <div className={styles.form_group}>
                                <label htmlFor="email">qualification</label>
                                <input
                                    id="qualification"
                                    name="qualification"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.text}
                                />
                                {formik.errors.qualification ? (
                                    <div className={styles.error}>{formik.errors.qualification}</div>
                                ) : null
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.btn_container}>
                        <Button width="xl" bg="#00A551">
                            Register
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register