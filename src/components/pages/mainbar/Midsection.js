import { MdPhotoLibrary } from "react-icons/md";
import { FaUserTag } from "react-icons/fa";
import { MdLocalActivity } from "react-icons/md";





const Midsection = ()=>{
    return (
        <div className="mid_div">
            <div className="input">
                <img src="https://s.ndtvimg.com/images/entities/300/virat-kohli-967.png" alt="kkk" />
                <input type="search" placeholder="What's Your On Mind. Virat ?"/>
            </div>
            
            <div className="linetext">
                <div className="photo">
                <MdPhotoLibrary className="photo_lib"/>
                <p>Photo/Video</p>
                </div>

                <div className="tag">
                <FaUserTag className="photo_lib1"/>
                <p>Tag Friends</p>

                </div>

                <div className="feeling">
                <MdLocalActivity className="photo_lib2"/>
                <p>Feeling/Activity</p>

                </div>


            </div>

        </div>

    
        
    )
}


export default Midsection