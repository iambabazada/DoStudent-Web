import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../styles/pages/auth/Register.module.css'
import Button from '../../components/Button/Button';
import { register } from '../../redux/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

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
    const dispatch = useDispatch()
    const navigate = useNavigate()



    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            gender: '',
        },

        onSubmit: values => {

            dispatch(register(values))
                .unwrap()
                .then(() => {
                    toast.success('Qeydiyyatdan kecdiniz ', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setTimeout(() => {
                        navigate('/login')
                    }, 3000);
                })
                .catch((err) => {
                    const {
                        password: parol,
                        email: mail,
                        username: useradi,
                    } = err.validationErrors;

                    console.log("dscdscdsc", err);

                    toast.error(parol, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    toast.error(mail, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    toast.error(useradi, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })
        },
        // validationSchema: validationSchema,
        // validateOnMount: true
    });

    return (
        <div className={styles.register}>
            <ToastContainer />
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
                                <label htmlFor="email">Email Address</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
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

                        </div>
                        <div className={styles.right}>
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
                        </div>
                    </div>
                    <Button width="xl" bg="#00A551">
                        Register
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Register