import { FiSearch } from "react-icons/fi";
import { IoReload } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="bg-[#f7f7fb] pt-24 pb-20">

      {/* Heading */}
      <div className="text-center">

        <h1 className="text-[64px] font-bold text-[#121224] leading-tight">
          Find your dream job now
        </h1>

        <p className="text-[24px] text-gray-600 mt-3">
          5 lakh+ jobs for you to explore
        </p>

      </div>

      {/* Search Box */}
      <div className="max-w-[1050px] mx-auto mt-12">

        <div className="bg-white rounded-full shadow-md h-[78px] flex items-center px-6">

          <FiSearch
            size={28}
            className="text-gray-400"
          />

          <input
            type="text"
            placeholder="Enter skills / designations / companies"
            className="
              flex-1
              ml-4
              outline-none
              text-lg
            "
          />

          <div className="h-10 w-px bg-gray-300"></div>

          <div className="px-8 flex items-center gap-3">

            <span className="text-gray-500">
              Select experience
            </span>

            <FaChevronDown
              size={12}
              className="text-gray-500"
            />

          </div>

          <div className="h-10 w-px bg-gray-300"></div>

          <input
            type="text"
            placeholder="Enter location"
            className="
              w-[220px]
              px-8
              outline-none
              text-lg
            "
          />

          <button
            className="
              bg-[#275DF5]
              text-white
              px-10
              py-4
              rounded-full
              font-semibold
              hover:bg-blue-700
              transition
            "
          >
            Search
          </button>

        </div>

      </div>

      {/* Trending Search */}
      <div className="flex justify-center mt-10">

        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-full
            px-5
            py-3
            flex
            items-center
            gap-2
          "
        >

          <IoReload className="text-gray-500" />

          <span className="text-gray-600">
            java developer, spring boot
          </span>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;