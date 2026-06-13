import LoginForm from "../Component/LoginForm";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center px-4 py-10">

      <div
        className="
          bg-white
          rounded-3xl
          shadow-xl
          overflow-hidden
          w-full
          max-w-6xl
          grid
          lg:grid-cols-2
        "
      >

        {/* Left Side */}

        <div
          className="
            hidden
            lg:flex
            flex-col
            justify-center
            p-12
            bg-[#f8fbff]
          "
        >

          <h2 className="text-4xl font-bold text-[#121224]">
            New to Jobify?
          </h2>

          <div className="mt-8 space-y-5 text-gray-700">

            <div>
              ✓ One click apply using your profile
            </div>

            <div>
              ✓ Get relevant job recommendations
            </div>

            <div>
              ✓ Showcase profile to recruiters
            </div>

            <div>
              ✓ Track applications easily
            </div>

          </div>

          <Link
            to="/register"
            className="
              mt-10
              border
              border-[#275DF5]
              text-[#275DF5]
              font-semibold
              py-3
              px-8
              rounded-xl
              w-fit
              hover:bg-blue-50
              transition
            "
          >
            Register For Free
          </Link>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="login"
            className="w-64 mt-12"
          />

        </div>

        {/* Right Side */}

        <LoginForm />

      </div>

    </div>
  );
}

export default Login;