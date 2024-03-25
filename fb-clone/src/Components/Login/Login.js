import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {
    // sign in ...
  };
  return (
    <div className="login">
      <div className="login-logo">
        <img
          src="https://logowik.com/content/uploads/images/facebook-new-2023-icon9594.logowik.com.webp"
          alt=""
        />
        <img
          src="https://logos-world.net/wp-content/uploads/2020/05/Facebook-Logo.jpg"
          alt=""
        />
      </div>
      <button type="submit" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
}

export default Login;
