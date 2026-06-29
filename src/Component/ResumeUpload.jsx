// here we have to write the frontend code in order to uplad the resume 
// basically we need the usestate here as screen will change asap we click on upload 
// 

import { useState } from "react";
import { uploadResume,startInterview } from "../api/AIInterviewCopilot";

const ResumeUpload = ({ onInterviewStarted }) => {

    const [selectedFile, setSelectedFile] = useState(null);

    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {

        const file = event.target.files[0];

        if (!file) return;

        if (file.type !== "application/pdf") {

            alert("Please upload a PDF resume.");

            return;
        }

        setSelectedFile(file);

    };

    const handleStartInterview = async () => {

        if (!selectedFile) {

            alert("Please select a resume.");

            return;

        }

        try {

            setLoading(true);

            // Step 1 : Upload Resume

            const uploadResponse =
                await uploadResume(selectedFile);

            const resumeText =
                uploadResponse.resume_text;

            // Step 2 : Start Interview

            const interviewResponse =
                await startInterview(resumeText);

            // Step 3 : Send Data to Parent Component

            onInterviewStarted(interviewResponse);

        }

        catch (error) {

            console.error(error);

            alert("Failed to start interview.");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div>

            <h1>
                AI Interview Copilot
            </h1>

            <br />

            <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
            />

            <br />
            <br />

            {
                selectedFile &&
                <p>

                    Selected Resume :
                    {" "}
                    {selectedFile.name}

                </p>
            }

            <br />

            <button
                onClick={handleStartInterview}
                disabled={loading}
            >

                {
                    loading
                        ? "Starting Interview..."
                        : "Start Interview"
                }

            </button>

        </div>

    );

};

export default ResumeUpload;
