import React from "react";
import im1 from "../Assets/Images/7.jpeg"
import im2 from "../Assets/Images/8.webp"
import im3 from "../Assets/Images/9.jpeg"
import im4 from "../Assets/Images/10.jpeg"
import im5 from "../Assets/Images/11.jpeg"
import im6 from "../Assets/Images/12.jpeg"
import im7 from "../Assets/Images/13.jpeg"
import im8 from "../Assets/Images/14.jpeg"
import CardE from "./CardE";

const MidSectionThree = () =>
{
  const thesisRepositoryData = [
  {
    title: "Predictive Analytics with Advanced ML",
    image: im1,
    text: "Explore the application of advanced machine learning techniques for more accurate predictive analytics in various domains.",
  },
  {
    title: "Cybersecurity Threats and Mitigation",
    image: im5,
    text: "A comprehensive study on evolving cybersecurity threats, providing effective mitigation strategies to safeguard digital assets.",
  },
  {
    title: "Understanding NLP Complexity",
    image: im2,
    text: "Unravel the complexities of Natural Language Processing, exploring advanced techniques for enhanced language interpretation by machines.",
  },
  {
    title: "AR in Education: A Pedagogical Approach",
    image: im3,
    text: "Investigate the integration of augmented reality in educational settings, focusing on pedagogical aspects to enhance learning experiences.",
  },
  {
    title: "Data-driven Decision Making",
    image: im4,
    text: "Examine the role of big data analytics in decision-making processes, discussing challenges and opportunities in leveraging vast amounts of data.",
  },
  {
    title: "Blockchain Technology: Transforming Industries",
    image: im6,
    text: "Explore the transformative power of blockchain technology and its potential to revolutionize industries through decentralization and transparency.",
  },
  {
    title: "Renewable Energy Integration in Smart Grids",
    image: im7,
    text: "Examine challenges and solutions in integrating renewable energy sources into smart grids for optimizing sustainability.",
  },
  {
    title: "HCI: Enhancing User Experience",
    image: im8,
    text: "Focus on Human-Computer Interaction principles to enhance user experience in interactive systems through effective design and usability testing.",
  },
];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-6 gap-16">
      {thesisRepositoryData.map((item)=> <CardE title={item.title} image={item.image} text={item.text}></CardE>)}
    </div>
  );
};

export default MidSectionThree;
