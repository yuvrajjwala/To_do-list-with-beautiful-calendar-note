import React from 'react'

export const Footer = () => {
   let footerStyle = {
      position:"relative",
      top:"140px",
      padding:"25px",
      width:"100vw"
      }

   return (
      <footer className="bg-dark text-warning text-center" style={footerStyle} >
         <h6>ToDos List by <a className="text-warning" href="https://www.linkedin.com/in/yuvraj-jwala/">Yuvraj Jwala</a></h6>

      </footer>
   )
}
