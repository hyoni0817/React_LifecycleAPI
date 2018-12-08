import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  state = {
    counter: 1,
    error: false
  };

  componentDidCatch(error, info) {
    console.log('error:', error);
    this.setState({
      error: true
    });
    //API를 통해서 서버로 오류 내용 날리기
  }
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
    function getSafe(fn) {
      try {
        return fn();
      } catch (e) {
        return undefined;
      }
    }
    console.log(getSafe(() => this.myDiv.getBoundingClientRect().height));
    //console.log(this.myDiv.getBoundingClientRect() !== undefined);
  }
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  render() {
    if (this.state.error) {
      return <div>오류 났어요!</div>;
    }
    return (
      <div ref={ref => (this.myDiv = ref)}>
        {this.state.counter < 10 && <MyComponent value={this.state.counter} />}
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default App;
