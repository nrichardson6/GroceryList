import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    items: [
      {id:1, name:'Apple', complete:true},
      {id:2, name:'Cereal', complete: false},
      {id:3, name:'Milk', complete: false},
      {id:4, name:'Soap', complete: false},
    ],
  };

  renderItems = () => {
    const { items } = this.state;
    return items.map((item) => {
      return <div key={item.id}>{item.name}</div>;
    });
  };

  render() {
    return(
      <>
      <h1>Grocery List</h1>
      {this.renderItems()}
      </>
    );
  }
}

export default App;
