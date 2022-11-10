import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const logoutUser = () => {
        logOut()
            .then(() => {
                toast.success("Successfully loged Out")
                navigate('/')
            })
            .catch(e => console.error(e))
    }
    return (
        <div className='z-50 px-52 sticky top-0 shadow-xl py-3 bg-black'>
            <div className="navbar text-lg text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link className='hover:text-green-500 text-black' to='/'><li><a>Home</a></li></Link>
                            <Link className='hover:text-green-500 text-black ' to='/blogs'><li><a>Blog</a></li></Link>
                            {
                                user?.uid ?
                                    <>
                                        <Link className='text-black hover:text-green-500 ' to='/myreviews'><li><a>My Reviews</a></li></Link>
                                        <Link className='text-black hover:text-green-500 ' to='/addservice'><li><a>Add Service</a></li></Link>
                                        <Link className='text-black hover:text-green-500 '><li onClick={logoutUser}><a>Log Out</a></li></Link>
                                    </>
                                    :
                                    undefined

                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><i className="fa-regular fa-tooth"></i> DCARE</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <Link className='hover:text-green-500' to='/'><li><a>Home</a></li></Link>
                        <Link className='hover:text-green-500 ' to='/blogs'><li><a>Blog</a></li></Link>
                        {
                            user?.uid ?
                                <>
                                    <Link className='hover:text-green-500 ' to='/myreviews'><li><a>My Reviews</a></li></Link>
                                    <Link className='hover:text-green-500 ' to='/addservice'><li><a>Add Service</a></li></Link>
                                    <Link className='hover:text-green-500 '><li onClick={logoutUser}><a>Log Out</a></li></Link>
                                </>
                                :
                                undefined

                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <h3 className='text-green-500 text-xl font-bold'>+880123457</h3>
                </div>
            </div>
        </div>
    );
};

// echo "# b6a11-service-review-client-side-jayed-phero" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Porgramming-Hero-web-course/b6a11-service-review-client-side-jayed-phero.git
// git push -u origin main

export default Header;