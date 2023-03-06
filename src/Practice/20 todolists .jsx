import { FaTrashAlt } from 'react-icons/fa';


const ToDolists = (props) => {
    return (
        <>
            <div className='todoprops'>
                <FaTrashAlt className='reicon' onClick={() => {
                    props.onselect (props.id)
                }} />
               <span>{props.text}</span> 
            </div>
        </>
     )
}
 export default ToDolists