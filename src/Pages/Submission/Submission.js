import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Submission = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email } = user;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formTitleSubmitted, setFormTitleSubmitted] = useState(false);
  const [formYearSubmitted, setFormYearSubmitted] = useState(false);
  const [formCategorySubmitted, setFormCategorySubmitted] = useState(false);
  const [supervise, setSupervise] = useState(false);
  const [descriptionSubmitted, setDescriptionSubmitted] = useState(false);

  const navigate = useNavigate(); // instantiate useNavigate hook

  const [formData, setFormData] = useState({
    memberOne: displayName,
    memberTwo: "",
    email: email,
    description: "",
    publicationYear: "",
    supervisor: "",
    projectTitle: "",
    category: "",
    pdf: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    if (name === "pdf") {
      setFormData({ ...formData, pdf: files[0] });
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("memberTwo", formData.memberTwo);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("memberOne", formData.memberOne);
    formDataToSubmit.append("pdf", formData.pdf);
    formDataToSubmit.append("category", formData.category);
    formDataToSubmit.append("description", formData.description);
    formDataToSubmit.append("publicationYear", formData.publicationYear);
    formDataToSubmit.append("supervisor", formData.supervisor);
    formDataToSubmit.append("projectTitle", formData.projectTitle);
    formDataToSubmit.append("date", new Date());

    if (formData.memberTwo.trim() === "") {
      setFormSubmitted(true);
      return;
    }
    if (formData.supervisor.trim() === "") {
      setSupervise(true);
      return;
    }
    if (formData.category.trim() === "") {
      setFormCategorySubmitted(true);
      return;
    }
    if (formData.publicationYear.trim() === "") {
      setFormYearSubmitted(true);
      return;
    }
    if (formData.projectTitle.trim() === "") {
      setFormTitleSubmitted(true);
      return;
    }

    if (formData.description.trim() === "") {
      setDescriptionSubmitted(true);
      return;
    }
    navigate("/success");

    try {
      const response = await fetch("http://localhost:2000/thesisFiles", {
        method: "POST",
        body: formDataToSubmit,
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="h-14 bg-black text-center md:text-4xl text-2xl font-medium grid items-center text-white">
        Submit Project File
      </div>
      <div className="h-2 bg-yellow-500"></div>
      <div className="hero pt-6 mb-12">
        <div className="hero-content flex-row shadow-xl rounded-xl">
          <div className="card flex-shrink-0 w-full   bg-base-100">
            <form
              onSubmit={handleSubmitForm}
              encType="multipart/form-data"
              className="card-body"
            >
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <div>
                  <div className="form-control">
                    <label htmlFor="memberOne" className="label">
                      <span className="label-text">Member 1:</span>
                    </label>
                    <input
                      name="memberOne"
                      type="text"
                      placeholder="member 1"
                      value={formData.memberOne}
                      onChange={handleInputChange}
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="memberTwo" className="label">
                      <span className="label-text">Member 2:</span>
                    </label>
                    <input
                      name="memberTwo"
                      type="text"
                      placeholder="member 2"
                      className={`input input-bordered ${
                        formSubmitted && formData.memberTwo.trim() === ""
                          ? "input-error"
                          : ""
                      }`}
                      value={formData.memberTwo}
                      onChange={handleInputChange}
                    />
                    {formSubmitted && formData.memberTwo.trim() === "" && (
                      <div className="error-message">
                        This field is required.
                      </div>
                    )}
                  </div>
                  <div className="form-control">
                    <label htmlFor="email" className="label">
                      <span className="label-text">Email:</span>
                    </label>
                    <input
                      name="email"
                      type="text"
                      placeholder="email"
                      className="input input-bordered"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="supervisor" className="label">
                      <span className="label-text">Supervisor:</span>
                    </label>
                    <select
                      name="supervisor"
                      className={`select select-bordered w-full ${
                        supervise && formData.supervisor.trim() === ""
                          ? "select-error"
                          : ""
                      }`}
                      value={formData.supervisor}
                      onChange={handleInputChange}
                      supervisorSubmitted
                    >
                      <option value="Dr XYZ">Dr XYZ</option>
                      <option value="Dr ABC">Dr ABC</option>
                      <option value="Dr DEF">Dr DEF</option>
                    </select>
                    {supervise && formData.supervisor.trim() === "" && (
                      <div className="error-message text-red-600">
                        This field is required.
                      </div>
                    )}
                  </div>
                  <div className="form-control">
                    <label htmlFor="category" className="label">
                      <span className="label-text">Category:</span>
                    </label>
                    <select
                      name="category"
                      className={`select select-bordered w-full ${
                        formCategorySubmitted && formData.category.trim() === ""
                          ? "select-error"
                          : ""
                      }`}
                      value={formData.category}
                      defaultValue="Data Structure"
                      onChange={handleInputChange}
                    >
                      <option value="Data Structure">Data Structure</option>
                      <option value="Database">Database</option>
                      <option value="Programming Language">
                        Programming Language
                      </option>
                    </select>
                    {formCategorySubmitted &&
                      formData.category.trim() === "" && (
                        <div className="error-message text-red-600">
                          This field is required.
                        </div>
                      )}
                  </div>
                  <div className="form-control">
                    <label htmlFor="publicationYear" className="label">
                      <span className="label-text">Publication year:</span>
                    </label>
                    <select
                      name="publicationYear"
                      className={`select select-bordered w-full ${
                        formYearSubmitted &&
                        formData.publicationYear.trim() === ""
                          ? "select-error"
                          : ""
                      }`}
                      value={formData.publicationYear}
                      onChange={handleInputChange}
                    >
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                    </select>
                    {formYearSubmitted &&
                      formData.publicationYear.trim() === "" && (
                        <div className="error-message text-red-600">
                          This field is required.
                        </div>
                      )}
                  </div>
                </div>
                <div>
                  <div className="form-control">
                    <label htmlFor="projectTitle" className="label">
                      <span className="label-text">Project title:</span>
                    </label>
                    <input
                      name="projectTitle"
                      type="text"
                      placeholder="project title"
                      // className="input input-bordered"
                      className={`input input-bordered ${
                        formTitleSubmitted &&
                        formData.projectTitle.trim() === ""
                          ? "input-error"
                          : ""
                      }`}
                      value={formData.projectTitle}
                      onChange={handleInputChange}
                    />
                    {formTitleSubmitted &&
                      formData.projectTitle.trim() === "" && (
                        <div className="error-message">
                          This field is required.
                        </div>
                      )}
                  </div>
                  <div className="form-control">
                    <label htmlFor="abstract" className="label">
                      <span className="label-text">Description:</span>
                    </label>
                    <textarea
                      name="description"
                      placeholder="short description of your project"
                      className={`textarea textarea-bordered textarea-md w-full ${
                        descriptionSubmitted &&
                        formData.description.trim() === ""
                          ? "textarea-error"
                          : ""
                      }`}
                      value={formData.description}
                      onChange={handleInputChange}
                    ></textarea>
                    {descriptionSubmitted &&
                      formData.description.trim() === "" && (
                        <div className="error-message">
                          This field is required.
                        </div>
                      )}
                  </div>

                  <div className="form-control">
                    <label htmlFor="pdf" className="label">
                      <span className="label-text">File (.pdf):</span>
                    </label>
                    <input
                      name="pdf"
                      type="file"
                      className={`file-input file-input-bordered file-input-accent w-full max-w-xs `}
                      onChange={handleFileChange}
                    />
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
