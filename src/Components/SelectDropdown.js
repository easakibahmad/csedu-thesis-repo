import React from "react";
import { Select } from "antd";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const SelectDropdown = ({ options, pValue }) => (
  <Select
    style={{
      width: "100%",
    }}
    placeholder={pValue}
    defaultValue={[options[0]]}
    onChange={handleChange}
    optionLabelProp="label"
    options={options}
  />
);
export default SelectDropdown;
