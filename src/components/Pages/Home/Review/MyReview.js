import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Context/UserContext';
import useTitle from '../../../../hooks/useTitle';
import MyReviewsRow from './MyReviewsRow';

const MyReview = () => {
    useTitle('My Reviews')
    const { user, logOut } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('tokenDcare')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logoutUser()
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                setMyReviews(data)
            })
    }, [user?.email])

    const logoutUser = () => {
        logOut()
            .then(() => {
                toast.success("authentication error logedOut user")
            })
            .catch(e => console.error(e))
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/myreviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('Deleted Successfully')
                    const remaining = myReviews.filter(review => review._id !== id);
                    setMyReviews(remaining)
                }
            })
    }

    return (
        <div className='px-5 md:px-52 min-h-screen bg-zinc-800 py-16'>
            <h3 className='text-5xl text-green-500 font-bold'>My Reviews</h3>
            {
                myReviews?.length === 0 ?
                    <div className='flex items-center justify-center md:pt-44'>
                        <h3 className='text-xl font-bold text-white'>No reviews were added</h3>
                    </div>
                    :
                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-9 pt-9'>
                            {
                                myReviews?.map(reviews => <MyReviewsRow
                                    key={reviews._id}
                                    handleDelete={handleDelete}
                                    reviews={reviews}
                                ></MyReviewsRow>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default MyReview;