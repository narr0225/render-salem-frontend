import React from 'react'
import ListBodygard from '../components/ListBodygard'

function BodyGardpage() {

  	const todos = [
		{ id: 1, title: 'todo1'},
		{ id: 2, title: 'todo2'},
		{ id: 3, title: 'todo3'},
		{ id: 4, title: 'todo4'},
		{ id: 5, title: 'todo5'},
	];

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
         <div className='WrappInput'>
             <input placeholder='พิมพ์ชื่อ'/>
             <button>เพิ่มสมาชิก</button>
         </div>
     </div>
     <div className='WrapOutput'>
        <h1>คนที่ถูกช่วยคือ</h1>
     </div>
     <ul className='List-group'>
        {todos.map((todo) => (
          <ListBodygard id={todo.id} title={todo.title} completed={todo.completed}/>
			  ))}
     </ul>
    </div>
  )
}

export default BodyGardpage