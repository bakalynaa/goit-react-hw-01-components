import React from 'react';
import style from './Friend.module.css';


const Friend = ({ friend }) => {
  return (
    <>
      <span className={`${style.status} ${friend.isOnline ? style.online : ''}`}></span>
      <img className={style.avatar} src={friend.avatar} alt='User avatar' width='48'/>
      <p className='name'>{friend.name}</p>
    </>
  )
}

export default Friend;
