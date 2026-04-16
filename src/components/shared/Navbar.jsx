import NavbarLinks from "./NavbarLinks";
import logo from '../../assets/img/logo.png'
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    const links = [
      {  to : '/',
        children : 'Home'
      },
      {
        to : '/apps',
        children : 'Apps'
      },
      {
        to : '/installations',
        children : 'Installations'
      },

    ]
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            
                        </ul>
                    </div>
                   <Link to='/'><img className="w-10" src={logo} alt="loge" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        {links.map((link ,i) =>  <NavbarLinks key={i} to={link.to}>{link.children}</NavbarLinks>)}
                    
             
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-linear-225 from-[#632EE3] to-[#9F62F2] text-base-100 flex justify-center gap-2"><FaGithub />Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;