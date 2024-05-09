import React, { SyntheticEvent } from "react";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

// Hello as a function
// function Hello({ name, enthusiasmLevel = 1 }: Props){
//   if (enthusiasmLevel <= 0){
//     throw new Error("Be more enthusiastic cmon :D");
//   }

//   return (
//     <div className="hello">
//       <div className="greeting">
//         Hello {name + getExclamationMarks(enthusiasmLevel)}
//       </div>
//     </div>
//   )
// }

interface State {
  currentEnthusiasm: number;
}

// Hello as a class that stores enthusiasm as state
class Hello extends React.Component<Props, State> {
  state = {currentEnthusiasm: this.props.enthusiasmLevel || 1};

  onIncrement = (event: SyntheticEvent) => {
    console.log(event);
    this.updateEnthusiasm(1);
  }

  onDecrement = (event: SyntheticEvent) => {
    console.log(event.target);
    this.updateEnthusiasm(-1);
  }
  
  render(){
    const { name } = this.props;

    if (this.state.currentEnthusiasm <= 0){
      throw new Error("Enthusiams cmon >:/");
    }

    return (
      <div className = "hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    )
  }

  updateEnthusiasm(change: number){
    this.setState((currentState) => {
      return { currentEnthusiasm: currentState.currentEnthusiasm + change};
    });
  }
} 

export default Hello;

function getExclamationMarks(numChars: number){
  return Array(numChars+1).join("!");
}