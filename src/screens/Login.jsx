
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState('');

  const handleLogin = () => {    // 로그인 로직 구현    

    console.log('API 요청 전송 전');
    axios.post('/main/auth/login', { username, password })
      .then(res => {
        setData(res.data);
        console.log('API 응답:', res.data);
      })
      .catch(err => {
        console.error('API 요청 실패:', err);
      });
    };

  return (
    <div style={{ padding: '20px' }}>
      <h1>로그인</h1>
      <input
        type="text"
        placeholder="사용자 이름"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ margin: '10px 0', padding: '10px', width: '300px' }}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ margin: '10px 0', padding: '10px', width: '300px' }}
      />
      <button onClick={handleLogin} style={{ padding: '10px 20px' }}>로그인</button>
    </div>
  );
};

export default Login;


