import { Auth } from 'aws-amplify';
import { useState } from 'react';

const SignIn = async () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  try {
    const user = await Auth.signIn(username, password);
  } catch (error) {
    console.log('error signing in', error);
  }
  return (
    <>
      <label>Username</label>
      <input
        type='text'
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        required
      ></input>
      <label>Password</label>
      <input
        type='text'
        placeholder='password'
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      ></input>
      <button onClick={SignIn}>Sign In</button>
    </>
  );
};

export default SignIn;
