// in this we have to create the questioncard 

import { useState } from "react";

const QuestionCard = ({

    question,

    questionNumber,

    totalQuestions,

    onSubmitAnswer

}) => {

    const [answer, setAnswer] = useState("");

    const handleSubmit = () => {

        if (answer.trim() === "") {

            alert("Please enter your answer.");

            return;
        }

        onSubmitAnswer(answer);

        setAnswer("");

    };

    return (

        <div>

            <h2>

                Question {questionNumber} / {totalQuestions}

            </h2>

            <br />

            <h3>

                {question}

            </h3>

            <br />

            <textarea

                rows="8"

                cols="80"

                placeholder="Type your answer here..."

                value={answer}

                onChange={(e) =>
                    setAnswer(e.target.value)
                }

            />

            <br />
            <br />

            <button>

                🎤 Speak Answer

            </button>

            {" "}

            <button

                onClick={handleSubmit}

            >

                Submit Answer

            </button>

        </div>

    );

};

export default QuestionCard;