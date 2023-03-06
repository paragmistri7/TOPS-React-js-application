import { useState } from "react"

const Shortcktevl = () => {
    const [data ,setdata] = useState("")
    return (
        <>
            {/* condition  */}
        <h1 className="h1style"> {"parag" || "gohil"}1 </h1>
        <h1 className="h1style"> {"parag" && "gohil"}2 </h1>

        <h1 className="h1style"> {data || "gohil"}3 </h1>
        <h1 className="h1style"> {data && "gohil"} 4</h1>

        <h1 className="h1style"> {"gohil" || data}5 </h1>
        <h1 className="h1style"> {"gohil" && data} 6</h1>

        <h1 className="h1style">
                {data ||
                    <>
                        import any component and data
                    </>
                }
        </h1>
            
      </>
    );
}
export default Shortcktevl