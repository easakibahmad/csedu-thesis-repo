// import React, { useContext } from "react";
import { useState } from "react";
// import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Submission = () => {
  // const { user } = useContext(AuthContext);
  // const { displayName, email } = user;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formTitleSubmitted, setFormTitleSubmitted] = useState(false);
  const [formYearSubmitted, setFormYearSubmitted] = useState(false);
  const [formCategorySubmitted, setFormCategorySubmitted] = useState(false);
  const [supervise, setSupervise] = useState(false);
  const [descriptionSubmitted, setDescriptionSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [memberOneError, setMemberOneError] = useState(false);
  const [emailUser, setEmailUser] = useState(false);

  const navigate = useNavigate(); // instantiate useNavigate hook

  const [formData, setFormData] = useState({
    memberOne: "",
    memberTwo: "",
    email: "",
    description: "",
    publicationYear: "",
    supervisor: "",
    projectTitle: "",
    category: "",
    pdf: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) {
      setError("Please select a file");
    } else if (selectedFile.type !== "application/pdf") {
      setError("Please select a PDF file");
    } else {
      setFormData({ ...formData, pdf: selectedFile });
      setError("");
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

    if (formData.memberOne.trim() === "") {
      setMemberOneError(true);
      return;
    }
    if (formData.memberTwo.trim() === "") {
      setFormSubmitted(true);
      return;
    }
    if (formData.email.trim() === "") {
      setEmailUser(true);
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
      const response = await fetch(
        "https://csedut-hesis-repository-server.vercel.app/thesisFiles",
        {
          method: "POST",
          body: formDataToSubmit,
        }
      );
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
                      placeholder="Enter Name of Member 1"
                      value={formData.memberOne}
                      onChange={handleInputChange}
                      className={`input input-bordered ${
                        memberOneError && formData.memberOne.trim() === ""
                          ? "input-error"
                          : ""
                      }`}
                    />
                    {memberOneError && formData.memberOne.trim() === "" && (
                      <div className="error-message">
                        This field is required.
                      </div>
                    )}
                  </div>
                  <div className="form-control">
                    <label htmlFor="memberTwo" className="label">
                      <span className="label-text">Member 2:</span>
                    </label>
                    <input
                      name="memberTwo"
                      type="text"
                      placeholder="Enter Name of Member 2"
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
                      placeholder="Email"
                      className={`input input-bordered ${
                        emailUser && formData.email.trim() === ""
                          ? "input-error"
                          : ""
                      }`}
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {emailUser && formData.email.trim() === "" && (
                      <div className="error-message">
                        This field is required.
                      </div>
                    )}
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
                      <option value="Dr. Sarker Tanveer Ahmed Rumee">
                        Dr. Sarker Tanveer Ahmed Rumee
                      </option>
                      <option value="Dr. Md. Mamun-or-Rashid">
                        Dr. Md. Mamun-or-Rashid
                      </option>
                      <option value="Dr. Mosaddek Hossain Kamal">
                        Dr. Mosaddek Hossain Kamal
                      </option>
                      <option value="Dr. Upama Kabir">Dr. Upama Kabir</option>
                      <option value="Dr. Chowdhury Farhan Ahmed">
                        Dr. Chowdhury Farhan Ahmed
                      </option>
                      <option value="Md. Fahim Arefin">Md. Fahim Arefin</option>
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
                      <option value="Blockchain Technology">
                        Blockchain Technology
                      </option>
                      <option value="Cloud Computing">Cloud Computing</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="Computer Vision and Image Processing">
                        Computer Vision and Image Processing
                      </option>
                      <option value="Data Mining">Data Mining</option>
                      <option value="Human-Computer Interaction (HCI)">
                        Human-Computer Interaction (HCI)
                      </option>
                      <option value="Internet of Things (IoT)">
                        Internet of Things (IoT)
                      </option>
                      <option value="Machine Learning">Machine Learning</option>
                      <option value="Natural Language Processing (NLP)">
                        Natural Language Processing (NLP)
                      </option>
                      <option value="Robotics and Autonomous Systems">
                        Robotics and Autonomous Systems
                      </option>
                      <option value="Software Engineering">
                        Software Engineering
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
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
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
                      placeholder="Project Title"
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
                      <span className="label-text">Abstract:</span>
                    </label>
                    <textarea
                      name="description"
                      placeholder="Short description of your project"
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
