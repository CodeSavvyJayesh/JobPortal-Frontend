import { useState } from "react";
import {
    uploadResume,
    generateQuestions
} from "../api/AIInterviewCopilot";

const AIInterviewCopilot = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const [resumeText, setResumeText] = useState("");

    const [questions, setQuestions] = useState("");

    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {

        setSelectedFile(e.target.files[0]);

    };

    const handleStartInterview = async () => {

        if (!selectedFile) {

            alert("Please upload your resume.");

            return;
        }

        try {

            setLoading(true);

            // Upload Resume
            const uploadResponse = await uploadResume(selectedFile);

            const extractedResume = uploadResponse.resume_text;

            setResumeText(extractedResume);

            // Generate Questions
            const questionResponse = await generateQuestions(extractedResume);

            setQuestions(questionResponse.questions);

        }
        catch (error) {

            console.error(error);

            alert("Failed to generate interview.");

        }
        finally {

            setLoading(false);

        }

    };

    return (

        <div>

            <h1>AI Interview Copilot</h1>

            <br />

            <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
            />

            <br />
            <br />

            <button
                onClick={handleStartInterview}
            >
                Start Interview
            </button>

            <br />
            <br />

            {
                loading &&
                <h3>Generating Interview...</h3>
            }

            {
                resumeText &&
                <div>

                    <h2>Extracted Resume</h2>

                    <textarea
                        rows="12"
                        cols="90"
                        value={resumeText}
                        readOnly
                    />

                </div>
            }

            <br />

            {
                questions &&
                <div>

                    <h2>Interview Questions</h2>

                    <pre>{questions}</pre>

                </div>
            }

            <br />

            <button>
                End Interview
            </button>

        </div>

    );

};

export default AIInterviewCopilot;