import React from "react";

export default class Question9 extends React.Component {
  render() {
    let langs = ["Ruby", "ES6", "Scala"];
    return (<div>
        {langs.map(it => <p>it</p>)}
      </div>)
  }
}
