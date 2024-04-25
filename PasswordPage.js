import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
    

function PasswordPage() {
    let fullname, Email, Major, field, password, newPassword;
    const [files, setFiles] = useState(null);
    const [showProgress, setShowProgress] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   
  
    const handleProfileClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleuserClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="UserProfile">
            <div className="headingBorder">
                <h4 id="heading"> <Link to="/dashboard">Dashboard</Link> Quizzes Flashcards <Link to="/UploadPage">Uploads</Link> <Link to="/Timer">StudyTimer</Link></h4>
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
                            <img className="icon" src={process.env.PUBLIC_URL + '/proimg.png'} alt="Profile" />
                            <Link to="/UserProfile"><button>Profile</button>
            </Link>
                        </p>
                    
                    
                        <p>
                            <img className="icon" src={process.env.PUBLIC_URL + '/passimg.png'} alt="Password" />
                            <Link to="/PasswordPage"><button>Password</button>
            </Link>
                        </p>
                
                    <p>
                        <img className="icon" src={process.env.PUBLIC_URL + '/notimg.png'} alt="Notifications" />
                        <button>Notifications</button>
                    </p>
                    <p>
                        <img className="icon" src={process.env.PUBLIC_URL + '/setimg.png'} alt="Settings" />
                        <button>Settings</button>
                    </p>
                    <p>
                        <img className="icon" src={process.env.PUBLIC_URL + '/signimg.png'} alt="Sign Out" />
                        <Link to="/SignOutPage">
              <button>Sign out</button>
            </Link>
                    </p>
                </div>

                
    <div id="passedit">
        <p> <h1>Change Password</h1>
        <img id="iconedit" src={process.env.PUBLIC_URL + '/passwwimg.png'} alt="Settings" />
        </p>
        <div>
        <input 
            type="text"
            placeholder="Enter your email/Username..."
            value={Email}
            onChange={(e) => Email(e.target.value)}
        />
        </div>
        <div>
        <input
            type="text"
            placeholder="Old password..."
            value={password}
            onChange={(e) => password(e.target.value)}
        />
        </div>
        <div>
        <input
            type="text"
            placeholder="New password..."
            value={newPassword}
            onChange={(e) => newPassword(e.target.value)}
        />
        </div>
        <div>
        <input
            type="text"
            placeholder="Confirm password..."
            value={newPassword}
            onChange={(e) => newPassword(e.target.value)}
        />
        </div>
        <div>
         <button id="profilebut">Next</button>
                            
                        </div>
    </div>
            </div>
            <div>
    </div>
        </div>
        
        
    );

}

export default PasswordPage;
