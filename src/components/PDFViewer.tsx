import React from "react";

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  return (
    <div className="h-screen w-screen">
      <iframe
        src={pdfUrl}
        width="100%"
        style={{ border: "none" }}
        height="100%"
        allowFullScreen
      />
    </div>
  );
};

export default PDFViewer;
