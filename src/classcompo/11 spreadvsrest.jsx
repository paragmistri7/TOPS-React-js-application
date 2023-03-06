import { Component } from "react";

class Spreadvsrest extends Component {

    getData=(a,...data)=>{
        console.log("getData",data);
        console.log(a,...data);
        console.log(data[0]);
    }

    // getDataSpread=(a,b,c)=>{
    //     // console.log(a);
    //     console.log(a);
    // }

    render() {
        return (
            <>
                
                without spread <br/>
                let arr = [1,2,3]; <br/>
                let arr2 = [4,5]; <br/>
                arr = arr.concat(arr2); <br />
                
                let arr1 = [11 ,22 ,33] <br/>
                let arr2 = [47 , 48 , 49]<br/>

                arr3 = [...arr1 , ...arr2]

                {this.getData(10, 20, 30)}
                {this.getData("testing", "checking", "ccc")}
                
               {/* let  arry = [12,45,49]          
                {this.getDataSpread(4,5,6)}
                {this.getDataSpread(arry)} */}
      
            </>
        )
    }
}
export default Spreadvsrest