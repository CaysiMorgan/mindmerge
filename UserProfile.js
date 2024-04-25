import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserProfile() {
  let fullname, Email, Major, field;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null); // Initialize to null

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickChangePicture = () => {
    const inputElement = document.getElementById("fileInput");
    inputElement.click();
  };

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleuserClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="UserProfile">
      <div className="headingBorder">
        <h4 id="heading">
          {" "}
          <Link to="/dashboard">Dashboard</Link> Quizzes Flashcards{" "}
          <Link to="/UploadPage">Uploads</Link>{" "}
          <Link to="/Timer">StudyTimer</Link>
        </h4>
        <div id="profile" onClick={handleProfileClick}>
          My Profile
          {isDropdownOpen && (
            <div className="dropdown">
              <ul>
                            
                            <li><Link to="/SignOutPage">
                  <button>Log Out</button>
                </Link></li>
                                <li><Link to="/userprofile"><button>UserProfile </button> </Link> </li>
                            </ul>
            </div>
          )}
        </div>
      </div>
      <div id="page">
        <div id="sidebar">
          <p>
            <img
              className="icon"
              src={process.env.PUBLIC_URL + "/proimg.png"}
              alt="Profile"
            />
            <Link to="/UserProfile">
              <button>Profile</button>
            </Link>
          </p>
          <p>
            <img
              className="icon"
              src={process.env.PUBLIC_URL + "/passimg.png"}
              alt="Password"
            />
            <Link to="/PasswordPage">
              <button>Password</button>
            </Link>
          </p>
          <p>
            <img
              className="icon"
              src={process.env.PUBLIC_URL + "/notimg.png"}
              alt="Notifications"
            />
            <button>Notifications</button>
          </p>
          <p>
            <img
              className="icon"
              src={process.env.PUBLIC_URL + "/setimg.png"}
              alt="Settings"
            />
            <button>Settings</button>
          </p>
          <p>
            <img
              className="icon"
              src={process.env.PUBLIC_URL + "/signimg.png"}
              alt="Sign Out"
            />
            <Link to="/SignOutPage">
              <button>Sign out</button>
            </Link>
          </p>
        </div>

        <div id="mainedit">
          <h1>Edit profile </h1>
          <div>
            <img
              id="profilephoto"
              src={profilePicture || 'passwwimg.png'} // Use default image if profilePicture is null
              alt="Profile"
              style={{ width: 200, height: 200, borderRadius: "50%" }}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handlePictureChange}
              style={{ display: "none" }}
              id="fileInput"
            />
            <div id="words">
              <p> Upload Photo </p>
              <p> Your photo should be in JPG or PNG format</p>
              <button onClick={handleClickChangePicture}>Change Picture</button>
            </div>
          </div>
          <p>Full Name</p>
          <input
            type="text"
            placeholder="Enter your full Name..."
            value={fullname}
            onChange={(obj) => (fullname = obj.target.value)}
          />
          <p>Email</p>
          <input
            type="text"
            placeholder="Enter your email..."
            value={Email}
            onChange={(e) => (Email = e.target.value)}
          />
          <p>Major/Field</p>
          <input
            type="text"
            placeholder="Enter your Major/Field..."
            value={Major}
            onChange={(e) => (Major = e.target.value)}
          />
          <p>Field of study</p>
          <input
            type="text"
            placeholder="Enter your Major/Field..."
            value={field}
            onChange={(e) => (field = e.target.value)}
          />
          <div>
            <button id="profilebut">Cancel</button>
            <button
              id="profilebut"
              onClick={() => console.log(fullname, Email, Major, field)}
            >
              Share Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
