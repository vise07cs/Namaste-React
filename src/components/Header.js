import { LOGO_URL } from "../../utils/constants";
import { useState }  from "react";
const Header = () => {

  // let btnName="Login";

  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="logo"
        />
      </div>

      <div className="nav-items">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact us  </li>
          <li className="nav-item">Cart</li>
          <button className="nav-item-login" onClick={()=>{
            loginBtn==="Login" ? setLoginBtn("Logout"): setLoginBtn("Login");
             console.log(loginBtn)}}
             >{loginBtn}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header; 
