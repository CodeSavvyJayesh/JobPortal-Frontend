import { useState } from "react";
import {
  createProfile,
  updateProfile
} from "../../api/profileApi";

function ProfileForm({
  profile,
  isEdit,
  onSuccess,
  onClose
}) {

  const [formData, setFormData] =
    useState({

      phone:
        profile?.phone || "",

      location:
        profile?.location || "",

      headline:
        profile?.headline || "",

      about:
        profile?.about || "",

    });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      let response;

      if (isEdit) {

        response =
          await updateProfile(
            formData
          );

      } else {

        response =
          await createProfile(
            formData
          );

      }

      alert(
        "Profile saved successfully!"
      );

      onSuccess(response);

    } catch (error) {

      console.error(error);

      alert(
        "Failed to save profile"
      );

    }

  };

  return (

    <div
      className="
        fixed
        inset-0
        bg-black/50
        flex
        justify-center
        items-center
        z-50
        px-4
      "
    >

      <div
        className="
          bg-white
          w-full
          max-w-2xl
          rounded-3xl
          p-8
        "
      >

        <h2
          className="
            text-3xl
            font-bold
            mb-6
          "
        >
          {isEdit
            ? "Edit Profile"
            : "Complete Profile"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="block mb-2 font-medium">
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              className="
                w-full
                border
                rounded-xl
                p-3
              "
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter Location"
              className="
                w-full
                border
                rounded-xl
                p-3
              "
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Headline
            </label>

            <input
              type="text"
              name="headline"
              value={formData.headline}
              onChange={handleChange}
              placeholder="Java Full Stack Developer"
              className="
                w-full
                border
                rounded-xl
                p-3
              "
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              About
            </label>

            <textarea
              rows="5"
              name="about"
              value={formData.about}
              onChange={handleChange}
              placeholder="Tell recruiters about yourself..."
              className="
                w-full
                border
                rounded-xl
                p-3
              "
            />

          </div>

          <div className="flex gap-4">

            <button
              type="submit"
              className="
                flex-1
                bg-[#275DF5]
                text-white
                py-3
                rounded-xl
                font-semibold
              "
            >
              Save Profile
            </button>

            <button
              type="button"
              onClick={onClose}
              className="
                flex-1
                border
                py-3
                rounded-xl
                font-semibold
              "
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default ProfileForm;