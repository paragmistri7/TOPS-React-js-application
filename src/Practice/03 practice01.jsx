import React, { Component } from 'react';
import { FaBeer,FaLongArrowAltRight }  from "react-icons/fa";
import "../index.css"

const name = "Parag"
const date = new Date().toLocaleDateString()
const time = new Date().toLocaleTimeString()
const img1 = "https://picsum.photos/id/27/200/300"
const img2 = "https://picsum.photos/seed/picsum/250/300"
const img3 = "https://picsum.photos/id/62/200/350"
const link = "https://www.google.com/maps/@23.0859578,72.5523945,3a,90y,349.15h,83.04t/data=!3m6!1e1!3m4!1sLl5BnHpqfY3Gsmo2g-QaCQ!2e0!7i13312!8i6656"

const heading = {
  color: "blue",
  textAlign: "center",
  textTransform: "capitalize",
  textDecoration: "underline",
  textDecorationColor: " tomato",
  margin: "50px 0",
fontFamily: " 'Rubik Bubbles', cursive",
  fontWeight : "bold"
};

class Practice01 extends Component {
    render() {
        return (
            <>
                <br />

                <h1>My name is {name}</h1>
                <h3>Today Date is {date} </h3>
                <h3>Today latest Time is {time} </h3>

                <img src={img1} />
                
                <span className="offset-2 fs-4 bg-black text-warning">click image to show my home location</span>
                <span className='fs-1 text-danger'> <FaLongArrowAltRight /> </span>
                <a href={link} target = "_parag.com">
                    <img src={img2} alt="" />
                </a>

                

                <h1 className='heading' style={heading}  >  <i>  latest pictures </i></h1>
                <div className='images'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>
                <h2 style= {{color : "red" , textAlign : "center", margin : "50px 0"}} >its end</h2>
            </>
        );
    }
}

export default Practice01;