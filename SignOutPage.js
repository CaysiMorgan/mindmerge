import React from "react";
import { Link } from "react-router-dom";

function SignOutPage() {
    return (
        <div id="signpage">
            <div id="sign">
                <img id="signoutimg"
                            src={process.env.PUBLIC_URL + '/signing.png'}
                            alt="folder"
                            style={{ cursor: 'pointer' }}
                        />
                <h1>SIGN OUT</h1>
                <p style={{color:"grey",marginTop:"-20px",marginBottom:"50px", fontSize:18}}>Oh! NO You're Leaving....</p>
                <p>Are you sure?</p> 
                <div>
                <button style={{border:"none", borderRadius:"10px"}} id="log">Yes, Log out</button>
                </div>
                <Link to="/UserProfile">
                  <p style={{margin:0, padding:0, marginTop:"-10px"}}>Cancel</p>
                </Link>
            </div>
        </div>
    );
}

export default SignOutPage;