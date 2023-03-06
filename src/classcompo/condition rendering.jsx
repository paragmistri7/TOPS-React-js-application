import { Component } from "react";

class Conditionrender extends Component {
  constructor() {
    super();
    this.state = { logee: true };
    this.updatedata = this.updatedata.bind(this);
  }

  updatedata() {
    // console.log("called");
    //   this.setState({ logee: false });
      
    //  ! = only Boolean value 
    this.setState({ logee: !this.state.logee });
  }
    render() {



        return (
            <>
              {this.state.logee ? <h3>login</h3> : <h3>logout</h3>}
      
              <h3>{this.state.logee.toString()}</h3>
              <button onClick={this.updatedata}>click here</button>
            </>
          );





    //   if (this.state.logee) {
    //       return (
    //         <>
    //           <h1>log in...</h1>
      
    //           <h3>{this.state.logee.toString()}</h3>
    //           <button onClick={this.updatedata}>click here</button>
    //         </>
    //       );
        
    //   } else {
    //     return (
    //         <>
    //           <h1>log out</h1>
      
    //           <h3>{this.state.logee.toString()}</h3>
    //           <button onClick={this.updatedata}>click here</button>
    //         </>
    //       );
    //     }
        
        
  }
}
export default Conditionrender;
