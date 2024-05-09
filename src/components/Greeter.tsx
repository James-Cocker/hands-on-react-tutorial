import React from 'react';

type props = {
  first: string;
  last: string;
}; 

function Greeter(props:props){
  // const {first, last} = props;
  // const {last} = props;
  return (
    <>
      <h1>Hello {props.first} {props.last}</h1>
      <h2>Can only return one element, so must wrap in empty tags.</h2>
    </>
  )
}

export default Greeter;