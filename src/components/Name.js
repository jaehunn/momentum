import React from 'react';
import './Name.css';

class Name extends React.Component {
  state = {
    text: '', // local
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    const { name, value } = e.target;

    e.preventDefault();

    this.setState({
      [name]: '', // reset
    });
  };

  render() {
    return (
      <div className="Name">
        <form onSubmit={this.handleChange}>
          <div></div>
        </form>
      </div>
    );
  }
}

export default Name;
