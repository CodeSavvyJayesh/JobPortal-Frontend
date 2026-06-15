import { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import ProfileHeader from "../Component/Profile/ProfileHeader";
import { getProfile } from "../api/profileApi";

function Profile() {

  const [profile, setProfile] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchProfile();

  }, []);

  const fetchProfile = async () => {

    try {

      const data =
        await getProfile();

      setProfile(data);

    } catch (error) {

      console.error(
        "Profile Error:",
        error
      );

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return (
      <div className="text-center mt-20">
        Loading Profile...
      </div>
    );

  }

  return (
    <div className="min-h-screen bg-[#f7f8fc]">

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">

        <ProfileHeader
          profile={profile}
        />

      </div>

    </div>
  );
}

export default Profile;