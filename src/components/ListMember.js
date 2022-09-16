import React from 'react'
import Logo4 from '../logo4'
import { useDispatch } from 'react-redux';
import { deleteTodoAsync} from '../redux/todoSlice';


const ListMember = ({ id, title }) => {

  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteTodoAsync({id: id}))
  }

  return (
    <div className='Wf2'>
        <div className='Ws2'>
        <Logo4 className='im2' />
        <p className='tm2' >{title}</p>
         </div>
         <button onClick={handleDeleteClick} >ฆ่า</button>
     </div>
  )
}

export default ListMember