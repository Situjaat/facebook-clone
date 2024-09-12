 import "./Navbar.scss"
 import { FaFacebook } from "react-icons/fa";
 import { IoIosSearch } from "react-icons/io";
 import { IoMdHome } from "react-icons/io";
 import { MdGroups } from "react-icons/md";
 import { CiShop } from "react-icons/ci";
 import { MdOutlineOndemandVideo } from "react-icons/md";
 import { RiPagesLine } from "react-icons/ri";
 import { GoPlusCircle } from "react-icons/go";
 import { FaFacebookMessenger } from "react-icons/fa";
 import { IoNotifications } from "react-icons/io5";
 import { IoIosArrowDropdown } from "react-icons/io";


 function Navbar (){
    return( 
    <nav>
         <div className="nav_search"> 
        <span>  <FaFacebook /></span>
        <div className="search_input">
         <IoIosSearch className="search" />   
            <input type="text" placeholder="Search Facebook"/>
        </div>
         </div>


         <div className="nav_home"> 
            <ul>
                <li>
                <IoMdHome /></li>
                <li> <MdOutlineOndemandVideo /></li>
                <li><CiShop /> </li>
                <li><MdGroups /> </li>
                <li><RiPagesLine />
                </li>
            </ul>
             
             </div>
         <div className="nav_profile">
              <div className="name_div">
              <img src="https://w0.peakpx.com/wallpaper/206/587/HD-wallpaper-virat-kohli-71st-century-kholi-kissing-lockit-kholi-lockit-virat-kholi-cricketer-india.jpg"
              />
               <p> Virat</p>
               </div>
               <ul className="message_div">
              <li> <GoPlusCircle className="profile_logo" /></li> 
             <li> <FaFacebookMessenger className="profile_logo" /></li> 
         <li><IoNotifications  className="profile_logo"/></li>       
           <li><IoIosArrowDropdown className="profile_logo"/>
           </li>  
           </ul>   
             </div>
         </nav>

        
    )
 }

 export default Navbar