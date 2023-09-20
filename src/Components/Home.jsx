import React from 'react'
import { useSelector } from 'react-redux';
import {userSelector} from '../store/selectors/user-selector';

function Home() {
  const user = userSelector(userSelector);
  return (
    <div>Welcome Back !!</div>
  )
}

export default Home