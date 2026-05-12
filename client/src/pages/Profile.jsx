import { useState } from "react";

function Profile({
  profileName,
  setProfileName,

  profileBio,
  setProfileBio,
}) {

  const [showEdit, setShowEdit] =
    useState(false);

  return (
    <div>

      <div className="top-header">

        <button
          className="menu-button"
          onClick={() =>
            setShowEdit(!showEdit)
          }
        >
          ☰
        </button>

        <h1 className="page-title">
          Profile
        </h1>

        <p className="subtitle">
          personalize your MOMO
        </p>

      </div>

      <div className="profile-card">

        <div className="profile-avatar">
          P
        </div>

        <h2 className="profile-name">
          {profileName}
        </h2>

        <p className="profile-email">
          {profileBio}
        </p>

      </div>

      <div className="settings-section">

        <div className="setting-item">
          Appearance
        </div>

        <div className="setting-item">
          Notifications
        </div>

        <div className="setting-item">
          Budget Goals
        </div>

        <div className="setting-item">
          Privacy
        </div>

      </div>

      {showEdit && (

        <div className="edit-panel">

          <input
            type="text"
            value={profileName}
            onChange={(e) =>
              setProfileName(
                e.target.value
              )
            }
            placeholder="Your name"
            className="input-field"
          />

          <textarea
            value={profileBio}
            onChange={(e) =>
              setProfileBio(
                e.target.value
              )
            }
            placeholder="Your bio"
            className="profile-textarea"
          />

          <button
            className="primary-button"
            onClick={() =>
              setShowEdit(false)
            }
          >
            Save Changes
          </button>

        </div>

      )}

    </div>
  );
}

export default Profile;