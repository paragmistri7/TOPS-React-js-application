import React from 'react';
// import Card from './08 cardprops ';
// import sdata from './09 cardprops ';
import Netflix from './11 Netflix ';
import Amazon from './12 Amazon ';

// console.log(sdata)

// const favseries = "netflix"
const favseries = "any"

// const Favss = () => {
    
//     if (favseries === "netflix") {
//         return (
//             <Netflix/>
//             )
//     } else {
//         return (
//             <Amazon/>
//             )
//     }
// }

const Cardprops = () => {
    

    return (
        <>
            <h1 className='propsheading'>Top 5 Web-Series</h1>
            <div className='containerprops'>
          
               
                
                { favseries === "netflix"  ? <Netflix/> : <Amazon/> }

                {/* <Favss/> */}
                    

                {/* {
                    sdata.map((val ,index , arr) => {
                        console.log(val, index)
                        return (
                                
                            <Card  key = {index}
                                
                            image01={val.image01}
                            cardtitle={val.cardtitle}
                            slink={val.slink}
                            name = {val.name}
                            />
                            )
                    })
                } */}
                
            </div>
        </>
    );
};

export default Cardprops ;