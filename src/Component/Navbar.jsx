import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-6">

        <div className="h-[84px] flex items-center justify-between">

          {/* Left Side */}
          <div className="flex items-center gap-16">

            {/* Logo */}
        
            <div className="flex items-center gap-3 cursor-pointer">

              <div className="w-11 h-11 rounded-full bg-[#275DF5] flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-xl">
                 
                  J
                </span>
              </div>

              <span className="text-[34px] font-bold text-[#275DF5] tracking-tight">
                Jobify
              </span>
            
            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-12">

              <a
                href="#"
                className="text-[16px] font-medium text-gray-700 hover:text-[#275DF5] transition-all duration-200"
              >
                Jobs
              </a>

              <a
                href="#"
                className="text-[16px] font-medium text-gray-700 hover:text-[#275DF5] transition-all duration-200"
              >
                Companies
              </a>

              <a
                href="#"
                className="text-[16px] font-medium text-gray-700 hover:text-[#275DF5] transition-all duration-200"
              >
                Services
              </a>

            </nav>

          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            
<Link to="/login">
  <button
    className="
      px-8 py-3
      rounded-full
      border border-[#275DF5]
      text-[#275DF5]
      font-semibold
      hover:bg-blue-50
      transition-all
    "
  >
    Login
  </button>
</Link>
            <Link to="/register">
            <button
              className="
                px-8 py-3
                rounded-full
                bg-[#FF7555]
                text-white
                font-semibold
                hover:bg-[#ff6541]
                transition-all
                shadow-sm
              "
            >
              Register
            </button>
            </Link>

            <div className="h-8 w-px bg-gray-300"></div>

            <div className="flex items-center gap-2 cursor-pointer group">

              <span className="text-gray-700 font-medium group-hover:text-[#275DF5] transition">
                For Employers
              </span>

              <FaChevronDown
                size={12}
                className="text-gray-500"
              />

            </div>

          </div>

        </div>

      </div>
    </header>
  );
}

export default Navbar;