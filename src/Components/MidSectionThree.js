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
      title:
        "Exploring Advanced Machine Learning",
      image: im1,
      text: "This thesis delves into the application of advanced machine learning techniques in the realm of predictive analytics. It explores various algorithms and models to enhance the accuracy and efficiency of predictive analysis in different domains.",
    },
    {
      title:
        "A Comprehensive Study on Cybersecurity",
      image: im5,
      text: "In this comprehensive study, the focus is on analyzing the evolving landscape of cybersecurity threats. The thesis provides an in-depth exploration of various cyber threats and proposes effective mitigation strategies to safeguard digital assets.",
    },
    {
      title:
        "Natural Language Processing",
      image: im2,
      text: "Unraveling the complexities of Natural Language Processing (NLP), this thesis explores advanced techniques to enhance the understanding and interpretation of human language by machines. Various applications and challenges are addressed in the study.",
    },
    {
      title: "Augmented Reality in Education",
      image: im3,
      text: "This thesis investigates the integration of augmented reality (AR) in educational settings. It explores the pedagogical aspects of using AR to enhance learning experiences, providing insights into the potential benefits and challenges of this technology.",
    },
    {
      title:
        "Data-driven Decision Making",
      image: im4,
      text: "Examining the role of big data analytics in decision-making processes, this thesis explores the impact of data-driven approaches on various industries. It discusses the challenges and opportunities associated with leveraging vast amounts of data for informed decision-making.",
    },
    {
      title:
        "Blockchain Technology",
      image: im6,
      text: "This thesis dives into the transformative power of blockchain technology. It explores how decentralization, immutability, and transparency offered by blockchain have the potential to revolutionize industries such as finance, healthcare, and supply chain.",
    },
    {
      title: "DBMS",
      image: im7,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum turpis vel velit fringilla, nec auctor augue pellentesque.",
    },
    {
      title: "Operating System",
      image: im8,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum turpis vel velit fringilla, nec auctor augue pellentesque.",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-6">
      {thesisRepositoryData.map((item)=> <CardE title={item.title} image={item.image} text={item.text}></CardE>)}
    </div>
  );
};

export default MidSectionThree;
