import styles from '../../styles/pages/auth/Login.module.css'
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { login } from '../../redux/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




// const loginSchema = Yup.object({
//     username: Yup.string().required('Username cannot be empty'),
//     password: Yup.string().min(8, "Must be at least 8 characters").required('Password cannot be empty'),
// });




const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            dispatch(login(values))
                .unwrap()
                .then(() => {
                    toast.success("Xoş Gəlmisiniz :)", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                    setTimeout(() => {
                        navigate('/')
                    }, 3000)
                })
                .catch((err) => {
                    console.log(err);
                    // const {
                    //     message: error
                    // } = err

                    toast.error(err.message, {
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
        // validationSchema: loginSchema,
        // validationOnMount: true

    })


    return (
        <div className={styles.container}>
            <ToastContainer />
            <div className={styles.img_box}>{/* <img src="" alt="" /> */}</div>
            <div className={styles.login_field}>
                <div className={styles.login_box}>
                    <h4>Welcome Login Page</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <form className={styles.login_form} onSubmit={formik.handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            placeholder="email"
                            className={styles.name}
                            name="email"
                            id="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.email ? <ErrorMessage>{formik.errors.username}</ErrorMessage> : null}

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="password"
                            className={styles.password}
                            name="password"
                            id="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.password ? <ErrorMessage>{formik.errors.password}</ErrorMessage> : null}


                        <div className={styles.submit_button}>
                            <button type='submit' className={styles.button} onClick={formik.handleSubmit}>Login</button>
                        </div>
                    </form>
                    <span>
                        Lorem ipsum dolor sit.? <Link to="/register">Register</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};


const ErrorMessage = ({ children }) => {
    return <span className={styles.error}>{children}</span>
}

export default Login;
