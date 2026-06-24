import { useState } from "react";
import { generateQuestions} from "../api/AIInterviewCopilot";

const AIInterviewCopilot = () => {

    const [resumeText, setResumeText] = useState("");

    const [questions, setQuestions] = useState("");

    const [loading, setLoading] = useState(false);

    const handleStartInterview = async () => {

        try {

            setLoading(true);

            const response =
                await generateQuestions(resumeText);

            setQuestions(
                response.questions
            );

        } catch (error) {

            console.error(error);

            alert(
                "Failed to generate questions"
            );

        } finally {

            setLoading(false);
        }
    };

    return (

        <div>

            <h1>
                AI Interview Copilot
            </h1>

            <textarea
                rows="10"
                cols="80"
                placeholder="Paste Resume Here..."
                value={resumeText}
                onChange={(e) =>
                    setResumeText(
                        e.target.value
                    )
                }
            />

            <br />
            <br />

            <button
                onClick={
                    handleStartInterview
                }
            >
                Start Interview
            </button>

            <br />
            <br />

            {loading && (
                <h3>
                    Generating Questions...
                </h3>
            )}

            <div>

                <h2>
                    Interview Questions
                </h2>

                <pre>
                    {questions}
                </pre>

            </div>

            <button>
                End Interview
            </button>

        </div>
    );
};

export default AIInterviewCopilot;