function ProfileHeader({ profile }) {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        shadow-sm
        border
        border-gray-100
        p-6
        lg:p-8
      "
    >
      <div
        className="
          flex
          flex-col
          lg:flex-row
          justify-between
          gap-8
        "
      >
        {/* LEFT SECTION */}

        <div className="flex flex-col md:flex-row gap-6">

          {/* PROFILE IMAGE */}

          <div
            className="
              w-36
              h-36
              rounded-full
              border-[6px]
              border-red-400
              overflow-hidden
              flex
              items-center
              justify-center
              bg-gray-100
            "
          >
            {profile?.profileImage ? (
              <img
                src={profile.profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-500 text-sm">
                Add Photo
              </span>
            )}
          </div>

          {/* USER DETAILS */}

          <div>

            <h2 className="text-3xl font-bold text-gray-900">
              {profile?.name}
            </h2>

            <p className="text-blue-600 font-medium mt-2">
              {profile?.headline || "No headline added"}
            </p>

            <div className="mt-4 space-y-2">

              <p className="text-gray-600">
                📧 {profile?.email}
              </p>

              <p className="text-gray-600">
                📞 {profile?.phone || "Not Added"}
              </p>

              <p className="text-gray-600">
                📍 {profile?.location || "Not Added"}
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT SECTION */}

        <div
          className="
            bg-orange-50
            rounded-2xl
            p-6
            min-w-[280px]
          "
        >
          <h3 className="font-semibold text-lg">
            Profile Summary
          </h3>

          <p
            className="
              text-gray-600
              mt-4
              text-sm
              leading-6
            "
          >
            {profile?.about ||
              "Tell recruiters about yourself."}
          </p>

          <button
            className="
              mt-6
              bg-[#FF7555]
              text-white
              px-6
              py-3
              rounded-full
              font-semibold
              hover:bg-[#ff6541]
              transition
            "
          >
            Edit Profile
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProfileHeader;