import React from 'react';
import './App.css';
import CardList from './CardList';
import Form from './Form';

const testData = [
  {name: "Ivan Danci", avatar_url: "https://avatars2.githubusercontent.com/u/2598910?v=4", company: "Endava"},
  {name: "David Heinemeier Hansson", avatar_url: "https://avatars0.githubusercontent.com/u/2741?v=4", company: "Basecamp"},
];


class App extends React.Component {
  state = {
    profiles: testData,
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
