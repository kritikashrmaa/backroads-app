import React from 'react'
import {pageLinks,socialLinks} from '../data'

const Footer = () => {
  return (
    <>
   <footer className="section footer">
    <ul className="footer-links">
      {
        pageLinks.map((i)=>{
          return(
            <li key={i.id}>
            <a href={i.href} className="footer-link">{i.text}</a>
          </li>
          )
        })
      }
    </ul>
    <ul className="footer-icons">
      {
        socialLinks.map((i)=>{
          return(
      <li key={i.id}>
         
          <a href={i.href} 
            target="_blank" 
            className="footer-icon" 
            rel="noreferrer">
            <i className={i.classl}></i>
        </a>
      </li>
          )
        })
     }
     </ul>
      
  
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date"></span> all rights reserved
    </p>
  </footer>
  </>
  )
}

export default Footer
