import React from "react";

const ResumeContent: React.FC = () => {

  const pdfUrl = "https://drive.google.com/file/d/110Ua396ydV8O_wVzndjxmtiQ16atSCWC/preview";

  return (
    <div className="h-full w-full flex flex-col bg-gray-700">

      {/* PDF Viewer */}
      <div className="flex-1 w-full h-full relative">
        <iframe
          src={pdfUrl}
          className="w-full h-full border-none block"
          title="Resume"
        />
      </div>
    </div>
  );
};

export default ResumeContent;
