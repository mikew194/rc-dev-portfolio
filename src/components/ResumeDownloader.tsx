import React from "react";

const ResumeDownloadComponent: React.FC = () => {
  return (
    <>
      <style>{`
        .resume-download-container {
          background-color: white;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          padding: 40px;
          width: 90%;
          max-width: 500px;
          text-align: center;
          transition: all 0.3s ease;
          margin: 0 auto;
        }
        
        .resume-download-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }
        
        h1 {
          color: #2c3e50;
          margin-bottom: 20px;
          font-weight: 600;
        }
        
        p {
          color: #7f8c8d;
          margin-bottom: 30px;
          line-height: 1.6;
        }
        
        .download-btn {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
          gap: 0.5rem;
        }
        
        .download-btn:hover:not(:disabled) {
          background-color: #2980b9;
          transform: translateY(-2px);
          box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
        }
        
        .download-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .download-icon {
          font-size: 20px;
        }
        
        .resume-preview {
          margin: 30px 0;
          border: 1px dashed #bdc3c7;
          border-radius: 8px;
          padding: 20px;
          background-color: #f8f9fa;
        }
        
        .resume-preview img {
          max-width: 100%;
          height: auto;
          border-radius: 4px;
        }
        
        .success-message {
          color: #27ae60;
          font-weight: 600;
          margin-top: 20px;
          animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Your component's JSX goes here, using the defined classes */}
      <div className="resume-download-container">
        <h1>Download Your Resume</h1>
        <p>Get your professional resume with just one click.</p>
        <button className="download-btn">
          <span className="download-icon">↓</span> Download Resume
        </button>
        <div className="resume-preview">
          {/* <p>Preview area for your resume image...</p> */}
          {/* <img src="path/to/your/resume/preview.png" alt="Resume Preview" /> */}
        </div>
        {/* <p className="success-message">Download successful!</p> */}
      </div>
    </>
  );
};

export default ResumeDownloadComponent;
