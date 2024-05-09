import React from 'react';
// import logo from './logo.svg';
import Greeter from './components/Greeter';
import Hello from './Hello';
import AnotherButton from './components/YetAnotherButton';
import PokemonDetail from './components/PokemonAPI';
import DropdownMenu from './components/ConditionalRendering';
import './App.css';
import FruitList from './components/FruitMapping';
import ExampleForm from './components/Form';

function App() {

  const user = {first: "John", last: "Maker"};

  const numbers = [1, 2, 3, 4, 5];
  const tens: number[] = [];

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    tens.push(number * 10);
  }

  // const data = [
  //   { id: 1, name: 'apple' },
  //   { id: 2, name: 'orange' },
  //   { id: 3, name: 'blueberry' },
  //   { id: 4, name: 'banana' },
  //   { id: 5, name: 'kiwi' }
  // ];

  function handleClick() {
    console.log('clicked');
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Greeter first = "Joe" last = "Apples"/>

      <Greeter first={user.first} last={user.last} />

      {/* This will cause an error
      <Hello name="David" enthusiasmLevel={0}/> */}

      <Hello name="David" enthusiasmLevel={1}/>

      <p>
        My numbers:
        {tens.map((number) => (
          <span key={number}> {number} </span>
        ))}
      </p>

      <br/>

      <AnotherButton init={5} />

      {/* <FruitList fruits={data} /> */}
      <FruitList/>

      <button onClick={handleClick}>Click Me!</button>

      <PokemonDetail pokemon="ditto"/>

      <DropdownMenu />

      <ExampleForm/>
    </div>
  );
}

export default App;
