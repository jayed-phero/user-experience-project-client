import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import useTitle from '../../../hooks/useTitle';

const Login = () => {
    useTitle('Login')
    const { user, loginUser, googleSignin, setLoading} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

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
            
            const currentUser = {
                email: user.email
            }

            // jwt token getting
            fetch('http://localhost:5000/jwt', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('tokenDcare', data.token);
            })
            navigate(from, {replace: true});
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
            navigate(from, {replace: true});
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;