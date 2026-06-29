// in this componenet we will write overall report of the interview at last 
const InterviewReport = ({

    candidateName,

    overallScore,

    communicationScore,

    technicalScore,

    projectScore,

    strengths,

    weaknesses,

    recommendation

}) => {

    return (

        <div>

            <h1>

                Interview Completed 🎉

            </h1>

            <br />

            <h2>

                Candidate : {candidateName}

            </h2>

            <br />

            <h2>

                Overall Score : {overallScore} / 100

            </h2>

            <hr />

            <h3>

                Communication Skills

            </h3>

            <p>

                {communicationScore} / 10

            </p>

            <br />

            <h3>

                Technical Knowledge

            </h3>

            <p>

                {technicalScore} / 10

            </p>

            <br />

            <h3>

                Project Knowledge

            </h3>

            <p>

                {projectScore} / 10

            </p>

            <hr />

            <h3>

                Strengths

            </h3>

            <ul>

                {

                    strengths.map((item, index) => (

                        <li key={index}>

                            {item}

                        </li>

                    ))

                }

            </ul>

            <br />

            <h3>

                Areas for Improvement

            </h3>

            <ul>

                {

                    weaknesses.map((item, index) => (

                        <li key={index}>

                            {item}

                        </li>

                    ))

                }

            </ul>

            <hr />

            <h3>

                Hiring Recommendation

            </h3>

            <p>

                {recommendation}

            </p>

        </div>

    );

};

export default InterviewReport;