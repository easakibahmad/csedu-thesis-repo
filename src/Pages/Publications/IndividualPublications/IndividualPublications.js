import React, { useEffect, useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useLoaderData } from "react-router-dom";

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

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div className="mb-16 mt-6">
        <div className="grid md:grid-cols-2">
          {" "}
          <div className="p-8 my-auto">
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
          <div
            className="rpv-core__viewer"
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              display: "flex",
              flexDirection: "column",
              height: "350px",
              margin: "10px 40px",
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
        <div className="px-8 ">
          <p>
            <span className="text-xl text-blue-500 font-bold pr-2">
              Abstract:
            </span>{" "}
            <span className="text-sm">{description}</span>
          </p>
        </div>
      </div>
    </Worker>
  );
};

export default IndividualPublications;
