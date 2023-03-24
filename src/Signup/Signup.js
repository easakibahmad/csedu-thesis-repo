import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
      } = useForm();
    return (
        <div className='m-16 md:w-1/3  w-2/3 mx-auto'>
            <h1 className='text-4xl text-info font-bold text-center'>Signup</h1>

            <form
       
        className="grid grid-cols-1 gap-3"
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name:</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder='type your name'
            className="input input-bordered w-full rounded"
            {...register("name", { required: "name is required" })}
          />
          
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Your Email:</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder='type your email'
            className="input input-bordered w-full rounded"
            {...register("email", { required: "email is required" })}
          />
          
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Your Password:</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder='type your password'
            className="input input-bordered w-full rounded"
            {...register("password", {
              required: "password is required",
            
            })}
          />
         
        </div>
        <input className="btn btn-accent rounded" value="Login" type="submit" />

        <p className="mt-3">
          Already Has an Account? please{" "}
          <Link className="text-info" to="/login">
            Login
          </Link>{" "}
          first!!
        </p>
        <div className="divider">OR</div>
        <div
          className="btn btn-accent w-full rounded"
        >
          continue with google
        </div>
      </form>
        </div>
    );
};

export default Signup;