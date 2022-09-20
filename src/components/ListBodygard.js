import React from 'react'
import Hlogo from '../images/image6.png'
import { useDispatch } from 'react-redux';
import { deleteTodoAsync} from '../redux/todoBodyguard';


const ListBodygard = ({id,title}) => {

  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteTodoAsync({id: id}))
  }

  // if (isLoading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }

  return (
    <>
     <div className='Output'>
        <div className='OutM'>
         <div className='OutIn'>
           <img src={Hlogo} alt='key' width='40' height='30'/>
           <p>{title}</p>
          </div>
          <button onClick={handleDeleteClick} >ลบ</button>
         </div>
      </div>
    </>
  )
}

export default ListBodygard