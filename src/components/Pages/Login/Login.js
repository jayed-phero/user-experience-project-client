import React from 'react';

const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
    }
    return (
        <div className='md:px-52'>
           
        </div>
    );
};

export default Login;