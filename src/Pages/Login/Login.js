import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { LiaAngleDoubleRightSolid } from "react-icons/lia";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { signIn } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    setLoginError("");
    console.log(data);
    signIn(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        setLoginError(err.message);
      });
  };

  return (
    <div
      style={{ backgroundColor: "#e5e5e5", height: "100vh" }}
      className="md:px-24 md:py-16 p-6 "
    >
      <div className=" pb-6 mx-auto w-3/5 " style={{ backgroundColor: "#fff" }}>
        <div style={{ backgroundColor: "#00629B" }} className="p-4">
          <h1 className="text-md text-white  font-bold">
            CSEDU Thesis Repository - Sign in to access the secure content
          </h1>
        </div>

        <div className="m-6 border">
          <div style={{ backgroundColor: "#767676" }} className="px-4 py-2">
            <h1 className="text-md text-white font-bold">Login</h1>
          </div>
          <form
            className="grid grid-cols-1 gap-3 p-2"
            onSubmit={handleSubmit(handleLogin)}
          >
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email Address:</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered md:w-3/5 w-full rounded focus:ring-0 focus:outline-none"
                {...register("email", { required: "Email is required" })}
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
                placeholder="Password"
                className="input input-bordered md:w-3/5 w-full rounded focus:ring-0 focus:outline-none"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              {errors.password && (
                <p className="text-rose-500">{errors.password?.message}</p>
              )}
            </div>
            <div className="flex justify-end gap-3">
              <input
                style={{
                  backgroundColor: "#e37222",
                }}
                className="focus:outline-none w-24 rounded py-1 text-white hover:text-blue-600"
                type="submit"
                // className="btn btn-accent rounded focus:ring-2 focus:ring-accent focus:outline-none"
                value="Sign In"
              />
              <p className=" flex gap-2 my-auto" style={{ fontSize: "13px" }}>
                New here? Please{" "}
                <Link
                  style={{ color: "#00629B" }}
                  className=" flex items-center gap-1 hover:underline"
                  to="/signup"
                >
                  Create Account
                  <LiaAngleDoubleRightSolid />
                </Link>
              </p>
            </div>
            <>{loginError && <p className="text-red-500">{loginError}</p>}</>

            {/* <div className="divider">OR</div>
        <div className="btn btn-accent w-full rounded">
          continue with google
        </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
