import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokemanAxios = () => {
    const [num, setnum] = useState()
    const [update, setupdate] = useState()
    const [move, setmove] = useState()
    
    
    useEffect(() => {
        
        let getdata = async() => {
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res)
            setupdate(res.data.name)
            setmove(res.data.moves.length)
        }

        getdata()
    } )

    return (
        <>
          <h2> {update}</h2> 
          <h2> {move}</h2> 

            <select name={num} id="" onChange={(event) => {
                setnum(event.target.value)
            }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </>
    );
};

export default PokemanAxios ;