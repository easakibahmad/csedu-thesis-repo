import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Submission = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const handleSignup = (data) => {
    // console.log(data);

    const thesisInfo = {
      email: data.email,
      abstract: data.abstract,
      category: data.category,
      memberOne: data.memberOne,
      memberTwo: data.memberTwo,
      projectTitle: data.projectTitle,
      publicationYear: data.publicationYear,
      supervisor: data.supervisor,
      pdfFile: data.pdf,
      latexFile: data.latex,
      date: new Date(),
    };
    fetch("http://localhost:4000/thesisFiles", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(thesisInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // toast.success("submission successfully done!!");
        navigate("/");
        console.log(data);
      });

    // 
  };
  // const [signupError, setSignupError] = useState("");
  return (
    <div>
      <div className="h-14 bg-black text-center md:text-4xl text-2xl font-medium grid items-center text-white">
        Submit Project File
      </div>
      <div className="h-2 bg-yellow-500"></div>
      <div className="hero pt-6 mb-12">
        <div className="hero-content flex-row shadow-xl rounded-xl">
          <div className="card flex-shrink-0 w-full   bg-base-100">
            <form onSubmit={handleSubmit(handleSignup)} className="card-body">
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Member 1:</span>
                    </label>
                    <input
                      name="memberOne"
                      type="text"
                      placeholder="member 1"
                      className="input input-bordered"
                      {...register("memberOne", {
                        required: "member 1 is required",
                      })}
                    />
                    {errors.memberOne && (
                      <p className="text-rose-500">
                        {errors.memberOne?.message}
                      </p>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Member 2:</span>
                    </label>
                    <input
                      name="memberTwo"
                      type="text"
                      placeholder="member 2"
                      className="input input-bordered"
                      {...register("memberTwo", {
                        required: "member 2 is required",
                      })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email:</span>
                    </label>
                    <input
                      name="email"
                      type="text"
                      placeholder="email"
                      className="input input-bordered"
                      {...register("email", { required: "email is required" })}
                    />
                    {errors.email && (
                      <p className="text-rose-500">{errors.email?.message}</p>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Supervisor:</span>
                    </label>
                    <select
                      name="supervisor"
                      className="select select-bordered w-full"
                      {...register("supervisor", {
                        required: "supervisor is required",
                      })}
                    >
                      <option value="option one">option one</option>
                      <option value="option one">option two</option>
                      <option value="option one">option three</option>
                    </select>
                    {errors.supervisor && (
                      <p className="text-rose-500">
                        {errors.supervisor?.message}
                      </p>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Category:</span>
                    </label>
                    <select
                      name="category"
                      className="select select-bordered w-full "
                      {...register("category", {
                        required: "category is required",
                      })}
                    >
                      <option value="option one">option one</option>
                      <option value="option one">option two</option>
                      <option value="option one">option three</option>
                    </select>
                    {errors.category && (
                      <p className="text-rose-500">
                        {errors.category?.message}
                      </p>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Publication year:</span>
                    </label>
                    <select
                      name="publicationYear"
                      className="select select-bordered w-full "
                      {...register("publicationYear", {
                        required: "publication year is required",
                      })}
                    >
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                    </select>
                    {errors.publicationYear && (
                      <p className="text-rose-500">
                        {errors.publicationYear?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Project title:</span>
                    </label>
                    <input
                      name="projectTitle"
                      type="text"
                      placeholder="member 1"
                      className="input input-bordered"
                      {...register("projectTitle", {
                        required: "project title is required",
                      })}
                    />
                    {errors.projectTitle && (
                      <p className="text-rose-500">
                        {errors.projectTitle?.message}
                      </p>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Abstract:</span>
                    </label>
                    <textarea
                      name="abstract"
                      placeholder="Bio"
                      className="textarea textarea-bordered textarea-md w-full"
                      {...register("abstract", {
                        required: "abstract is required",
                      })}
                    ></textarea>
                    {errors.abstract && (
                      <p className="text-rose-500">
                        {errors.abstract?.message}
                      </p>
                    )}
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">File (.pdf):</span>
                    </label>
                    <input
                      name="pdf"
                      type="file"
                      className="file-input file-input-bordered file-input-accent w-full max-w-xs"
                      {...register("pdf", { required: "pdf file is required" })}
                    />
                    {errors.pdf && (
                      <p className="text-rose-500">{errors.pdf?.message}</p>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">File (.latex):</span>
                    </label>
                    <input
                      name="latex"
                      type="file"
                      className="file-input file-input-bordered file-input-accent w-full max-w-xs"
                      {...register("latex", {
                        required: "latex file is required",
                      })}
                    />
                    {errors.latex && (
                      <p className="text-rose-500">{errors.latex?.message}</p>
                    )}
                  </div>
                </div>
              </div>

              <input
                className="btn btn-accent rounded"
                value="Submit"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submission;
