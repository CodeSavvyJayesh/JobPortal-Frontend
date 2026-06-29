// in this feedback would be generated for the answer which is spoken / written by the user 
const FeedbackCard = ({

    score,

    feedback,

    idealAnswer,

    onNextQuestion

}) => {

    return (

        <div>

            <h2>

                Answer Evaluation

            </h2>

            <br />

            <h3>

                Score : {score} / 10

            </h3>

            <br />

            <h3>

                AI Feedback

            </h3>

            <p>

                {feedback}

            </p>

            <br />

            <h3>

                Ideal Answer

            </h3>

            <p>

                {idealAnswer}

            </p>

            <br />

            <button

                onClick={onNextQuestion}

            >

                Next Question

            </button>

        </div>

    );

};

export default FeedbackCard;