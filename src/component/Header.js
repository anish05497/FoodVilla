import React from "react";
import Logo from "../../assest/img/Logo.png";
import { Link } from "react-router-dom";

const Title = () => {
  return <img src={Logo} alt="logo" className="ml-2.5 w-[84px]" />;
};

const Header = () => {
  return (
    <div className="flex justify-between bg-white shadow fixed top-0 left-0 w-full h-[70px] z-50">
      <Title />
      <div className="">
        <ul className="flex max-w-2xl items-center justify-between mt-2.5 mr-2.5">
          <li className="p-2"><Link to="/"><button className="nav--btn mob:w-12 mob:text-xs">Home</button></Link></li>
          <li className="p-2"><Link to="/about"><button className="nav--btn mob:w-12 mob:text-xs">About</button></Link></li>
          <li className="p-2"><Link to="/contact"><button className="nav--btn mob:w-12 mob:text-xs">Contact</button></Link></li>
          <li className="p-2"><Link to="/help"><button className="nav--btn mob:w-12 mob:text-xs">Help</button></Link></li>
          <li className="p-2"><button className="nav--btn mob:w-12 mob:text-xs">Cart</button></li>
          <li className="p-2"><button className="nav--btn mob:w-12 mob:text-xs">Login</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
