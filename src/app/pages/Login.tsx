import { Link } from "react-router-dom";
import { LoginGoogle } from "../components/LoginGoogle/LoginGoogle";
import { LoginInner } from "../components/LoginInner/LoginInner";

const Login = () => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Login</h2>
        <LoginInner />
        Login using:
        <LoginGoogle />
        <div className="divider"/>
        <span className="auth-form-text">
          Don't have an account yet? Sign up here and get started with GustavoEduca today! <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login;