import React from 'react';
import style from './FriendList.module.css';


const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={style.container}>
        {friends.map(el =>
          <li className={style.item} key={el.id}>
            <span className={`${style.status} ${el.isOnline ? style.online : ''}`}></span>
            <img className={style.avatar} src={el.avatar} alt='User avatar' width='48' />
            <p className='name'>{el.name}</p>
          </li>)}
      </ul>
    </>
  );
};


export default FriendList;
