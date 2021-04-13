import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
      <div className="login-container">
        <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M59.1488 43.5667L24.683 60.9559V79.399L59.1488 62.0098V43.5667Z" fill="#1390E5"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M24.683 26.1787L59.1487 43.5679V62.0111L24.683 44.6218V26.1787Z" fill="#1180CB"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M59.1488 8.79071L24.683 26.1799V44.623L59.1488 27.2338V8.79071Z" fill="#35A2EC"/>
          </g>
          <defs>
          <clipPath id="clip0">
          <rect width="88" height="88" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        <h3>Вход</h3>
        <form onSubmit={handleSubmit}>
          <label for="login" style={{marginTop: 20, marginBottom: 20}}>
            <p>Логин</p>
            <input id="login" type="text" required onChange={e => setUserName(e.target.value)} />
          </label>
          <label for="pin" style={{marginBottom: 40 }}>
            <p>Пароль</p>
            <input id="pin" type="password" required onChange={e => setPassword(e.target.value)}/>
          </label>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <button type="submit">Войти</button>
          </div>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};