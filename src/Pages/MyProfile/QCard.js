import React from "react";
import { Link } from "react-router-dom";

const QCard = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <div>
        <h1 className="font-bold text-sm md:text-xl">
          Dr. Mosaddek Hossain Kamal
        </h1>
        <p className="text-sm">
          Also published under:{" "}
          <Link className="underline text-sm text-blue-500">L. Cheng</Link>
        </p>
      </div>
      <div>
        <h1 className="font-bold text-sm md:text-xl">Affiliation</h1>
        <p className="text-sm">
          School of Artificial Intelligence <br />
          University of Chinese Academy of Sciences <br />
          Beijing, China
        </p>
      </div>
      <div>
        <h1 className="font-bold text-sm md:text-xl">Publication Topics</h1>
        <p className="text-sm">
          Neural Network,Interaction Forces,Adaptive Control,Autonomous
          Underwater Vehicles,Force Sensor,Inverse Reinforcement
          Learning,Nonlinear Systems,System Dynamics,Asymptotically
          Stable,Critic Network,Long Short-term Memory,Optimal Control,Proximal
          Interphalangeal,Tracking Control,Tracking Error,3D Printing,Arc
          Length,Caudal Fin,Central Pattern Generator,Classification
          Accuracy,Control Method,Force Control,Fuzzy Control,Hand
          Movements,Hand Position{" "}
          <Link className="underline text-sm text-blue-500">Show More</Link>
        </p>
      </div>
      <div>
        <h1 className="font-bold text-sm md:text-xl">Biography</h1>
        <p className="text-sm">
          Long Cheng (Fellow, IEEE) received the B.S. degree (Hons.) in control
          engineering from Nankai University, Tianjin, China, in 2004, and the
          Ph.D. degree (Hons.) in control theory and control engineering from
          the Institute of Automation, Chinese Academy of Sciences, Beijing,
          China, in 2009. He is currently a Professor with the State Key
          Laboratory of Multimodal Artificial Intelligence Systems, Institute of
          Automation, Chinese Academy of Sciences. He is also a Professor with
          the University of Chinese Academy of Sciences, Beijing. He has
          published more than 100 technical papers in peer-refereed journals and
          prestigious conference proceedings. His research interests include
          rehabilitation robot, intelligent control, and neural networks. Dr.
          Chen... <Link className="underline text-blue-500">Show More</Link>
        </p>
      </div>
    </div>
  );
};

export default QCard;
