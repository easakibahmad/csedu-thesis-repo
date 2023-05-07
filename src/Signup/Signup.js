import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser, updateUser, signInWithGooglePopUp } =
    useContext(AuthContext);

  const [signupError, setSignupError] = useState("");

  const navigate = useNavigate();
  // const location = useLocation();

  // const from = location.state?.from?.pathname || "/";

  const handleSignup = (data) => {
    console.log(data);
    setSignupError("");
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        toast("User created!!");
        const userDataFromForm = {
          email: data.email,
          registrationNo: data.registration,
          batch: data.batch,
          userName: data.name,
        };
        console.log(userDataFromForm);
        fetch("http://localhost:4000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
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

  // const handleSignInWithGoogle = () => {
  //   signInWithGooglePopUp()
  //     .then((res) => {
  //       toast("signed in!");
  //       console.log(res.user);
  //       navigate(from, { replace: true });
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  return (
    <div className="m-16 md:w-1/3  w-2/3 mx-auto">
      <h1 className="text-4xl text-info font-bold text-center">Signup</h1>

      <form
        onSubmit={handleSubmit(handleSignup)}
        className="grid grid-cols-1 gap-3"
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name:</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="type your name"
            className="input input-bordered w-full rounded"
            {...register("name", { required: "name is required" })}
          />
          {errors.name && (
            <p className="text-rose-500">{errors.name?.message}</p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Registration No:</span>
          </label>
          <input
            name="registration"
            type="number"
            placeholder="2018725357"
            className="input input-bordered w-full rounded"
            {...register("registration", {
              required: "registration no is required",
            })}
          />
          {errors.registration && (
            <p className="text-rose-500">{errors.registration?.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Batch:</span>
          </label>
          <select
            name="batch"
            className="select select-bordered w-full "
            {...register("batch", {
              required: "batch is required",
            })}
          >
            <option value="25th">25th</option>
            <option value="24th">24th</option>
            <option value="23th">23th</option>
          </select>
          {errors.batch && (
            <p className="text-rose-500">{errors.batch?.message}</p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Your Email:</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="type your email"
            className="input input-bordered w-full rounded"
            {...register("email", { required: "email is required" })}
          />
          {errors.email && (
            <p className="text-rose-500">{errors.email?.message}</p>
          )}
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Your Password:</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="type your password"
            className="input input-bordered w-full rounded"
            {...register("password", {
              required: "password is required",
            })}
          />
          {errors.password && (
            <p className="text-rose-500">{errors.password?.message}</p>
          )}
        </div>
        <input className="btn btn-accent rounded" value="Login" type="submit" />
        <>{signupError && <p className="text-rose-500">{signupError}</p>}</>
        <p className="mt-3">
          Already Has an Account? please{" "}
          <Link className="text-info" to="/login">
            Signup
          </Link>{" "}
          first!!
        </p>
        {/* <div className="divider">OR</div> */}
        {/* <div
          className="btn btn-accent w-full rounded"
          onClick={handleSignInWithGoogle}
        >
          continue with google
        </div> */}
      </form>
    </div>
  );
};

export default Signup;
