/* import { useState } from "react";
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
 */ 

/* we have to make a new file for this as we have to create a perfect ui for it 
we have to maintain the following flow 
selected file, resumetext, candidateName, greting, questions , currentQuestion, currentquestion index,
currentAnswer , loading, interviewStarted, show greting 
interview finished ,feedback, score 

so it would be better if we could break all that into the no. of component and later call in the same file ! 

 */ 

import { useState } from "react";
import ResumeUpload from "../Component/ResumeUpload";
import GreetingScreen from "../Component/GreetingScreen";
import QuestionCard from "../Component/QuestionCard";
import FeedbackCard from "../Component/FeedbackCard";
import InterviewReport from "../Component/InterviewReport";

const AIInterviewCopilot = () => {

    // =========================
    // Screen Management
    // =========================

    const [currentScreen, setCurrentScreen] = useState("upload");

    // =========================
    // Interview Data
    // =========================

    const [candidateName, setCandidateName] = useState("");

    const [greeting, setGreeting] = useState("");

    const [questions, setQuestions] = useState([]);

    // =========================
    // Question State
    // =========================

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    // =========================
    // Feedback State
    // =========================

    const [score, setScore] = useState(0);

    const [feedback, setFeedback] = useState("");

    const [idealAnswer, setIdealAnswer] = useState("");

    // =========================
    // Report State
    // =========================

    const [overallScore, setOverallScore] = useState(0);

    const [communicationScore, setCommunicationScore] = useState(0);

    const [technicalScore, setTechnicalScore] = useState(0);

    const [projectScore, setProjectScore] = useState(0);

    const [strengths, setStrengths] = useState([]);

    const [weaknesses, setWeaknesses] = useState([]);

    const [recommendation, setRecommendation] = useState("");

    // =========================
    // Resume Upload Completed
    // =========================

    const handleInterviewStarted = (response) => {

        setCandidateName(response.candidate_name);

        setGreeting(response.greeting);

        setQuestions(response.questions);

        setCurrentScreen("greeting");

    };

    // =========================
    // Begin Interview
    // =========================

    const handleBeginInterview = () => {

        setCurrentScreen("question");

    };

    // =========================
    // Submit Answer
    // =========================

    const handleSubmitAnswer = async (answer) => {

        console.log(answer);

        /*
            NEXT SPRINT

            Call

            POST /evaluate-answer

            Backend returns

            Score

            Feedback

            Ideal Answer
        */

        setScore(8);

        setFeedback("Good answer. Try adding more technical details.");

        setIdealAnswer("Ideal answer will be generated by AI.");

        setCurrentScreen("feedback");

    };

    // =========================
    // Next Question
    // =========================

    const handleNextQuestion = () => {

        if (currentQuestionIndex < questions.length - 1) {

            setCurrentQuestionIndex(currentQuestionIndex + 1);

            setCurrentScreen("question");

        }

        else {

            /*
                NEXT SPRINT

                Call

                POST /finish-interview

            */

            setOverallScore(84);

            setCommunicationScore(8);

            setTechnicalScore(9);

            setProjectScore(8);

            setStrengths([
                "Excellent Java Fundamentals",
                "Good Spring Boot Knowledge",
                "Strong Project Explanation"
            ]);

            setWeaknesses([
                "Improve System Design",
                "Improve Docker Knowledge"
            ]);

            setRecommendation(
                "Recommended for Software Engineer Role"
            );

            setCurrentScreen("report");

        }

    };

    // =========================
    // Render Screen
    // =========================

    switch (currentScreen) {

        case "upload":

            return (

                <ResumeUpload

                    onInterviewStarted={handleInterviewStarted}

                />

            );

        case "greeting":

            return (

                <GreetingScreen

                    candidateName={candidateName}

                    greeting={greeting}

                    onBeginInterview={handleBeginInterview}

                />

            );

        case "question":

            return (

                <QuestionCard

                    question={questions[currentQuestionIndex]}

                    questionNumber={currentQuestionIndex + 1}

                    totalQuestions={questions.length}

                    onSubmitAnswer={handleSubmitAnswer}

                />

            );

        case "feedback":

            return (

                <FeedbackCard

                    score={score}

                    feedback={feedback}

                    idealAnswer={idealAnswer}

                    onNextQuestion={handleNextQuestion}

                />

            );

        case "report":

            return (

                <InterviewReport

                    candidateName={candidateName}

                    overallScore={overallScore}

                    communicationScore={communicationScore}

                    technicalScore={technicalScore}

                    projectScore={projectScore}

                    strengths={strengths}

                    weaknesses={weaknesses}

                    recommendation={recommendation}

                />

            );

        default:

            return <h2>Something went wrong.</h2>;

    }

};

export default AIInterviewCopilot;