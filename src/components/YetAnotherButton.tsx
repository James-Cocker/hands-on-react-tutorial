import React, {useState} from 'react';

type prop = {
  init:number;
}

function AnotherButton(prop:prop){
  const [counter, setCount] = useState(prop.init);

  function increment(){
    setCount(counter + 1);
  }

  return(
    <button onClick={increment}>Click Me! {counter}</button>
  )
}

export default AnotherButton;