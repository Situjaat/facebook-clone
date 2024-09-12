import { MdLabel } from "react-icons/md"
import "./Sidebar.scss"
import { BsThreeDots } from "react-icons/bs";



let firstSidebar=
    [
        {
           img:"https://w0.peakpx.com/wallpaper/206/587/HD-wallpaper-virat-kohli-71st-century-kholi-kissing-lockit-kholi-lockit-virat-kholi-cricketer-india.jpg",
           name:"Virat",
        },
        {
            img:"https://cdn.iconscout.com/icon/free/png-512/free-facebook-watch-logo-icon-download-in-svg-png-gif-file-formats--chatting-video-application-streaming-social-media-pack-logos-icons-5582590.png?f=webp&w=256",
            name:"Watch",
        },
        {
            img:"https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678116-calendar-512.png",
            name:"Events"
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKQ44HmP1ZxMLZNX4ZBLyae0qKbYUjLtV0CgTDjTVQfK9gApn3CRPQ_TdHdxELn_3oQxA&usqp=CAU",
            name:"Friends"
        },
        {
             name:"Memories",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9U2xmdsRbJchvbkNA6qJB1mzCoKxG8p4trg&s",
           
        },
    ]
    const Sidebar2=[
        {
           logo:"https://www.shutterstock.com/shutterstock/photos/2371334413/display_1500/stock-vector-man-eating-vegetarian-food-from-a-large-bowl-hand-drawn-vector-illustration-line-art-doodle-style-2371334413.jpg",
           label:"Undiscovered Eats"

        },
        {
            label:"Weekend Trip",
            logo:"data:image/png;base64,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",

        },
        {
          logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHfgsxAG5eeeevSiuRf30jLSyOF_2kXDh8uA&s",
          label:"Market"
        },
        {
            logo:"https://media.istockphoto.com/id/1085838082/vector/conference-room-meeting-icon.jpg?s=612x612&w=0&k=20&c=w2dyjVwYw-LDadgIFuRkvgMPBtljmsufgler8zcE288=",
            label:"Red Table Talk Group"
        },
        {
            logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsG7LJSnltWkcAJTcftSjg_MENBl-jq3oMQ&s",
            label:"Best Hidden Hiking Trails"
        }
    ]




function Sidebar (){
    return(
        <aside> 
         

            <div className="first_sidebar">
                {firstSidebar.map((ele)=>{
                    return(
                        <div className="logo_name_div">
                   
                   <img src={ele.img} />
                   <p>{ele.name}</p>
                   </div>
                   )
                })}
         <button> See More </button>

            </div>

            <div className="second_sidebar">
                <div className="shorcut">
                    <h4> Shortcuts</h4>
                    <span><BsThreeDots />
                    </span>
                     </div>
            {Sidebar2.map((el)=>{
                    return(
                        <div className="logo_name_div">
                   
                   <img src={el.logo} />
                   <p>{el.label}</p>
                   </div>
                   )
                })}
<button> See More </button>

            </div>
        </aside>
    )
}
export default Sidebar