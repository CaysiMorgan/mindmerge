import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Forum from './Forum'; 

function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <div className="HomePage">
      <div className="headingBorder">
     
        <h4 id="heading">
          <Link to="/dashboard">Dashboard</Link> Quizzes Flashcards{' '}
          <Link to="/UploadPage">Uploads</Link>{' '}
<div className="searchBar">
  <input
    id="dashbar"
    type="text"
    placeholder="Explore..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  <button id="dashsearchBut">
    Search
  </button>
</div>

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
      <h1 id="label">Dashboard</h1>
      <p>
      <h2>  Popular Textbook</h2>
      </p>
    
      
      <p>
      <a href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://cloudflare-ipfs.com/ipfs/bafykbzacedyxquyfo55m4t7crajxtlojvktwjc4btjhd7rbpzl4lgcdjxq3pk?filename=Rosen%2C%20Kenneth%20H%20-%20Discrete%20mathematics%20and%20its%20applications-McGraw-Hill%20%282019%29.pdf">
    <img
        id="text1"
        src={process.env.PUBLIC_URL + '/text1.png'}
        alt="folder"
        style={{ cursor: 'pointer' }}
    />
</a>
          <a href="
https://books.google.com.jm/books/about/Fundamentals_of_Physics.html?id=HybkAwAAQBAJ&redir_esc=y
">
        <img id="text"
            src={process.env.PUBLIC_URL + '/text2.png'}
            alt="folder"
            style={{ cursor: 'pointer', borderRadius: '15px' }}
        />
        </a>
        <a href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://www.mymathscloud.com/api/download/modules/University/Textbooks/calculus-methods/4)Calculus%20Stewart.pdf?id=25358887">
    <img
        id="text"
        src={process.env.PUBLIC_URL + '/text3.png'}
        alt="folder"
        style={{ cursor: 'pointer' }}
    />
    </a>
    

</p>
      
      <p>
    <h2> Try these updated features</h2>
    <img
        id="quizimg"
        src={process.env.PUBLIC_URL + '/quizimg.png'}
        alt="folder"
        style={{ cursor: 'pointer' }}
    />
     
        <img id="pomodoimg"
            src={process.env.PUBLIC_URL + '/clockimh.png'}
            alt="folder"
            style={{ cursor: 'pointer', borderRadius: '15px' }}
        />
    <img
        id="flashimg"
        src={process.env.PUBLIC_URL + '/flashcard.png'}
        alt="folder"
        style={{ cursor: 'pointer' }}
    />
    </p>
    <p>
      <h2>  Popular Questions</h2>
      </p>
    
      
      <p>
    <img
        id="quiz1"
        src={process.env.PUBLIC_URL + '/ques1.png'}
        alt="folder"
        style={{ cursor: 'pointer' }}
    />
     
        <img id="quiz"
            src={process.env.PUBLIC_URL + '/ques2.png'}
            alt="folder"
            style={{ cursor: 'pointer', borderRadius: '15px' }}
        />
    <img
        id="quiz"
        src={process.env.PUBLIC_URL + '/ques3.png'}
        alt="folder"
        style={{ cursor: 'pointer' }}
    />
    
    
</p>
  
<div>
      {/* Other dashboard content */}
      <Forum />
    </div>
    </div>
  );
}

export default DashboardPage;
