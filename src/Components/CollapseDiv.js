import React from "react";
import { Collapse } from "antd";
// import { ImCircleDown } from "react-icons/im";
import { HiChevronDown } from "react-icons/hi2";

import { ImArrowDown } from "react-icons/im";

const items = [
  {
    key: "1",
    label: (
      <p className="text-white flex items-center gap-4 md:text-xl text-md">
        <HiChevronDown></HiChevronDown> Welcome to CSEDU Thesis Repository
      </p>
    ),
    children: (
      <p className="text-white">
        The CSEDU Thesis Repository is a comprehensive collection of academic
        dissertations, showcasing the research and scholarly work of students in
        the field of Computer Science and Engineering at our institution.
        Explore a wealth of knowledge, innovative ideas, and groundbreaking
        research in this repository.
      </p>
    ),
  },
  {
    key: "2",
    label: (
      <p className="text-white flex items-center gap-4 md:text-xl text-md">
        <HiChevronDown></HiChevronDown>Research Areas Covered
      </p>
    ),
    children: (
      <p className="text-white">
        Our repository covers a wide range of research areas within Computer
        Science and Engineering. From artificial intelligence to software
        engineering, explore diverse topics and stay informed about the latest
        advancements in the field.
      </p>
    ),
  },
  {
    key: "3",
    label: (
      <p className="text-white flex items-center gap-4 md:text-xl text-md">
        <HiChevronDown></HiChevronDown>Contributing to the Repository
      </p>
    ),
    children: (
      <p className="text-white">
        Are you a student or researcher at CSEDU? Consider contributing your
        thesis to the repository and become part of this growing knowledge hub.
        Share your insights and contribute to the academic community.
      </p>
    ),
  },
];

const CollapseDiv = () => (
  <div style={{ background: "#00629B" }} >
    <Collapse
      expandIcon={({ isActive }) =>
        isActive ? (
          null
        ) : (
          null
        )
      }
      expandIconPosition="center"
      items={items}
      bordered={false}
    />
  </div>
);
export default CollapseDiv;
