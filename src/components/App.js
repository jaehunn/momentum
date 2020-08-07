import React from 'react';
import Name from './Name';

class App extends React.Component {
  state = {
    name: '',
  };

  setName = (text) => {
    this.setState({
      name: text,
    });

    localStorage.setItem('NAME', text);
  };

  getName = () => {
    const name = localStorage.getItem('NAME');

    if (name !== null)
      this.setState({
        name,
      });
  };

  componentDidMount() {
    this.getName();
  }

  render() {
    const { name } = this.state;

    return (
      <div className="App">
        {name !== null ? name : <Name saveName={this.saveName} />}
      </div>
    );
  }
}

export default App;
