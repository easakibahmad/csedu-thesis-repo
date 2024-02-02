import React from "react";
import "../Styles/Form.css";
import SelectDropdown from "./SelectDropdown";
import ATextArea from "./ATextArea";

const categoryOptions = [
  {
    label: "Computer Graphics",
    value: "computerGraphics",
  },
  {
    label: "Cryptography",
    value: "cryptography",
  },
  {
    label: "Database Management System",
    value: "databaseManagementSystem",
  },
];

const supervisorsOptions = [
  {
    label: "Mr. Abu Ahmed Ferdaus",
    value: "abuAhmedFerdaus",
  },
  {
    label: "Dr. Mosaddek Hossain Khan Tushar",
    value: "mosaddekHossainKhanTushar",
  },
  {
    label: "Dr. Md Mamunur Rashid",
    value: "mdMamunurRashid",
  },
];

const publicationYearOptions = [
  { label: "2023", value: "2023" },
  { label: "2022", value: "2022" },
  { label: "2021", value: "2021" },
  { label: "2020", value: "2020" },
  { label: "2019", value: "2019" },
];
const SubmitForm = () => {
  return (
    <div className="container w-cover md:my-8">
      <div className="text">Submit Your Repository</div>
      <form action="#">
        <div className="form-row">
          <div className="input-data">
            <input
              type="text"
              required
              style={{ borderBottom: "1px solid #000", outline: "none" }}
            />
            <div className="underline"></div>
            <label htmlFor="">Member 1</label>
          </div>
          <div className="input-data">
            <input
              type="text"
              required
              style={{ borderBottom: "1px solid #000", outline: "none" }}
            />
            <div className="underline"></div>
            <label htmlFor="">Member 2</label>
          </div>
        </div>
        <div className="form-row items-center">
          <div className="input-data">
            <input
              type="text"
              required
              style={{ borderBottom: "1px solid #000", outline: "none" }}
            />
            <div className="underline"></div>
            <label htmlFor="">Email Address</label>
          </div>
          <SelectDropdown
            options={categoryOptions}
            pValue="Select category"
          ></SelectDropdown>
        </div>
              <div className="form-row gap-3">
                  
          <SelectDropdown
            options={supervisorsOptions}
            pValue="Select supervisor"
          ></SelectDropdown>

          <SelectDropdown
            options={publicationYearOptions}
            pValue="Select publication year"
          ></SelectDropdown>
        </div>
        <div className="form-row items-center">
          <div className="input-data">
            <input
              type="text"
              required
              style={{ borderBottom: "1px solid #000", outline: "none" }}
            />
            <div className="underline"></div>
            <label htmlFor="">Project Title</label>
          </div>
            <ATextArea absText="Write your project abstract..."></ATextArea>
        </div>
        <div className="form-row md:w-2/5">
          <div className="input-data file-input">
            <input
              type="file"
              className="file-input-bordered file-input-accent w-full max-w-xs"
            />
            <div className="underline"></div>
            <label htmlFor="">File (.pdf)</label>
          </div>
        </div>
        <div className="form-row submit-btn justify-end">
          <div className="input-data">
            <div className="inner"></div>
            <input type="submit" value="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SubmitForm;
