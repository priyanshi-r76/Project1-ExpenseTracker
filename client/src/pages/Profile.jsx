import { useState } from "react";
import EditProfile from "./EditProfile";

function Profile({
    profileData,
}) {
    const {
        profileName,
        setProfileName,

        profileBio,
        setProfileBio,

        profileEmail,
        setProfileEmail,

        profilePhone,
        setProfilePhone,

        profileImage,
        setProfileImage,

        darkMode,
        setDarkMode,

        notificationsEnabled,
        setNotificationsEnabled,
    } = profileData;

    const [showEdit, setShowEdit] =
        useState(false);

    const [showPhotoMenu, setShowPhotoMenu] =
        useState(false);

    if (showEdit) {
        return (
            <EditProfile
                profileName={profileName}
                setProfileName={setProfileName}

                profileEmail={profileEmail}
                setProfileEmail={setProfileEmail}

                profilePhone={profilePhone}
                setProfilePhone={setProfilePhone}

                profileBio={profileBio}
                setProfileBio={setProfileBio}

                setShowEdit={setShowEdit}
            />
        );
    }
    return (
        <div>
            <div className="top-header">
                <button
                    className="menu-button"
                    onClick={() =>
                        setShowEdit(true)
                    }
                >
                    ✎
                </button>

                <h1 className="page-title">
                    Profile
                </h1>

                <p className="subtitle">
                    personalize your MOMO
                </p>
            </div>
            <div className="profile-card">
                <div className="profile-avatar-container">

                    <label
                        className="profile-avatar"

                        onClick={(e) => {

                            e.preventDefault();

                            setShowPhotoMenu(
                                !showPhotoMenu
                            );
                        }}
                    >

                        {profileImage ? (

                            <img
                                src={profileImage}
                                alt="Profile"
                                className="avatar-image"
                            />

                        ) : (

                            <span>
                                {profileName
                                    .charAt(0)
                                    .toUpperCase()}
                            </span>

                        )}

                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}

                            onChange={(e) => {

                                const file =
                                    e.target.files[0];

                                if (!file) return;

                                const imageUrl =
                                    URL.createObjectURL(file);

                                setProfileImage(imageUrl);
                            }}
                        />

                    </label>

                    {showPhotoMenu && (

                        <div className="photo-menu">

                            <label className="photo-option">

                                Choose Photo

                                <input
                                    type="file"
                                    accept="image/*"
                                    hidden

                                    onChange={(e) => {

                                        const file =
                                            e.target.files[0];

                                        if (!file) return;

                                        const imageUrl =
                                            URL.createObjectURL(
                                                file
                                            );

                                        setProfileImage(
                                            imageUrl
                                        );

                                        setShowPhotoMenu(
                                            false
                                        );
                                    }}
                                />
                            </label>

                            <button
                                className="
                    photo-option
                    delete-option
                "

                                onClick={() => {

                                    setProfileImage("");

                                    setShowPhotoMenu(
                                        false
                                    );
                                }}
                            >
                                Remove Photo
                            </button>

                        </div>

                    )}

                </div>
                <h2 className="profile-name">
                    {profileName}
                </h2>
                <p className="profile-email">
                    {profileEmail}
                </p>

                <p className="profile-phone">
                    {profilePhone}
                </p>

                <p className="profile-bio">
                    {profileBio}
                </p>
            </div>
            <div className="settings-section">
                <div
                    className="setting-item"
                    onClick={() =>
                        setDarkMode(!darkMode)
                    }
                >
                    <p>Dark Mode</p>

                    <span>
                        {darkMode ? "ON" : "OFF"}
                    </span>
                </div>
                <div
                    className="setting-item"
                    onClick={() =>
                        setNotificationsEnabled(
                            !notificationsEnabled
                        )
                    }
                >
                    <p>Notifications</p>

                    <span>
                        {notificationsEnabled
                            ? "ON"
                            : "OFF"}
                    </span>
                </div>

                <div className="setting-item">
                    <p>Account Status</p>

                    <span>
                        Active
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Profile;