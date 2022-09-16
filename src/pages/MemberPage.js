import React from 'react'
import { useEffect } from "react";
import Logo from '../logo3';
import ListMember from '../components/ListMember';
import { useDispatch, useSelector } from 'react-redux';
import { getTodosAsync } from '../redux/todoSlice';

function MemberPage() {

	const dispatch = useDispatch();

	const todoo =useSelector((state) => state.todos);

	useEffect(()=>{
		dispatch(getTodosAsync());
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
        {todoo.map((todo) => (
          <ListMember id={todo._id} title={todo.title}/>
        ))}
      </ul>
    </div>
  )
}

export default MemberPage