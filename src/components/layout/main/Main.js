 import MainStory from "../../pages/mainbar/MainStroy"
import MainContain from "../../pages/mainbar/MenContaint"

import Midsection from "../../pages/mainbar/Midsection"
import SideContaint from "../../pages/mainbar/SideContaint"

import "./Main.scss"
 


 function Main (){
    return(
        <main> 
             <div className="main_first">  
<MainStory/>
<Midsection/>
<MainContain/>


        </div>

        <div className="main_contact">
        <SideContaint/>
        </div>
        </main>
    )
 }


 export default Main