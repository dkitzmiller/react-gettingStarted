import React from 'react';

class Button extends React.Component {
  handleClick = () => {
  	this.props.onClickFunc(this.props.incrementValue);
   };

	render() {
  	return (
  		<button onClick={this.handleClick}>
        +{this.props.incrementValue}
      </button>
  	);
  }
}

const Result = (props) => {
	return (
  	<div>{props.counter}</div>
  );
};

class ButtonApp extends React.Component {
	state = { counter: 222 };

  incrementCounter = (incrementValue) => {
  	this.setState( (prevState) => ({
      	counter: prevState.counter + incrementValue
      }));
  };

  render() {
  	return (
    	<div>
      	<Button incrementValue={1} onClickFunc={this.incrementCounter} />
        <Button incrementValue={10} onClickFunc={this.incrementCounter} />
        <Button incrementValue={20} onClickFunc={this.incrementCounter} />
        <Button incrementValue={30} onClickFunc={this.incrementCounter} />
        <Button incrementValue={40} onClickFunc={this.incrementCounter} />
        <Result counter={this.state.counter}/>
      </div>
    );
  }
}

export default ButtonApp;
// ReactDOM.render(<App />, mountNode);
