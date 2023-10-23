import React from 'react';
import "./header.css"


export default function Header(){
 
    return(
        <header className="header">
            <ul className="links">
            <li><a className = "name" href="#">Carousel</a></li>
            <li><a className = "home" href="#">home</a></li>
            <li><a className = "link" href="#">link</a></li>
            <li><a className = "disabled" href="#">desable</a></li>
            </ul>


            <div className="searchDiv">
                <input type="text" placeholder='Search'/>
                <button>Search</button>
            </div>
        </header>
    )
}