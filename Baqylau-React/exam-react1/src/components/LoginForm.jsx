import React, { useState } from "react";

export default function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const[remove, setRemove] = useState(false);
  const [name, setName] = useState("");
  


  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsGuest(false);
  };

  const handleRegister = () => {
    setIsLoggedIn(true);
    setShowRegister(false);
  };

  const handleGuestLogin = () => {
    setIsGuest(true);
    setIsLoggedIn(true);
  };

  return (
    <div className="login">
      {!isLoggedIn ? (
        <div>
          {!showRegister ? (
            <>
              <button onClick={handleLogin}>Login</button>
              <button onClick={() => setShowRegister(true)}>Register</button>
              <button onClick={handleGuestLogin}>Guest Login</button>
            </>
          ) : (
            <div>
              <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />  
              <input type="text" placeholder="Email/Phone" />
              <input type="password" placeholder="Password" />
              <button onClick={handleRegister}>Register</button>
              <button onClick={() => setShowRegister(false)}>Back</button>
            </div>
          )}
        </div>
      ) : (
        <div>
          {isGuest ? <p>Қош келдіңіз! Сіз қонақ болып тіркелдіңіз</p> : <p style={{color: "green"}}>Қош келдіңіз!{name} !</p>}
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
          <button onClick={() => setRemove(true)}>Remove Account</button>
          {remove ? <p>Account removed</p> : null}

        </div>
      )}
    </div>
  );
}
