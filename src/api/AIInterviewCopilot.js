// here we will connect our frontend with the backend 
// here we have to write a code that will connect the frontend with the backend fastapi python ! 
// so even though my request is going from the frontend to any backend.... it will take place internally 
// here the flow would be AIInterview.jsx -> aiInterview.js -> main.py -> gemini api 

import axios from "axios";

const API_BASE_URL = "http://localhost:8000"

// here the api connection should take place on the basis of the backend function 

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