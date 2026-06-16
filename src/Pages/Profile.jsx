import { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import ProfileHeader from "../Component/Profile/ProfileHeader";
import ProfileForm from "../Component/Profile/ProfileForm";
import { getProfile } from "../api/profileApi";

function Profile() {

  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {

    try {

      const data = await getProfile();

      setProfile(data);

    } catch (error) {

      console.log("Profile not found");

      setProfile(null);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-semibold">
          Loading Profile...
        </h2>
      </div>
    );

  }

  return (

    <div className="min-h-screen bg-[#f7f8fc]">

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">

        <ProfileHeader
          profile={profile}
          onEdit={() => setShowForm(true)}
        />

      </div>

      {showForm && (

        <ProfileForm
          profile={profile}
          isEdit={profile !== null}
          onSuccess={async () => {

            await fetchProfile();

            setShowForm(false);

          }}
          onClose={() => setShowForm(false)}
        />

      )}

    </div>

  );

}

export default Profile;