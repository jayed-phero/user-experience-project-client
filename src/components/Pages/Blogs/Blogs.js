import React from 'react';
import ScrollToTop from '../../../hooks/Scrooling-top';
import useTitle from '../../../hooks/useTitle';



const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='px-5 md:px-52 bg-zinc-800'>
            <ScrollToTop></ScrollToTop>
            <section className="bg-zinc-900 text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">Difference between SQL and NoSQL ?</h3>
                            <p className="mt-1 text-gray-400">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">What is JWT, and how does it work?</h3>
                            <p className="mt-1 text-gray-400">JSON Web Token (JWT) is an open standard securely transmitting information between parties as JSON object. The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">What is the difference between javascript and Node.JS ?</h3>
                            <p className="mt-1 text-gray-400">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">How does Node.JS handle multiple requests at the same time ?</h3>
                            <p className="mt-1 text-gray-400">Node.js uses a single-thread and an event loop to process requests only processing one at a time (which is non-blocking). NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;