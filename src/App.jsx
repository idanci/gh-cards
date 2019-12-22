import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
      </div>
    );
  }
}

export default App;
