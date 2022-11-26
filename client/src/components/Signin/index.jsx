import { useState } from "react";
import React from "react";
import { Link, useHistory} from "react-router-dom";
import styles from "./styles.module.css";
import { login } from "../../helper/Helper";



const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");


  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const history= useHistory()


  const handleLogin=e=>{
    e.preventDefault()
    login(data).then(res=>{
    if (res) {
      history.push('/')
    }
     
    })
  }

  // localStorage.removeItem("token");
	// localStorage.removeItem("user");
  return (
    
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={(e) => {
                     handleLogin(e)
            }}
            >
            <h1>Sign in to your account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
              
          </form>

          <div className={styles.bottom}>
          <h4 className="text-white"> New account? Join now</h4>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
         </div>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
