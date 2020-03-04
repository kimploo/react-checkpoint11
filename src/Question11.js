import React from "react";

export default class Question11 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      wow: true,
    }
  }

  render() {
    this.setState({
      wow: !this.state.wow 
    })
    return (
      <></>
    );
  }
}