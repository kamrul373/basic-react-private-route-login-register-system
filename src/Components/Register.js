import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import validatePassword from '../utility/checkPassword';

const Register = () => {
    const [message, setMessage] = useState("");
    const { createUser, googleSignIn, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // password validation
        const checkpassword = validatePassword(password, setMessage);

        if (checkpassword) {
            createUser(email, password)
                .then(response => {
                    const user = response.user;
                    // updating profile
                    updateUserProfile(name)
                        .then(() => {
                            navigate("/");
                        })
                        .catch(error => console.log(error))
                    console.log(user);
                }).catch(error => setMessage(error));
        }
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(response => {
                console.log(response.user)
            }).catch(error => console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Hurry !! Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h2 className='text-red-500 mt-4 mb-2'>
                            {
                                message && { message }
                            }
                        </h2>
                        <div className=''>
                            <button onClick={handleGoogleSignIn} className='btn btn-black btn-circle font-bold'>G</button>
                        </div>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input name="name" type="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div>
                            </div>
                            <div>
                                <p className='text-'>Already have an account? <Link to="/login" className='text-violet-500'>Login Now</Link> </p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Register;