import '../App2.css'
import React from 'react'
import {NavLink as Link} from 'react-router-dom'
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../redux/todoSlice';

function FirstPage() {

  const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(
			addTodoAsync({ //add todo vuale from api
				title: value,
			})
		);
	};

  return (
      <div>
        <div  className="Content2" >
            <div className='WrapLogo'>
              <div className='LogoS2'></div>
              <Link to='Member'><div className='LogoH2'></div></Link>
            </div>
            <div className="wrapping">
              <div className="tm">      
                <h1>จะให้ผู้เล่นรับบทชาวบ้าน</h1>
                <h1>ที่จะต้องตามล่าหาตัวแม่มด</h1>
                <h1>ที่แฝงตัวอยู่ในผู้เล่นด้วยกันเอง</h1>
              </div>
              <form onSubmit={onSubmit} className="input-p1">
                <input 
                  placeholder="พิมพ์ชื่อ" type="text" 
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                  required
                ></input>
                <button>เพิ่มสมาชิก</button>
              </form>
                <div className="BodyG">
                  <Link to='Bodygrad'>
                   <button className='BtG'>Bodygard</button>
                  </Link>
                </div>
            </div>
        </div>
        <footer className="foot1">
          <div className="cf1">
            <p>DearAll<br/>FRIENDS</p>
            <a href="/" className="seet1">setting</a>
          </div>
          <p className="copy1">copyright © 2022 all rights reserved</p>
        </footer>
      </div>
  );
};

export default FirstPage;
