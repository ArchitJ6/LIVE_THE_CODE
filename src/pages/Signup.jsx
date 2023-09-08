import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Signup = ({ setLoader }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
    setLoader(true);
  };
  setLoader(false);

  return (
    <>
      <div className="login-div">
        <div className="registera login">
          <img src={logo} alt="" />
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                placeholder="Display Name"
                className="input-field"
                type="text"
                required
              />
              <label htmlFor="input-field" className="input-label">
                Display Name
              </label>
              <span className="input-highlight"></span>
            </div>
            <div className="input-container">
              <input
                placeholder="Email"
                className="input-field"
                type="email"
                required
              />
              <label htmlFor="input-field" className="input-label">
                Email
              </label>
              <span className="input-highlight"></span>
            </div>
            <div className="input-container">
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                required
              />
              <label htmlFor="input-field" className="input-label">
                Password
              </label>
              <span className="input-highlight"></span>
            </div>
            <div className="input-container">
              <input
                type="text"
                className="input-field"
                placeholder="Conatct Number"
                required
              />
              <label htmlFor="input-field" className="input-label">
                Contact Number
              </label>
              <span className="input-highlight"></span>
            </div>
            <div className="input-container">
              <input
                type="text"
                className="input-field"
                placeholder="Qualification"
                required
              />
              <label htmlFor="input-field" className="input-label">
                Qualification
              </label>
              <span className="input-highlight"></span>
            </div>
            <div className="input-container">
              <select
                type="date"
                className="input-field"
                required
              >
                <option value="M">M</option>
                <option value="F">F</option>
                <option value="O">O</option>
              </select>
            </div>
            <div className="input-container">
              <input
                type="date"
                className="input-field"
                placeholder="Password"
                required
              />
            </div>
            <button>Submit</button>
          </form>

          <div className="already">
            <p>
              Don't have an account?{" "}
              <Link onClick={() => setLoader(true)} to="/login">
                Login
              </Link>
            </p>
          </div>

          {/* {done && <span style={{color: "green"}} className="taskMsg">Credentials Created!!!</span>}
      {err && <span style={{color: "red"}} className="taskMsg">{err}</span>} */}
        </div>
      </div>
      <div className="colorSVG"></div>
      <div className="colorSVG2 colorSVG2-login"></div>
    </>
  );
};

export default Signup;
