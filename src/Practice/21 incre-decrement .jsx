import { useState } from "react"
import Button from '@mui/material/Button';


const IncreDecre = () => {

    const [value, setvalue] = useState(0)
    
    const increment = () => {
        setvalue(value + 1)
    }
    const decrement = () => {
        if (value > 0) {
            setvalue(value - 1)       
        } else {
            setvalue(0)
            alert ("stop")
        }

    }

    return (
        <>
            <div className="incremaindiv">
                <div className="increcenterdiv">
                    <h1>{value}</h1>
                    <div className="buttondiv">
                        
                        <Button className="incre" onClick={increment}>Increment</Button>
                        <Button className="decre" onClick={decrement}>Decrement</Button>
                    </div>
                </div>

            </div>
        </>
)    
}
export default IncreDecre
