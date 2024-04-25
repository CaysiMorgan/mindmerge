import React from 'react';
import { Link } from 'react-router-dom';
function Login() {
    let username, password;

    return (
      <div id="Login">
      
        <div id="Login_Container" style={{ 
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
            <h1>Welcome back👋</h1>
            <p>Email</p>
            <input type="text"  placeholder="Enter email..." value={username} onChange={(obj)=> username = obj.target.value}/>
            <p>Password</p>
            <input type="text" placeholder="Enter password..." value={password} onChange={(e)=> password = e.target.value}/>
            <button onClick={()=>console.log(username, password)}>Login</button>
            <hr></hr>
            <p>not a member yet? <Link to="/Signup">Register now</Link></p>

            
            </div>
        </div>
        </div>
    );
}

export default Login;