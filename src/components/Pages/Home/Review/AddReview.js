import React from 'react';

const AddReview = () => {
    return (
        <div className=''>
            <div className='max-w-xs'>
                <form>
                    <textarea className="textarea bg-transparent textarea-accent h-32 w-full max-w-xs" placeholder="Type your Review"></textarea>
                    <button className='w-full py-2 hover:bg-green-700 duration-300 ease-in bg-green-500 text-white rounded-lg mt-2'>Add Review</button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;