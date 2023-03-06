import { useState } from "react"

const Basicform = () => {

    const [email ,setemail] = useState("")
    const [password, setpassword] = useState("")
    
    const [allentry, setallentry] = useState([])
    
    const submitform = (s) => {
        s.preventDefault()

        if (email && password) {
            
            
            // id = only unique key 
            const newdata = {id : new Date().getTime.toString() , email1: email, password1: password }
            
            setallentry([...allentry, newdata])
            
            //    input  clear after login
            setemail("")
            setpassword("")

        } else {
            alert("plase type all input field")
        }
        
    }

    return (
        <>
             <br /><br />
            <form action="" onSubmit={submitform}>
                <label htmlFor="">E-mail   :- </label>
                <input type="text" name="email" id="" value={email} onChange={(e)=>setemail(e.target.value)} /> <br /> <br />

                <label htmlFor="">Password :- </label>
                <input type="password" name="password" id="" value={password} onChange={(e)=>setpassword(e.target.value)} /> <br /><br />
                
                <button type="submit">Submit</button> 
            </form>
        <br />
            <div>
                {
                    allentry.map((newelem) => {

                    //    typ 1  destructuring
                        const {id ,email1 ,password1} = newelem

                        return (

                            <div key={id}>

                                {/* type 1 */}
                            <div>
                               <h3>Email : {email1} , Password : {password1} </h3>
                            </div>

                                {/* type 2  without destructuring */}
                            {/* <div>
                               <h3>Email : {newelem.email1} , Password : {newelem.password1} </h3>
                            </div> */}
                            </div>
                            )
                    })
                }
            </div>
        </>
    )
}
export default Basicform