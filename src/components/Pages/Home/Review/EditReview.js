import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import useTitle from '../../../../hooks/useTitle';

const EditReview = () => {
      useTitle('Update Review')
    const router = useParams()
    const { id } = router;

    const [myReviewEdit, setMyReviewsEdit] = useState({})
    const [refresh, setRefresh] = useState(false)
    useEffect(() => {
        fetch(`https://review-assignment-eleven-server.vercel.app/reviews/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyReviewsEdit(data)
            })
            .catch(err => console.log(err))
    }, [refresh, id])

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target

        const newReview = form.review.value;

        const updateInfo = {
            newReview,
        }
        console.log(updateInfo)

        fetch(`https://review-assignment-eleven-server.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success('Review Updated successfully')
                }
            })
        .catch(err => console.log(err))
    }
    return (
        <div className='px-5 md:px-52 min-h-screen bg-zinc-800 py-16 '>
            <h3 className="font-bold text-lg text-center text-white">Type Your Update Review</h3>
            <div className='flex items-center pb-3 pl-11 md:pl-96 pt-2'>
                <img src={myReviewEdit.photo} className='h-9 w-9 rounded-full mr-3' />
                <h3 className='text-xl text-white font-semibold'>{myReviewEdit.name}</h3>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-cente'>
                <textarea type='text' name='review' defaultValue={myReviewEdit.review} className="textarea textarea-bordered  max-w-xs w-full h-32" placeholder="Review"></textarea>
                <div className="modal-action">
                    <button type='submit' className='px-5 py-2 rounded-xl bg-green-500'>submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditReview;

