import React from "react";
import { Input } from "antd";
const { TextArea } = Input;
const ATextArea = ({ absText }) => {
  return (
    <>
      <div
        style={{
          margin: "24px 0",
        }}
      />
      <TextArea
        placeholder={absText}
        autoSize={{
          minRows: 2,
          maxRows: 6,
        }}
      />
    </>
  );
};
export default ATextArea;
