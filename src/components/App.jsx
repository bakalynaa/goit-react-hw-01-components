import React from 'react';
import user from '../data/user.json';
import Profile from './Profile/Profile';
import data from '../data/data.json';
import Statistics from './Statistics/Statistics';

export const App = () => {
  return (
    <>
      {/*<div*/}
      {/*  style={{*/}
      {/*    height: '100vh',*/}
      {/*    display: 'flex',*/}
      {/*    justifyContent: 'center',*/}
      {/*    alignItems: 'center',*/}
      {/*    fontSize: 40,*/}
      {/*    color: '#010101'*/}
      {/*  }}*/}
      {/*>*/}
      {/*  React homework template*/}
      {/*</div>*/}
      <Profile user={user} />
      <Statistics title='Upload stats' stats={data} />
    </>
  );
};
