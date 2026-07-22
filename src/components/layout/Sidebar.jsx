import "./Sidebar.css";

import { NavLink } from "react-router-dom";

const menuItems = [

    {
        name:"Dashboard",
        path:"/"
    },

    {
        name:"Dataset",
        path:"/dataset"
    },

    {
        name:"Model Selection",
        path:"/model-selection"
    }

];

function Sidebar(){

    return(

        <aside className="sidebar">

            <div className="sidebar-logo">

                <h2>EEG</h2>

                <p>Research Dashboard</p>

            </div>

            <ul className="sidebar-menu">

                {

                    menuItems.map(item=>(

                        <li key={item.name}>

                            <NavLink to={item.path}>

                                {item.name}

                            </NavLink>

                        </li>

                    ))

                }

            </ul>

        </aside>

    );

}

export default Sidebar;