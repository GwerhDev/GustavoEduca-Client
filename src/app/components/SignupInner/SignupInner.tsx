import s from './SignupInner.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupInner } from '../../../middlewares/redux/actions/auth';

export const SignupInner = () => {
  const dispatch: any = useDispatch();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSignup(e: any) {
    e.preventDefault();
    const formData = { email, username, password }
    dispatch(signupInner(formData));
  }

  return (
    <>
      <div className="form-group">
        <input onInput={(e: any) => setUsername(e.target.value)} type="text" placeholder="Username" />
        <input onInput={(e: any) => setEmail(e.target.value)} type="email" placeholder="Email" />
        <input onInput={(e: any) => setPassword(e.target.value)} type="password" placeholder="Password" />
      </div>
      <button className={s.buttonSignup} onClick={handleSignup}>Signup</button>
    </>
  )
}
