import thirty from "../Assets/Images/30year.jpg";
import cseduLogo from "../Assets/Images/cseduLogo.png";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useState } from "react";
import { toast } from "react-hot-toast";
import NavHomeLogo from "../Components/NavHomeLogo";
import { LiaAngleDoubleRightSolid } from "react-icons/lia";
import "./Signup.css"
import StyledInput from "../Components/StyledInput";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);

  const [signupError, setSignupError] = useState("");

  const navigate = useNavigate();

  const handleSignup = (data) => {
    console.log(data);
    setSignupError("");
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        toast.success("User created!!");
        const userDataFromForm = {
          email: data.email,
          registrationNo: data.registration,
          batch: data.batch,
          userName: data.name,
        };
        console.log(userDataFromForm);
        fetch("https://csedut-hesis-repository-server.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDataFromForm),
        });
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.log(error.message);
        setSignupError(error.message);
      });
  };

  const termsAccepted = watch("termsAccepted");

  return (
    <div
      style={{ backgroundColor: "#e5e5e5", height: "100vh" }}
      className="md:px-24 md:py-16 p-6 "
    >
      <div className=" p-6 mx-auto" style={{ backgroundColor: "#fff" }}>
        <div>
          <NavHomeLogo Thirty={thirty} cseduLogo={cseduLogo}></NavHomeLogo>
          <div className=" mt-4 top-0 right-0 w-full h-0.5 bg-gray-300"></div>
        </div>
        <div className=" mt-6 flex justify-between items-center">
          <div>
            <p style={{ color: "#00629B" }} className="text-md font-bold">
              Create a CSEDU Thesis Repository Account
            </p>
          </div>
          <div>
            <p
              className="mt-3 items-center text-center flex gap-2 text-sm"
              style={{ fontSize: "13px" }}
            >
              Already have a CSEDU Thesis Repository account?
              <Link
                style={{ color: "#00629B" }}
                className=" flex items-center gap-1 hover:underline"
                to="/login"
              >
                Sign In
                <LiaAngleDoubleRightSolid />
              </Link>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 my-6 md:grid-cols-2 gap-8 ">
          <div className="md:col-span-1 ">
            <form
              onSubmit={handleSubmit(handleSignup)}
              className="grid grid-cols-1 gap-4"
            >
              <div className="form-control">
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="focus:placeholder-opacity-0 border-black placeholder-opacity-100 focus:outline-none input input-bordered w-full rounded"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name?.message}</p>
                )}
              </div>
              <div className="form-control">
                <input
                  name="registration"
                  type="number"
                  placeholder="University Registration Number (Ex: 2018125353)"
                  className="focus:outline-none input border-black input-bordered w-full rounded"
                  {...register("registration", {
                    required: "Registration no is required",
                  })}
                />
                {errors.registration && (
                  <p className="text-red-500">{errors.registration?.message}</p>
                )}
              </div>
              <div className="form-control">
                <select
                  name="batch"
                  className="focus:outline-none border-black select select-bordered w-full rounded"
                  {...register("batch", {
                    required: "Batch is required",
                  })}
                >
                  <option value="25th">25th</option>
                  <option value="24th">24th</option>
                  <option value="23rd">23rd</option>
                  <option value="22nd">22nd</option>
                  <option value="21st">21st</option>
                  <option value="20th">20th</option>
                </select>
                {errors.batch && (
                  <p className="text-red-500">{errors.batch?.message}</p>
                )}
              </div>
            </form>
          </div>
          <div className="md:col-span-1">
            <form
              onSubmit={handleSubmit(handleSignup)}
              className="grid grid-cols-1 gap-4"
            >
              <div className="form-control">
                <input
                  name="email"
                  type="email"
                  placeholder="Type Your Email"
                  className="focus:outline-none border-black input input-bordered w-full rounded"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email?.message}</p>
                )}
              </div>
              <div className="form-control">
                <input
                  name="password"
                  type="password"
                  placeholder="Type Your Password"
                  className="input focus:outline-none border-black input-bordered w-full rounded"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password?.message}</p>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className=" top-0 right-0 w-full h-0.5 bg-gray-300"></div>

        <div className="flex justify-end mt-4">
          <form
            onSubmit={handleSubmit(handleSignup)}
            className="grid grid-cols-1 gap-2"
          >
            <div className="form-control">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  {...register("termsAccepted", {
                    required: "You must accept the terms",
                  })}
                />
                <span
                  className="focus:outline-none ml-2 text-gray-600"
                  style={{ fontSize: "13px" }}
                >
                  I accept the terms and services
                </span>
              </label>
            </div>
            <div className="form-control">
              <button
                style={{
                  background: termsAccepted ? "#e37222" : "#ccc",
                }}
                className="focus:outline-none w-36 rounded py-1 text-white hover:text-blue-600"
                type="submit"
                disabled={!termsAccepted}
              >
                Create Account
              </button>
            </div>
            {signupError && <p className="text-red-500">{signupError}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
