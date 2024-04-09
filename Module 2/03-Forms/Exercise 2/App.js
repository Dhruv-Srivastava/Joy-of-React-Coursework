import React from 'react';

const CORRECT_CODE = '123456';

function TwoFactor() {
  const [code,setCode] = React.useState("")
  const [isLoggedIn,setIsLoggedIn] = React.useState(false)

  function handleSubmit(e){
    e.preventDefault();
    if(code===CORRECT_CODE)
      setIsLoggedIn(true)

    else
        window.alert("Please enter the correct code.")
    
    setCode("")
  }

  if(isLoggedIn){
    return (
      <div className="row">
        <h1>Hey! You are logged in</h1>
        <button onClick={()=>setIsLoggedIn(false)}>Log Out</button>
      </div>
    )
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="auth-code">
        Enter authorization code:
      </label>
      <div className="row">
        <input
          id="auth-code"
          type="text"
          required={true}
          maxLength={6}
          value={code}
          onChange={e=>setCode(e.target.value)}
        />
        <button>Validate</button>
      </div>
    </form>
  );
}

export default TwoFactor;