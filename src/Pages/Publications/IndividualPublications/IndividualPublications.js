import React, { useEffect, useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useLoaderData } from "react-router-dom";
import { BsArrowsFullscreen } from "react-icons/bs";

const IndividualPublications = () => {

  const individualData = useLoaderData();
  console.log(individualData);
  const {
    projectTitle,
    description,
    memberOne,
    memberTwo,
    supervisor,
    publicationYear,
    date,
    category,
    _id,
  } = individualData[0];

  const [thesisPdf, setThesisPdf] = useState("");
  useEffect(() => {
    fetch(
      `https://csedut-hesis-repository-server.vercel.app/oneThesisFile/${_id}`
    )
      .then((res) => res.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setThesisPdf(url);
      });
  }, [_id]);
  console.log(thesisPdf);

  const getFilePluginInstance = getFilePlugin();
  const { DownloadButton } = getFilePluginInstance;

  const toggleFullScreen = () => {
    const viewerElement = document.querySelector(".rpv-core__viewer");
    if (viewerElement) {
      if (viewerElement.requestFullscreen) {
        viewerElement.requestFullscreen();
      } else if (viewerElement.mozRequestFullScreen) {
        viewerElement.mozRequestFullScreen();
      } else if (viewerElement.webkitRequestFullscreen) {
        viewerElement.webkitRequestFullscreen();
      } else if (viewerElement.msRequestFullscreen) {
        viewerElement.msRequestFullscreen();
      }
    }
  };

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div className="mb-16 mt-6 grid md:grid-cols-2 grid-cols-1">
        <div>
          <div className="md:p-8 p-2 my-auto">
            <div className="text-sm items-center  flex justify-start gap-2 mb-3">
              <p className="bg-blue-200 p-1 border rounded">Article</p>
              <p className="border p-1 rounded">
                <span className="text-yellow-500 font-bold">pdf</span> available
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <h1 className="text-xl text-blue-500 font-bold">
                {projectTitle} - {publicationYear}
              </h1>
              <p className="text-sm">
                <span className="font-bold">Published here:</span>{" "}
                {date.slice(0, 10)}
              </p>{" "}
              <p className="text-sm">
                <span className="font-bold">Category: </span>
                {category}
              </p>
              <p className="text-sm">
                <span className="font-bold">Authors:</span> {memberOne},{" "}
                {memberTwo}
              </p>
              <p className="text-sm">
                <span className="font-bold">Supervisor:</span> {supervisor}
              </p>
            </div>
          </div>
          <div className="px-8 mb-12">
            <p>
              <span className="text-xl text-blue-500 font-bold pr-2">
                Abstract:
              </span>{" "}
              <span className="text-sm">{description}</span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-6">
          <div
            className="rpv-core__viewer w-full mx-auto"
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              display: "flex",
              flexDirection: "column",
              height: "650px",
            }}
          >
            <div
              style={{
                alignItems: "center",
                backgroundColor: "#eeeeee",
                borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                display: "flex",
                padding: "4px",
              }}
            >
              <DownloadButton />
              <button
                className="ml-2 hover:text-blue-400 cursor-pointer rounded px-2 py-1"
                onClick={toggleFullScreen}
              >
                <BsArrowsFullscreen></BsArrowsFullscreen>
              </button>
            </div>
            <div
              style={{
                flex: 1,
                overflow: "hidden",
              }}
            >
              {thesisPdf && (
                <Viewer fileUrl={thesisPdf} plugins={[getFilePluginInstance]} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Worker>
  );
};

export default IndividualPublications;
