import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Context/UserContext';
import MyReviewsRow from './MyReviewsRow';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyReviews(data)
            })
    }, [user?.email])

    return (
        <div className='md:px-52  bg-zinc-800 py-16'>
            <div>
                <h3 className='text-5xl text-green-500 font-bold'>My Reviews</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-9 pt-9'>
                    {
                        myReviews.map(reviews => <MyReviewsRow
                            key={reviews._id}
                            reviews={reviews}
                        ></MyReviewsRow>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyReview;