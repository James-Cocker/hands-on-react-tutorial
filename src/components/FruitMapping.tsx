interface Fruit{
  id: number;
  name: string;
}

const fruits = [
  { id: 1, name: 'apple' },
  { id: 2, name: 'orange' },
  { id: 3, name: 'blueberry' },
  { id: 4, name: 'banana' },
  { id: 5, name: 'kiwi' }
];

//fruits:Fruit[] as props
function FruitList() {

  function handleClick(id:number){
    console.log(`removed ${id}`);
  }

  console.log(`Fruits: ${fruits}`);
  const fruitListItems = fruits.map((fruit) => (
    <li onClick={() => handleClick(fruit.id)} key={fruit.id}>{fruit.name}</li>
  ));
  return <ul>{fruitListItems}</ul>;
}

export default FruitList;