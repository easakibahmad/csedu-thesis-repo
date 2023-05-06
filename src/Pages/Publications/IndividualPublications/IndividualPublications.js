import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import "@react-pdf-viewer/core/lib/styles/index.css";
import book from "../../../Assets/Pdfs/AC.pdf";
import { useLoaderData } from "react-router-dom";

const IndividualPublications = () => {
  const individualData = useLoaderData();
  console.log(individualData);
  const getFilePluginInstance = getFilePlugin();
  const { DownloadButton } = getFilePluginInstance;

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div
        className="rpv-core__viewer"
        style={{
          border: "1px solid rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          height: "500px",
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
          <Viewer fileUrl={book} plugins={[getFilePluginInstance]} />
        </div>
      </div>
    </Worker>
  );
};

export default IndividualPublications;
