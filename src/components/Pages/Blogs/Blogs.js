import React from 'react';

const Blogs = () => {
    return (
        <div className='md:px-52 bg-zinc-800'>
            <section className="bg-zinc-900 text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">Difference between SQL and NoSQL ?</h3>
                            <p className="mt-1 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">What is JWT, and how does it work?</h3>
                            <p className="mt-1 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">What is the difference between javascript and Node.JS ?</h3>
                            <p className="mt-1 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">How does Node.JS handle multiple requests at the same time ?</h3>
                            <p className="mt-1 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;