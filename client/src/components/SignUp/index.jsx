import { useState } from "react";
import React from "react";
import styles from "./styles.module.css";
import { signup } from "../../helper/Helper";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
const history= useHistory()


  const handleSignup=e=>{
    e.preventDefault()
    signup(data).then(res=>{
      alert('Signup successfull! login now')
      history.push('/login')
    })
  }

  const [error, setError] = useState("");
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value }) 
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={(e) => {
                   handleSignup(e)
            }}
            >
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="Full Name"
              name="fullname"
              onChange={handleChange}
              value={data.fullname}
              required
              className={styles.input}
            />

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
              Sign Up
            </button>
          </form>

          <div className={styles.bottom}>
          <h4 className="text-white"> Have an account? Login Now</h4>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Login
            </button>
          </Link>
         </div>


        </div>
      </div>
    </div>
  );
};

export default Signup;
