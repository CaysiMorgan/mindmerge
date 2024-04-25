import { useHistory } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import React from 'react';
import { Link } from 'react-router-dom';



function UploadPage() {
    ///const history = useHistory();
    ///const handleDashboardClick = () => {
       /// history.push('/dashboard');
     /// };
    const [files, setFiles] = useState(null);
    const [progress, setProgress] = useState({ started: false, pc: 0 });
    const [msg, setMsg] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const resources = [
        { name: 'Resource 1', type: 'Type1' },
        { name: 'Resource 2', type: 'Type2' },
        { name: 'Resource 3', type: 'Type3' },
        
    ]; // Example resource list
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleProfileClick = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    
   
    

    function handleUpload() {
        if (!files) {
            console.log("no file selected");
            return;
        }

        const fd = new FormData();
        for (let i = 0; i < files.length; i++)
            fd.append('file${i+1}', files[i]);

        setMsg("Uploading.....")
        setProgress(prevState => {
            return { ...prevState, started: true }
        })
        axios.post('http://httpbin.org/post', fd, {
            onUploadProgress: (progressEvent) => {
                setProgress(prevState => {
                    return { ...prevState, pc: progressEvent.progress * 100 }
                })
            },
            headers: {
                "Custom-Header": "value",

            }
        })
            .then(res => {
                setMsg("Upload Successful");
                console.log(res.data);
            })
            .catch(err => {
                setMsg("Upload failed");
                console.error(err);
            });
    }
    function handleSearchTypes() {
        const typesToSearch = ['Type1', 'Type2', 'Type3'];
        const filteredByType = resources.filter((resource) =>
            typesToSearch.includes(resource.type)
        );
        setSearchResult(filteredByType);
    }

    const filteredResources = resources.filter((resource) =>
        resource.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="UploadPage">
      <div className="headingBorder">
        <h4 id="heading"> <Link to="/dashboard">Dashboard</Link> Quizzes Flashcards <Link to="/Timer">StudyTimer</Link></h4>
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
           
            <h1 id="label">Resources</h1>
            <h2 id="explore">Explore</h2>

            <div className="searchBar">
                <input id="bar"
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                   
                />
            
            <button id="searchBut" onClick={handleSearchTypes}>Search Types</button>
            </div>
            <ul>
                {searchResult.map((resource, index) => (
                    <li key={index}>{resource.name}</li>
                ))}
            </ul>


            <div className="Uploading">
                
                <label htmlFor="fileInput">

                    <input
                        id="fileInput"
                        type="file"
                        style={{ display: 'none' }}
                        onChange={(e) => setFiles(e.target.files)}
                        multiple
                    />
                    <img id="uploadimg"
                        src={process.env.PUBLIC_URL + '/uploadimg.png'}
                        alt="upload img"
                        style={{ cursor: 'pointer' }}
                    />
                </label>
                <button id="uploadBut" onClick={handleUpload}> Upload</button>
            </div>
            <div className="loadBar">
                {progress.started && <progress max="100" value={progress.pc}></progress>}
                {msg && <span>{msg}</span>}
            </div>

            

            <button id="studyBut">Generate Study Material →</button>
           
        </div>

    );}

export default UploadPage;