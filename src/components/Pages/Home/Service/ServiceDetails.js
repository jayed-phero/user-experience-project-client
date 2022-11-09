import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../Context/UserContext';
import ReviewLive from './ReviewLive';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData()
    const [reviews, setReviews] = useState([])
    const [refresh, setRefresh] = useState(false)
    const { title, image, _id, desc } = serviceDetails;
    const { user } = useContext(AuthContext)


    const handleReview = (event) => {
        event.preventDefault()
        const form = event.target;
        const review = form.review.value;
        const email = user.email;
        const name = user.displayName;
        const photo = user.photoURL;
        const id = _id;
        const headtitle = title;

        const reviewInfo = {
            review,
            email,
            name,
            photo,
            headtitle,
            id,
        }

        console.log(reviewInfo)

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                toast.success('Review send successfully')
                setRefresh(!refresh)
            }
        })
        .catch(err => console.error(err))

    }

    useEffect(() => {
        fetch(`http://localhost:5000/reviewsid?id=${_id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setReviews(data)
        })
    }, [refresh])

    return (
        <div className='md:px-52 bg-zinc-800'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-11 pt-20'>
                <div class="flex justify-center md:col-span-2">
                    <div class="rounded-lg w-full ">
                        <a >
                            <img className="rounded-3xl h-80 w-full" src={image} alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-white text-3xl font-medium mb-3">{title}</h5>
                            <p class="text-white text-base mb-4">{desc}</p>
                            
                            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> 
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-xl text-green-500 font-bold pb-5'>Customer Review</h3>
                    {
                        reviews.map(comment => <ReviewLive 
                            key={comment._id}
                            comment={comment}
                            ></ReviewLive>)
                    }
                    <div className='mt-5'>
                        {
                            user?.uid ?

                                <>
                                    <form onSubmit={handleReview}>
                                        <textarea name='review' type='text' className="textarea text-white bg-transparent textarea-accent h-32 w-full " placeholder="Type your Review"></textarea>
                                        <button type='submit' className='w-full py-2 hover:bg-green-700 duration-300 ease-in bg-green-500 text-white rounded-lg mt-2'>Add Review</button>
                                    </form>
                                </>
                                :
                                <>
                                    <div className='flex items-center justify-between'>
                                        <h3 className='text-white text-xl font-semibold '>Please login to add a Review</h3>
                                        <Link to='/login'>
                                            <button className='px-3 py-2 rounded-lg text-white font-semibold bg-green-500 hover:bg-green-700'>Login</button>
                                        </Link>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;