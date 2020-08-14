import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("App Created");
  }
  state = {
    count: 0,
  };
  add = () => {
    this.setState((curr) => ({ count: curr.count + 1 }));
  };
  minus = () => {
    this.setState((curr) => ({ count: curr.count - 1 }));
  };
  componentDidMount() {
    console.log("Component Rendered");
  }
  componentDidUpdate() {
    console.log("Component Updated");
  }
  componentWillUnmount() {
    // Cannot see in log...
  }
  render() {
    console.log("Rendering Component...");
    return (
      <div>
        <h1>Class Component #{this.state.count}</h1>
        <button onClick={this.add}>ADD</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={this.minus}>MINUS</button>
      </div>
    );
  }
}

export default App;
