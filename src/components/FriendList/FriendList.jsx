import React from 'react';
import style from './FriendList.module.css';
import Friend from '../Friend/Friend';


const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={style.container}>
        {friends.map(el =>
          <li className={style.item} key={el.id}>
            <Friend friend={el}/>
          </li>)}
      </ul>
    </>
  );
};


export default FriendList;
