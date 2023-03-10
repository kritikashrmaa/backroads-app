import React from 'react'
import { pageLinks, socialLinks } from '../data';
import logo from '../images/logo.svg' ;


const Navbar = () => {
  return (
    <>
      <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
       
        <ul className="nav-links" id="nav-links">
          {
            pageLinks.map((item)=>{
              return(
              <li key={item.id} >
                  <a href={item.href} className="nav-link" > {item.text}</a>
              </li>
              )
            })
          }
        </ul>

        <ul className="nav-icons">
          {
            socialLinks.map((links)=>{
              const {href,classl} =links
              return(
                <li key={links.id}>
                <a href={href} 
                  target="_blank" 
                  className="nav-icon"
                  rel="noreferrer"
                  
                 >
                   <i className={classl}></i>
                 </a>
               </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar
