import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
    let username, password,fullname;

    return (
      <div>
      
        <div id="register_Container" style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL}/signback.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh'
        }}>
          <div className="multicolor-text">
        MindMerge
  </div>
          <div id="logborder">
            <h1>Create an Account🚀</h1>
            <p>Full name</p>
            <input type="text"  placeholder="Enter your Full name..." value={fullname} onChange={(obj)=> fullname = obj.target.value}/>
            <p>Email</p>
            <input type="text"  placeholder="Enter your email..." value={username} onChange={(obj)=> username = obj.target.value}/>
            <p>Password</p>
            <input type="text" placeholder="Enter your password..." value={password} onChange={(e)=> password = e.target.value}/>
            <button onClick={()=>console.log(username, password)}>Sign Up</button>
            <hr></hr>
            <p>Already have an account? <Link to="/Login">Login</Link></p>
            </div>
        </div>
        </div>
    );
}

export default Signup;