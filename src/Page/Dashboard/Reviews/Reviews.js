import React from 'react'
import useAuth from '../../../Hook/useAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ReviewUser = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/ratting', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product Added Successfully');
                    reset();
                }
            })
    }

    return (
        <div className="">
            <div className="w-50 mx-auto shadow-lg p-3 mb-5 bg-white rounded py-5">
                <h2 className="mb-4 text-primary"> Add Your Valuable Ratting </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <input {...register("img")} placeholder="Your Photo URL" className="w-75 form-control mx-auto" /> <br /> */}
                    <input {...register("name")} defaultValue={user.displayName} placeholder="Your Name" className="w-75 form-control mx-auto" /> <br />

                    <input type="number" {...register("rating")} placeholder="Type Ratting Number 1-5" className="w-75 form-control mx-auto" /> <br />

                    <textarea {...register("describe")} placeholder="Description" className="w-75 form-control mx-auto addProductTextarea" /> <br />

                    <input type="submit" className="btn btn-primary px-5 fs-5 w-75 mt-3" />
                </form>
            </div>
        </div>
    )
}

export default ReviewUser