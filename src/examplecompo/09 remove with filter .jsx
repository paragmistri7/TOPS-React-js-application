import { useState } from "react"

const Removefilter = () => {
    const employee = [
        {
            id:1, name:"hardik",age:23
        },
        {
            id:2, name:"parag",age:26
        },
        {
            id:3,name:"harnish",age:22
        }
    ]

    const [data, setdata] = useState(employee)
    
    const clearall = () => {
        setdata([])
    }
    const removebtn = (id) => {
        const mynewdata = data.filter((curvalue) => {
            return (
                curvalue.id !== id
            )
        }) 
        setdata(mynewdata)
    }
    return (

        <>
            {
                data.map((curvalue) => {
                    return (
                    
                            
                        <h3 key={curvalue.id} >my id : {curvalue.id} my name :  {curvalue.name} my age : {curvalue.age}
                        <button onClick= {()=> removebtn(curvalue.id)}>remove</button>
                        </h3>
                            
                    )
                })
            }
            <button onClick={clearall}>clear all</button>
        
        </>
    )
}
export default Removefilter