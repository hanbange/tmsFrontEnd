
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    // 로그인 로직 구현
    console.log('로그인 시도:', username, password);
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


