import React from 'react'
import { useEffect,useState } from "react";
import ListBodygard from '../components/ListBodygard'
import { useDispatch, useSelector } from 'react-redux';
import { getTodosAsync,addTodoAsync } from '../redux/todoBodyguard.js';
// import ReactLoading from 'react-loading'



function BodyGardpage() {

  const [loading,setLoading] = useState(true) //Loading

  const [value, setValue] = useState('');

  const dispatch = useDispatch();

	const todoo  =useSelector((state) => state.bodys);

	useEffect(()=>{
    setLoading(true)                    //Loading
		dispatch(getTodosAsync());
    setLoading(false)                   //Loading

	},[dispatch])

  const onSubmit = (event) => {
		event.preventDefault();
		dispatch(
			addTodoAsync({ //add todo vuale from api
				title: value,
			})
		);
    setValue('')
	};


  return (
    <div className='bgAll3'>
     <div className='bg3'>
         <div className='WrapLogo3'>
          <div className='Logo3'></div>
         </div>
         <div className='WrapText3'>
          <h1>Bodygard</h1>
          <p>ให้บอดี้การ์ดพิมพ์ชื่อคนที่จะช่วย</p>
          <p>1คน</p>
         </div>
         <form  onSubmit={onSubmit} className='WrappInput'>
             <input  
                placeholder="พิมพ์ชื่อ" type="text" 
                value={value}
                onChange={(event) => setValue(event.target.value)}
                required
              />
             <button>เพิ่มสมาชิก</button>
         </form>
     </div>
     <div className='WrapOutput'>
        <h1>คนที่ถูกช่วยคือ</h1>
     </div>
     <ul className='List-group'>
      {loading ? (                      //Loading
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <h1>Loading...</h1>
            </div>
          ): (
              <>
                {todoo.map((todo) => (
                  <ListBodygard id={todo._id} title={todo.title}/>
                ))}
              </>
          )}
        {/* {todoo.map((todo) => (
          <ListBodygard id={todo._id} title={todo.title}/>
			  ))} */}
     </ul>
    </div>
  )
}

export default BodyGardpage