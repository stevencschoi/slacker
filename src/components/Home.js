import React from "react";
import "../styles/Home.scss";
import { useSelector, useDispatch } from 'react-redux'
import { add, reduce } from '../redux'

export default function Home() {
  const count = useSelector(state => state.count.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Welcome to slacker!</h1>
      {count}
      <button onClick={() => dispatch(add())}>add</button>
      <button onClick={() => dispatch(reduce())}>reduce</button>
    </>
  );
}
