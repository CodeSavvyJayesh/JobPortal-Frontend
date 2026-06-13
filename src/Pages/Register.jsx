import RegisterForm from "../Component/RegisterForm";

function Register() {
  return (
    <div className="min-h-screen bg-[#f7f8fc] flex items-center justify-center px-4 py-10">

      <div
        className="
          w-full
          max-w-6xl
          bg-white
          rounded-3xl
          shadow-lg
          overflow-hidden
          grid
          lg:grid-cols-[350px_1fr]
        "
      >

        {/* Left Side */}

        <div
          className="
            hidden
            lg:flex
            flex-col
            justify-center
            p-10
            bg-blue-50
          "
        >

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="register"
            className="w-52 mx-auto"
          />

          <h2 className="text-2xl font-bold text-center mt-8">
            Join Jobify
          </h2>

          <p className="text-gray-600 text-center mt-4">
            Build your profile, connect with recruiters,
            and discover your dream job.
          </p>

          <div className="mt-8 space-y-4 text-gray-700">

            <div>✅ Build your professional profile</div>

            <div>✅ Get noticed by recruiters</div>

            <div>✅ Apply for jobs instantly</div>

          </div>

        </div>

        {/* Right Side */}

        <RegisterForm />

      </div>

    </div>
  );
}

export default Register;