import React , { useCallback } from "react";
const Usecallbackfunc = () => {

const clickhandle = useCallback (() => {
    console.log("clickhandle")

    fetch("https://jsonplaceholder.typicode.com/todos")
        // .then((ab) => ab.json())
        // .then((as) => {
        //                 console.log(as)                      
        //                 document.write(JSON.stringify(as))
        //         })
    
    // .then type 2 
        .then((ab) => {
            console.log(ab)
            ab.json()
        
        .then((bc) => {
        console.log(bc)
        })
    })
})

const Buttonfunc = (({buttonhandle}) => {
    console.log("buttonfunc");
    return <button onClick={buttonhandle}>click here</button>
})

    console.log("Usecallbackfunc");
    return (
        <>
            <Buttonfunc buttonhandle = {clickhandle} >
                {
                    console.log("main return  button")
                    
                }
        </Buttonfunc>
        </>
    )
}
export default Usecallbackfunc