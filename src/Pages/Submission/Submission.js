import React from "react";

const Submission = () => {
  return (
    <div>
      <div className="h-14 bg-black text-center md:text-4xl text-2xl font-medium grid items-center text-white">
        Submit Project File
      </div>
      <div className="h-2 bg-yellow-500"></div>
      <div className="hero pt-6 mb-12">
        <div className="hero-content flex-row shadow-xl rounded-xl">
          <div className="card flex-shrink-0 w-full   bg-base-100">
            <div className="card-body">
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Member 1:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="member 1"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Member 2:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="member 2"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Supervisor:</span>
                    </label>
                    <select
                      name="slot"
                      className="select select-bordered w-full "
                    >
                      <option value="option one">option one</option>
                      <option value="option one">option two</option>
                      <option value="option one">option three</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Category:</span>
                    </label>
                    <select
                      name="slot"
                      className="select select-bordered w-full "
                    >
                      <option value="option one">option one</option>
                      <option value="option one">option two</option>
                      <option value="option one">option three</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Publication year:</span>
                    </label>
                    <select
                      name="slot"
                      className="select select-bordered w-full "
                    >
                      <option value="option one">2022</option>
                      <option value="option one">2021</option>
                      <option value="option one">2020</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Project title:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="member 1"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Abstract:</span>
                    </label>
                    <textarea
                      placeholder="Bio"
                      className="textarea textarea-bordered textarea-md w-full"
                    ></textarea>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">File (.pdf):</span>
                    </label>
                    <input
                      type="file"
                      className="file-input file-input-bordered file-input-accent w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">File (.latex):</span>
                    </label>
                    <input
                      type="file"
                      className="file-input file-input-bordered file-input-accent w-full max-w-xs"
                    />
                  </div>
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submission;
