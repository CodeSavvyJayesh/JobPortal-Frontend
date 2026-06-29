// here we will connect our frontend with the backend 
// here we have to write a code that will connect the frontend with the backend fastapi python ! 
// so even though my request is going from the frontend to any backend.... it will take place internally 
// here the flow would be AIInterview.jsx -> aiInterview.js -> main.py -> gemini api 

import axios from "axios";

const API_BASE_URL = "http://localhost:8000"

// here the api connection should take place on the basis of the backend function 

export const uploadResume = async (file) => {
    const formData = new FormData();

    formData.append("file", file);

    try {
        const response = await axios.post(
            `${API_BASE_URL}/upload-resume`,formData,
            {
                headers: {
                    "Content-Type" : "multipart/form-data",
                },
            }
        );
        return response.data;
    }
    catch(error)
    {
        console.error("Eror uploading resume:", error)

        throw error;
    }
};
/* basically we no longer having this function in our backend 
it got replaced by the start-interview 
export const generateQuestions = async (resumeText) =>
{
    try{
        const response = await axios.post(`${API_BASE_URL}/generate-questions`,
            {
                resume_text : resumeText
            }
        );
        return response.data;
    }
    catch(error){
        console.error("Error generating questions ", error);

        throw error;
    }
}
    */ 

export const startInterview = async(resumeText) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}/start-interview`,
            {
                resume_text : resumeText
            }
        );
        return response.data;
    }
    catch(error)
    {
        console.error("Error starting interview:", error);

        throw error;
    }
};    

/* we have to make a new file for this as we have to create a perfect ui for it 
we have to maintain the following flow 
selected file, resumetext, candidateName, greting, questions , currentQuestion, currentquestion index,
currentAnswer , loading, interviewStarted, show greting 
interview finished ,feedback, score 
 */ 