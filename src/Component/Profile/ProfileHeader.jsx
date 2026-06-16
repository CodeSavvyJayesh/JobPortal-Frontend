function ProfileHeader({
  profile,
  onEdit
}) {

  const fields = [
    profile?.name,
    profile?.email,
    profile?.phone,
    profile?.location,
    profile?.headline,
    profile?.about,
    profile?.profileImage,
  ];

  const completedFields =
    fields.filter(Boolean).length;

  const completionPercentage =
    Math.round(
      (completedFields / fields.length) * 100
    );

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
          grid
          lg:grid-cols-[220px_1fr_320px]
          gap-8
          items-center
        "
      >

        {/* Profile Image */}

        <div className="flex flex-col items-center">

          <div
            className="
              w-40
              h-40
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
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

            ) : (

              <span
                className="
                  text-gray-500
                  text-lg
                "
              >
                Add Photo
              </span>

            )}

          </div>

          <span
            className="
              mt-3
              text-red-500
              font-semibold
            "
          >
            {completionPercentage}%
          </span>

        </div>

        {/* User Details */}

        <div>

          <h2
            className="
              text-4xl
              font-bold
              text-gray-900
            "
          >
            {profile?.name ||
              "Complete Your Profile"}
          </h2>

          <p
            className="
              text-xl
              text-gray-600
              mt-2
            "
          >
            {profile?.headline ||
              "No headline added"}
          </p>

          <div
            className="
              border-t
              mt-5
              pt-5
              grid
              md:grid-cols-2
              gap-4
              text-gray-700
            "
          >

            <p>
              📍{" "}
              {profile?.location ||
                "Location not added"}
            </p>

            <p>
              📞{" "}
              {profile?.phone ||
                "Phone not added"}
            </p>

            <p>
              📧{" "}
              {profile?.email ||
                "Email not available"}
            </p>

          </div>

        </div>

        {/* Completion Card */}

        <div
          className="
            bg-orange-50
            rounded-2xl
            p-6
          "
        >

          <h3
            className="
              text-2xl
              font-bold
              mb-5
            "
          >
            Profile Completion
          </h3>

          <div className="space-y-3">

            {!profile?.phone && (
              <div>
                📞 Add Phone Number
              </div>
            )}

            {!profile?.location && (
              <div>
                📍 Add Location
              </div>
            )}

            {!profile?.headline && (
              <div>
                💼 Add Headline
              </div>
            )}

            {!profile?.about && (
              <div>
                📝 Add About Section
              </div>
            )}

          </div>

          <button
            onClick={onEdit}
            className="
              mt-6
              w-full
              bg-[#FF7555]
              text-white
              py-3
              rounded-full
              font-semibold
              hover:bg-[#ff6541]
              transition
            "
          >
            {profile
              ? "Edit Profile"
              : "Complete Profile"}
          </button>

        </div>

      </div>

    </div>

  );

}

export default ProfileHeader;