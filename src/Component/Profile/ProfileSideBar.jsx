function ProfileSideBar() {

  const menuItems = [
    "Preference",
    "Education",
    "Key Skills",
    "Languages",
    "Internships",
    "Projects",
    "Profile Summary",
    "Resume",
  ];

  return (

    <div
      className="
        bg-white
        rounded-2xl
        border
        border-gray-200
        p-6
        sticky
        top-6
      "
    >

      <h2
        className="
          text-xl
          font-bold
          mb-6
        "
      >
        Quick Links
      </h2>

      <div className="space-y-5">

        {menuItems.map((item) => (

          <button
            key={item}
            className="
              w-full
              flex
              justify-between
              items-center
              text-left
              text-gray-700
              hover:text-[#275DF5]
              transition
            "
          >

            <span>{item}</span>

            <span
              className="
                text-[#275DF5]
                text-sm
                font-medium
              "
            >
              Add
            </span>

          </button>

        ))}

      </div>

    </div>

  );

}

export default ProfileSideBar;