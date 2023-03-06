import React, { Component } from 'react';



class Practice02 extends Component {

    render() {
        let spancss = {
            textAlign: "center",
            backgroundColor: "yellow",
            borderRadius: "15px",
            padding : "50px"
        }
        
        // let curdate = new Date(2023 , 1 , 10 , 15 );
        let curdate = new Date();
        let curDate = curdate.getHours()
        
        let greetings = ""
        let cssstyle = { }
    
        if (curDate >= 1  && curDate < 11) {
            greetings = "Good Morning"
            cssstyle.color = "green"
        } else if(curDate >= 11  && curDate <= 19 ){
            greetings = "Good Afternoon"
            cssstyle.color = "orange"
        } else {
            greetings = "Good Night"
            cssstyle.color = "red"
        }
        

        return (
            <>
                <div style={{backgroundColor : "green" }}>
                   <h1  style={spancss}>Hello sir, <span  style={cssstyle} > {greetings} </span></h1>
                </div>
            </>
        );
    }
}

export default Practice02 ;