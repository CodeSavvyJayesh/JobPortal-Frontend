import { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";

function LoginForm() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await loginUser(loginData);

      console.log("Login Success:", response);

      localStorage.setItem(
        "token",
        response.token
      );

      localStorage.setItem(
        "email",
        response.email
      );

      alert("Login Successful 🚀");

      navigate("/");

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="w-full p-8 md:p-12">

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Login
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* Email */}

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={loginData.email}
            onChange={handleChange}
            required
            className="
              w-full
              border
              border-gray-300
              rounded-xl
              px-4
              py-3
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

        </div>

        {/* Password */}

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={loginData.password}
              onChange={handleChange}
              required
              className="
                w-full
                border
                border-gray-300
                rounded-xl
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-gray-500
              "
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>

          </div>

        </div>

        {/* Forgot Password */}

        <div className="text-right">

          <button
            type="button"
            className="
              text-sm
              text-blue-600
              hover:underline
            "
          >
            Forgot Password?
          </button>

        </div>

        {/* Login Button */}

        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            bg-[#275DF5]
            text-white
            py-3
            rounded-xl
            font-semibold
            hover:bg-blue-700
            transition
            disabled:opacity-60
            disabled:cursor-not-allowed
          "
        >
          {loading ? "Logging In..." : "Login"}
        </button>

      </form>

      {/* Divider */}

      <div className="flex items-center my-8">

        <div className="flex-1 h-px bg-gray-300"></div>

        <span className="px-4 text-gray-400">
          OR
        </span>

        <div className="flex-1 h-px bg-gray-300"></div>

      </div>

      {/* Google Button */}

      <button
        className="
          w-full
          border
          border-gray-300
          py-3
          rounded-xl
          flex
          items-center
          justify-center
          gap-3
          hover:bg-gray-50
          transition
        "
      >
        <FaGoogle className="text-red-500" />

        Continue with Google
      </button>

      {/* Register */}

      <p className="text-center mt-8 text-gray-600">

        Don't have an account?

        <Link
          to="/register"
          className="
            text-blue-600
            font-semibold
            ml-2
          "
        >
          Register
        </Link>

      </p>

    </div>
  );
}

export default LoginForm;