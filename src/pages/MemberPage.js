import React from 'react'
import { useEffect,useState } from "react";
import Logo from '../logo3';
import ListMember from '../components/ListMember';
import { useDispatch, useSelector } from 'react-redux';
import { getTodosAsync } from '../redux/todoSlice';
import ReactLoading from 'react-loading'


function MemberPage() {

  const [loading,setLoading] = useState(true)

	const dispatch = useDispatch();

	const todoo =useSelector((state) => state.todos);

	useEffect(()=>{
    setLoading(true)
		dispatch(getTodosAsync());
    setLoading(false)
	},[dispatch])

  return (
    <div className='bg1'>
      <div className='wrappMem'>
        <Logo/>
      </div>
      <div className='Wst'>
        <p className='St1'>ให้แม่มด เลือกฆ่าชาวบ้าน</p>
        <p className='St2'>1คน</p>
      </div>
      <ul className='List-group'>
      {loading ? (
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <ReactLoading type={"spin"} color={"#ffffff"} height={"30%"} width={"30%"} />
            </div>
          ): (
              <>
               {todoo.map((todo) => (
                <ListMember id={todo._id} title={todo.title}/>
               ))} 
              </>
          )}
        {/* {todoo.map((todo) => (
          <ListMember id={todo._id} title={todo.title}/>
        ))} */}
      </ul>
    </div>
  )
}

export default MemberPage