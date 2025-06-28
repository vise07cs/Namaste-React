import { LOGO_URL } from "../../utils/constants";
import { useState , useEffect }  from "react";
import {Link} from "react-router-dom"

const Header = () => {

  // let btnName="Login";

  const [loginBtn, setLoginBtn] = useState("Login");

  console.log("Header Component Rendered");

  useEffect(() => {
    console.log(" useEffect called");
  }, []);

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
         

       <li className="nav-item"><Link to ="/"> Home </Link>  </li> 
          
          <li className="nav-item"><Link to ="/about"> About Us </Link>  </li>

          <li className="nav-item"><Link to ="/contact"> Contact us </Link>  </li>


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
