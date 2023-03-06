import React from 'react'; 
import ReactDOM from 'react-dom'; 

function ArrayAccessThrouProps(props) { 
    console.log(props);
    const list = props.menuitems; 
    
    const updatedList = list.map((listItems)=>{ 
        return (
            <li key={"parag"}> 
                    {listItems} 
            </li>
        );  
    });   
    return( <ul>{updatedList}</ul> ); 
} 
const menuItems = [1,2,6,4,5]; 

function Keymethod() 
{ 
	return( 
			<div> 
				<ArrayAccessThrouProps menuitems = {menuItems} />
			</div> 
		); 
} 
export default Keymethod
