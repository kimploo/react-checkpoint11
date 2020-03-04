import React from "react";
import List from "./List";
import Question9 from "./Question9";
import Question11 from "./Question11";

const obj = {
  firstName: "hongshik",
  lastName: "Kim",
  isAwersome: true
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show9: false,
      show11: false
    };
    this.handleClick9 = this.handleClick9.bind(this);
    this.handleClick11 = this.handleClick11.bind(this);
  }

  handleClick9() {
    this.setState({
      show9: !this.state.show9
    });
  }
  handleClick11() {
    this.setState({
      show11: !this.state.show11
    })
  }

  render() {
    return (
      <div className="App">
        <List obj={obj}></List>
        <button onClick={this.handleClick9}>11-9</button>
        {this.state.show9 ? <Question9 /> : <div>{"show question9!"}</div>}
        <button onClick={this.handleClick11}>11-11</button>
        {this.state.show11? <Question11 /> : <div>{"show question11!"}</div>}
      </div>
    );
  }
}

export default App;
