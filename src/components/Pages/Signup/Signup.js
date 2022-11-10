import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import useTitle from '../../../hooks/useTitle';

const Signup = () => {

    useTitle('Sign Up')
    const { createUser, updateUserProfile, googleSignin, githubLoginUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                userProfileUpdate(name, photoURL)
                navigate('/login')
                toast.success('Welcome, SignUp Successfully')
            })
            .catch(err => console.log(err))
    }


    const userProfileUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className='px-5 md:px-52 py-20 bg-zinc-800 flex items-center justify-center'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent border-gray-500 border-2">
                <div className="card-body ">
                    <h3 className='text-center py-2 text-3xl text-white'>Sign Up</h3>
                    <div className='text-center'>
                        <p class="text-white text-sm font-semibold pt-1 mb-0"> Already have an account?
                            <Link to='/login' class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out" >Login</Link>
                        </p>
                        <p className='text-sm font-semibold text-red-500'>{error}</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Username</span>
                            </label>
                            <input name='name' type="text" placeholder="username" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">PhotoURL</span>
                            </label>
                            <input name='photoURL' type="text" placeholder="PhotoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;