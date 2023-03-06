import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Addnote03 = (props) => {

    const deleteevent = () => {
        props.ondelete(props.id)  
    } 
    
    return (
        <>
            <div className='addnoteheight'>
              <span className='addnoteid'> {props.id+1}</span>           
            <h3>{props.title}</h3>
            <span>{props.content}</span>
            </div>
            <p>

                <button className='noteaddbtn white' onClick={deleteevent} >
                    <DeleteIcon sx={{ fontSize: "30px" }}/>
                    </button>    
            </p>
        </>
    );
};

export default Addnote03 ;