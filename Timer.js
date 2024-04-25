import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PomodoroTimer = () => {
  const [isActive, setIsActive] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(25 * 60); // 25 minutes in seconds
  const [progress, setProgress] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleuserClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        setSecondsRemaining(prevSeconds => {
          const newSeconds = Math.max(0, prevSeconds - 1);
          setProgress((1 - (newSeconds / (25 * 60))) * 100);
          return newSeconds;
        });
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isActive]);

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleSkipBreak = () => {
    setSecondsRemaining(5 * 60); // Short break duration in seconds
    setProgress(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="pomodoro-timer">
      <div className="headingBorder">
        <h4 id="heading"> <Link to="/dashboard">Dashboard</Link> Quizzes Flashcards <Link to="/UploadPage">Uploads</Link> <Link to="/Timer">StudyTimer</Link></h4>
        <div id="profile" onClick={handleProfileClick}>
          My Profile
          {isDropdownOpen && (
            <div className="dropdown">
              <ul>
                <li><button>Log out</button></li>
                <li><a href="/userprofile">UserProfile</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="timer-display">{formatTime(secondsRemaining)}</div>
      <div className="progress-bar">
        <div style={{ width: `${progress}%` }}></div>
      </div>
      <div className="controls">
        <button onClick={handleStartPause}>{isActive ? 'Pause' : 'Start'}</button>
        <button onClick={handleSkipBreak} disabled={!isActive}>Skip to Break</button>
      </div>
    </div>
  );
};

export default PomodoroTimer;

