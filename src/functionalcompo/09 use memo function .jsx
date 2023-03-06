import { useMemo } from "react"
import { useState } from "react"

const Usememoexample = () => {

const [wordindex , setwordindex] = useState(0)
    const words = ["what", "are", "you", "doing" , "parag"]
    
    const word = words[wordindex]  

     const computelettercount =(word) => {
        console.log("compute count")
         let i = 0;
         while (i < 10000) i++;
            // console.log(word.length)
    
        return word.length
    }
    const lettercount = useMemo(()=> computelettercount (word) , [word])
    return (
      <>
        <h2>
          lettercount :{lettercount} <br />
          word : {word} <br />
          words : {words + " "}{" "}
        </h2>

        <button
          onClick={() => {
            console.log("its called");
            //   type 1
            // const next = wordindex + 1 === words.length ? 0 : wordindex + 1
            // setwordindex(next)

            // type 2
            {
              if (wordindex + 1 === words.length) {
                setwordindex(0);
              } else {
                setwordindex(wordindex + 1);
              }
            }

            //    type 3
            // wordindex + 1 === words.length ? setwordindex(0) : setwordindex(wordindex + 1);
          }}
        >
          click here {wordindex}
        </button>
      </>
    );
}
export default Usememoexample