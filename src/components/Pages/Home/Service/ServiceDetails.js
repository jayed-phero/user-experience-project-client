import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../Context/UserContext';
import ScrollToTop from '../../../../hooks/Scrooling-top';
import useTitle from '../../../../hooks/useTitle';
import ReviewLive from './ReviewLive';

const ServiceDetails = () => {

    useTitle('Service Details')
    const serviceDetails = useLoaderData()
    const [reviews, setReviews] = useState([])
    const [error, setError] = useState('')
    const [refresh, setRefresh] = useState(false)
    const { title, image, _id, desc, price } = serviceDetails;
    const { user } = useContext(AuthContext)

    const current = new Date();
    const day = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;


    const handleReview = (event) => {
        event.preventDefault()
        const form = event.target;
        const review = form.review.value;
        const email = user.email;
        const name = user.displayName;
        const photo = user.photoURL
        const serviceImage = image;
        const id = _id;
        const date = day;
        const headtitle = title;

        const reviewInfo = {
            review,
            email,
            name,
            photo,
            serviceImage,
            headtitle,
            date,
            id,
        }

        console.log(reviewInfo)

        fetch('https://review-assignment-eleven-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review send successfully')
                    setRefresh(!refresh)
                    form.reset()
                }
            })
            .catch(err => {
                console.error(err)
                setError(err.message)
            })

    }

    useEffect(() => {
        fetch(`https://review-assignment-eleven-server.vercel.app/reviewsid?id=${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [refresh])

    return (
        <div className='px-5 md:px-52 bg-zinc-800 pb-20'>
            <ScrollToTop></ScrollToTop>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-11 pt-5 md:pt-20'>
                <div class="flex justify-center md:col-span-2">
                    <div class="rounded-lg w-full ">
                        <a>
                            <img className="rounded-3xl h-44  md:h-80 w-full" src={image} alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-white text-3xl font-medium mb-3">{title}</h5>
                            <p class="text-white text-base mb-4">{desc}</p>
                            <p className='text-white text-base mb-4'>{desc}</p>
                            <p className='text-white text-xl  font-semibold'>Visiting Fee: $ <span className='text-green-500'>{price}</span></p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-xl text-green-500 font-bold pb-5'>Patient Reviews</h3>
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
                                        <h3 className='py-3 text-green-500 font-semibold'>Type Your Review here!!!</h3>
                                        <textarea name='review' type='text' className="textarea text-white bg-transparent textarea-accent h-32 w-full " placeholder="Type your Review" required></textarea>
                                        <p className='text-sm font-semibold text-red-500'>{error}</p>
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