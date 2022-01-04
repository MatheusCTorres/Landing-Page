import React, {useState} from 'react'
import './Navbar.css'
import {FiMenu, FiX} from 'react-icons/fi'

export default function Navbar({navbarLinks}) {

    const [menuClick, setMenuClick] = useState(false)

    const toggleMenuClick = () =>{ 
        setMenuClick(!menuClick)
    }

    return (
        <div>
            <div className="navbar">
                <span className="navbar_logo">travell</span>
                {menuClick ?( 
                    <FiMenu size={25} className="navbar_menu" onClick={toggleMenuClick}/>
                ):(
                    <FiX size={25} className="navbar_menu" onClick={toggleMenuClick}/> 
                )}
                <ul className={menuClick? "navbar_list" : "navbar_list navbar_list--active"}>
                    {navbarLinks.map(items =>{
                        return(
                            <li className="navbar_item" key={items.title}>
                                <a href={items.url} className="navbar_link">{items.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}