const GreetingScreen = ({

    candidateName,

    greeting,

    onBeginInterview

}) => {

    return (

        <div>

            <h1>
                AI Interview Copilot
            </h1>

            <br />

            <h2>

                Hello {candidateName} 👋

            </h2>

            <br />

            <p>

                {greeting}

            </p>

            <br />

            <h3>

                Interview Structure

            </h3>

            <ul>

                <li>Introduction Round</li>

                <li>Technical Skills Round</li>

                <li>Projects Discussion</li>

                <li>Internship / Experience</li>

                <li>HR Round</li>

            </ul>

            <br />

            <p>

                The interview contains approximately
                <strong> 15 questions </strong>
                and each answer will be evaluated by AI.

            </p>

            <br />

            <button

                onClick={onBeginInterview}

            >

                Begin Interview

            </button>

        </div>

    );

};

export default GreetingScreen;