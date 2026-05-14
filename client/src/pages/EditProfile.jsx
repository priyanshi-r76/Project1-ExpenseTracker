import { useState } from "react";

function EditProfile({

    profileName,
    setProfileName,

    profileEmail,
    setProfileEmail,

    profilePhone,
    setProfilePhone,

    profileBio,
    setProfileBio,

    setShowEdit,
}) {

    const [draftName, setDraftName] =
        useState(profileName);

    const [draftEmail, setDraftEmail] =
        useState(profileEmail);

    const [draftPhone, setDraftPhone] =
        useState(profilePhone);

    const [draftBio, setDraftBio] =
        useState(profileBio);

    const handleSave = () => {

        setProfileName(draftName);

        setProfileEmail(draftEmail);

        setProfilePhone(draftPhone);

        setProfileBio(draftBio);

        setShowEdit(false);
    };

    const handleBack = () => {

        const hasChanges =

            draftName !== profileName ||

            draftEmail !== profileEmail ||

            draftPhone !== profilePhone ||

            draftBio !== profileBio;

        if (hasChanges) {

            const confirmLeave =
                window.confirm(
                    "Discard unsaved changes?"
                );

            if (!confirmLeave) {
                return;
            }
        }

        setShowEdit(false);
    };

    return (

        <div className="edit-page">

            <div className="top-header">

                <button
                    className="menu-button"
                    onClick={handleBack}
                >
                    ←
                </button>

                <h1 className="page-title">
                    Edit Profile
                </h1>

            </div>

            <div className="edit-content">

                <div className="input-group">

                    <p className="input-label">
                        Name
                    </p>

                    <input
                        type="text"
                        value={draftName}
                        onChange={(e) =>
                            setDraftName(
                                e.target.value
                            )
                        }
                        placeholder="Your name"
                        className="input-field"
                    />
                </div>

                <div className="input-group">

                    <p className="input-label">
                        Email
                    </p>

                    <input
                        type="email"
                        value={draftEmail}
                        onChange={(e) =>
                            setDraftEmail(
                                e.target.value
                            )
                        }
                        placeholder="Email"
                        className="input-field"
                    />
                </div>
                
                <div className="input-group">
                    <p className="input-label">
                        Phone
                    </p>
                    <input
                        type="text"
                        value={draftPhone}
                        onChange={(e) =>
                            setDraftPhone(
                                e.target.value
                            )
                        }
                        placeholder="Phone Number"
                        className="input-field"
                    />
                </div>
                
                <div className="input-group">
                    <p className="input-label">
                        Bio
                    </p>
                    <textarea
                        value={draftBio}
                        onChange={(e) =>
                            setDraftBio(
                                e.target.value
                            )
                        }
                        placeholder="Your bio"
                        className="profile-textarea"
                    />
                </div>
                    <button
                        className="primary-button"
                        onClick={handleSave}
                    >
                        Save Changes
                    </button>

                </div>

            </div>
            );
}

            export default EditProfile;