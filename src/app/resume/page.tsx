"use client";
import React from "react";
import PDFViewer from "~/components/PDFViewer";

const Resume = () => {
  return (
    <div className="">
      <PDFViewer pdfUrl="http://samuelarantresume.s3-website-us-east-1.amazonaws.com/" />
    </div>
  );
};

export default Resume;
