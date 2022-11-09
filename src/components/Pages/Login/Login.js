import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';

const Login = () => {
    const { user, loginUser, githubLoginUser, googleSignin, setLoading} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const navigate = useNavigate();
    const location = useLocation();

    // const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        loginUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            // navigate(from, {replace: true});
            navigate('/')
        })
        .catch(err => console.log(err))
        .finally(() => {
            setLoading(false)
        })
    }

    const handleGoogleSignin = () => {
        googleSignin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            // navigate(from, {replace: true});
            toast.success("Welcome Login Successfully")
        })
        .catch(error => console.error(error))
    }

    const handleGithubSign = () => {
        githubLoginUser(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
            // navigate(from, {replace: true});
            toast.success("Welcome Login Successfully")
        })
        .catch(error => console.error(error))
    }
    return (
        <div className='md:px-52 py-20 bg-zinc-800 flex items-center justify-center'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent border-gray-500 border-2">
                <div className="card-body ">
                    <h3 className='text-center py-2 text-3xl text-white'>Login Now</h3>
                    <div className='text-center'>
                        <p class="text-white text-sm font-semibold pt-1 mb-0"> Don't have an account?
                            <Link to='/signup' class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out" >Register</Link>
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link className="label-text-alt text-blue-500">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <div
                            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                            <p class="text-center text-white font-semibold mx-4 mb-0">OR</p>
                        </div>
                        <button onClick={handleGoogleSignin} aria-label="Login with Google" type="button" className="flex items-center justify-center text-white my-3 w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p>Login with Google</p>
                        </button>
                        <button onClick={handleGithubSign} aria-label="Login with GitHub" role="button" className="flex items-center justify-center text-white w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                            <p>Login with GitHub</p>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;