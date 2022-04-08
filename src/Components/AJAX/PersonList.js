import React from 'react';
import axios from 'axios';

export class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        console.log(persons);
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map((person,index) => <li key={index}>Name: {person.name}, Id: {person.id}</li>)}
      </ul>
    )
  }
}

