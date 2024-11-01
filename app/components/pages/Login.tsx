import { useState } from 'react';
import styles from '../styles/Home.module.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Logged in as: ${username}`);
    // Here, you can add logic to actually log the user in, such as:
    // - Validate the username and password
    // - Send a request to the server to authenticate the user
    // - If the login is successful, store the user's login status in localStorage
    localStorage.setItem('isLoggedIn', 'true');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;