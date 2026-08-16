import React from 'react'
import SideNav from '../Side-nav/SideNav'
import "./Layout.css"

function Layout({children}) {
  return (<>
      <main className='main-container'>
           <SideNav></SideNav>
           <section className='main-section'>
            {children}
           </section>
      </main>
  
  </>)
}

export default Layout