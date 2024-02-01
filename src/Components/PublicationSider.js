import React, { useState } from "react";
import { FaRegCalendarAlt, FaTh, FaUser, FaLayerGroup } from "react-icons/fa";


import { Menu } from "antd";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Year", "sub1", <FaRegCalendarAlt></FaRegCalendarAlt>, [
    getItem("2022", "1"),
    getItem("2021", "2"),
    getItem("2020", "3"),
    getItem("2019", "4"),
  ]),
  getItem("Categories", "sub2", <FaTh></FaTh>, [
    getItem("Blockchain Technology", "52"),
    getItem("Cloud Computing", "53"),
    getItem("Cybersecurity", "54"),
    getItem("Computer Vision and Image Processing", "55"),
    getItem("Data Mining", "56"),
    getItem("Human-Computer Interaction (HCI)", "57"),
    getItem("Internet of Things (IoT)", "58"),
    getItem("Machine Learning", "59"),
    getItem("Natural Language Processing (NLP)", "60"),
    getItem("Robotics and Autonomous Systems", "61"),
    getItem("Software Engineering", "62"),
  ]),
  getItem("Author", "sub3", <FaUser></FaUser>, [
      getItem("Dr. Sarker Tanveer Ahmed Rumee", "9"),
      getItem("Dr. Md. Mamun-or-Rashid", "10"),
      getItem("Dr. Mosaddek Hossain Kamal", "11"),
      getItem("Md. Abu Ahmed Ferdaus", "12"),
  ]),
  getItem("Batch", "sub4", <FaLayerGroup></FaLayerGroup>, [
    getItem("25th", "13"),
    getItem("24th", "14"),
    getItem("23rd", "15"),
    getItem("22nd", "16"),
  ]),
];

const rootSubmenuKeys = [ "sub1", "sub2","sub3", "sub4" ];



const PublicationSider = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Menu
      style={{ background: "#fff", color: "#006699" }}
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      items={items}
      activeClassName="activeMenuItem"
    />
  );
};
export default PublicationSider;
