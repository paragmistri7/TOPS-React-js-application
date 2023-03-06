
import React, { Component } from 'react'
import Cardcomponent from './cardcomponent.jsx'
import Myimage from '../classcompo/img11.jpg'
import Myimage2 from '../photos/imd12.jpg'

export default function App() {
  return (
      
    <>
      <div className="container">

      <div className="row h-100 w-100 ">
        <div className="col-3">
           <Cardcomponent img1 = 'https://mdbootstrap.com/img/new/standard/nature/184.webp' title = "Test 1"></Cardcomponent>
        </div>
        <div className="col-3"  >
          <Cardcomponent  img1={`${process.env.PUBLIC_URL}/publicimage/img18.png` }  title="Test 2"></Cardcomponent>
        
        </div>
        <div className="col-3">
        <Cardcomponent name = "parag" img1 = {Myimage}  title = "Test 3"></Cardcomponent>
        </div>
        <div className="col-3">
        <Cardcomponent img1 = {Myimage2} title = "Test 4"></Cardcomponent>
        </div>
    </div>
    
      </div>
    </>
  );
}
