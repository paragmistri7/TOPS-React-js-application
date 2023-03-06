import { useState } from "react"

const Objectspread = () => {

    
    const [data , setdata] = useState( {
        Name: "Parag Mistry",
        Age : 26,
        Degree : "Diploma"})
  
    const updated = () => {
        return (
            // without spread change only name data 
            // setdata({Name :"ndkjbd"})

            // using spread operator   *how to change only one data* 
            // setdata({...data , Name :"Gohil Parag"})
            setdata({ Name: "Gohil Parag", Age : 26,Degree : "Diploma"})
        )
    }
 
    return (
        <>       
        <h1>Name : {data.Name}</h1>
        <h1>Age : {data.Age}</h1>
        <h1>Degree : {data.Degree}</h1>
            
         <button onClick={updated}>update </button>
        </>
    )
}
export default Objectspread