// basically here we have to paste the resume  
// call : http://localhost:8000/generate-questions 
// basically here we have to make the UI for the interview style   // this is because all the changes would take place on this page only 

import { useState } from "react";

const AIInterviewCopilot = () => {
    const [resumeText, setResumeText] = useState("");

    return(
        <div>
            <h1> AI inteview</h1>
            <textarea  rows = "10"
            cols="80"
            placeholder="Paste Resume Here..."
            value={resumeText}
            onChange={(e) =>
                setResumeText(e.target.value)
            }
            />
           <br />
           <br />

           <button>
            Start Interview
           </button>
        </div>
    );
};
export default AIInterviewCopilot;  
