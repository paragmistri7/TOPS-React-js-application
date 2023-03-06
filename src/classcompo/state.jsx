import React, { Component } from 'react'

export default class state extends Component {
  constructor() {
    super();
    this.clkfn1 = this.clkfn1.bind(this);

    this.state = { data: <h1>main data</h1> ,date :  new Date};
  }
 
  
  seconddata = (<h1>second datatatatatat (data member) </h1>);
  thirddata = (<h1>"third data"</h1>);

  //    bind required in constructor
  clkfn1() {
   
    console.log("called");

    setTimeout(() => {
      this.setState({ data: "test" });
    }, 3000);
    
    // this.somedata = <h1>first change data 1</h1>
    //     this.seconddata = <h1>second data 1</h1>
    // )
  }

  // if u use arrow function = not required bind
  clkfn2 = () => {
    
    this.setState({
      data: <h1> new third data 2 </h1>,
    });
    
    this.thirddata = <h1>change third data 1</h1>;
  };

  render() {
    console.log("called render");

    //   somedata = not change data
    let somedata = <h1>first data</h1>;

    return (
      <>
        <h1>{this.state.date.toLocaleString()}</h1>
        {somedata}
        {this.seconddata}
        <div>
          <p>
            {" "}
            state tu tu hai vahi dilne Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Blanditiis quidem animi totam aut placeat ad.
          </p>
          <button onClick={this.clkfn1}>click here 1</button>
        </div>
        <br />
        <br />

        {this.state.data}
        <br />
        {this.thirddata}
        <div>
          <p>
            {" "}
            state tu tu hai vahi dilne Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Blanditiis quidem animi totam aut placeat ad.
          </p>
          <button onClick={this.clkfn2}>click here 2</button>
        </div>
        इकलौती जगह जहां आप this.state असाइन कर सकते हैं, कंस्ट्रक्टर है।
      </>
    );
  }
}
