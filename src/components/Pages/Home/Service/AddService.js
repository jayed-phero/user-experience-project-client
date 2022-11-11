import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ScrollToTop from '../../../../hooks/Scrooling-top';
import useTitle from '../../../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')
    const [refresh, setRefresh] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const title = form.name.value;
        const image = form.photoURL.value;
        const price = form.price.value;
        const desc = form.desc.value;

        const serviceInfo = {
            title,
            image,
            price,
            desc
        }


        fetch('https://review-assignment-eleven-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service added successfully')
                    setRefresh(!refresh)
                    form.reset()
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='px-5 md:px-52 py-11 min-h-screen bg-zinc-800 flex items-center justify-center'>
            <ScrollToTop></ScrollToTop>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent border-gray-500 border-2">
                <div className="card-body ">
                    <h3 className='text-center py-2 text-3xl text-white'>Add Service</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Service Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Servicename" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">PhotoURL</span>
                            </label>
                            <input name='photoURL' type="text" placeholder="PhotoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Price</span>
                            </label>
                            <input name='price' type="price" placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Description</span>
                            </label>
                            <textarea name='desc' className="textarea textarea-bordered  max-w-xs w-full h-32" placeholder="Service Description"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn bg-green-500 hover:bg-green-700">AddService</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;