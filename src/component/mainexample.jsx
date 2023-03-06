import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Mainexample = () => {
  return (
    <>
            <div className="container-fluid ">
                 
        <div className="row text-center fs-3 bg-warning p-3 ">
              <div className="col-md-3">
                   <Link to ="examplecom">Example component</Link>
              </div>
              <div className="col-md-3">
                   <Link to ="classcom">Class component</Link>
              </div>
              <div className="col-md-3">
                   <Link to ="functioncom">Function component</Link>
              </div>
              <div className="col-md-3">
                   <Link to ="practice">Practice</Link>
              </div>
        </div>
         </div>
            <div className="container">
        <Outlet></Outlet>
                 
           </div>
                       
    </>
  )
}

export default Mainexample
