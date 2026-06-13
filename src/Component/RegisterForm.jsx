import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { registerUser } from "../api/authApi";
import {Link} from "react-router-dom";
function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await registerUser(formData);

    console.log(response);

    alert(response.message);

    setFormData({
      name: "",
      email: "",
      password: "",
    });

  } catch (error) {

    console.error(error);

    alert(
      error.response?.data?.message ||
      "Registration Failed"
    );
  }
};

  return (
    <div className="w-full flex justify-center items-center p-6 md:p-10">

      <div className="w-full max-w-xl bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10">

        <div className="text-center mb-8">

          <h2 className="text-4xl font-bold text-gray-900">
            Create Account
          </h2>

          <p className="text-gray-500 mt-2">
            Start your career journey today
          </p>

        </div>

        {/* Google Button */}

        <button
          className="
            w-full
            flex
            items-center
            justify-center
            gap-3
            border
            border-gray-300
            rounded-xl
            py-3
            font-medium
            hover:bg-gray-50
            transition
          "
        >
          <FaGoogle className="text-red-500" />
          Continue with Google
        </button>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200"></div>

          <span className="px-4 text-gray-400 text-sm">
            OR
          </span>

          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Name */}

          <div>

            <label className="block mb-2 font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="
                w-full
                px-4
                py-3
                border
                border-gray-300
                rounded-xl
                outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

          </div>

          {/* Email */}

          <div>

            <label className="block mb-2 font-medium text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="
                w-full
                px-4
                py-3
                border
                border-gray-300
                rounded-xl
                outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

          </div>

          {/* Password */}

          <div>

            <label className="block mb-2 font-medium text-gray-700">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
                className="
                  w-full
                  px-4
                  py-3
                  border
                  border-gray-300
                  rounded-xl
                  outline-none
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

          {/* Register Button */}

          <button
            type="submit"
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-3
              rounded-xl
              font-semibold
              transition
              shadow-md
            "
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-gray-500 mt-6">

          Already have an account?
          <Link to="/login">
          <span
            className="
              text-blue-600
              font-medium
              ml-2
              cursor-pointer
            "
          >
            Login
          </span>
          </Link>
          

        </p>

      </div>

    </div>
  );
}

export default RegisterForm;