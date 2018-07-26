import React, { Component } from 'react';

export default class Main extends Component {
  state = {
    title: 'Novo desafiooooo!!!',
  };

  render() {
    const { title } = this.state;
    return (
      <h1>
        {title}
      </h1>
    );
  }
}
