import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: 0
    }
  }

  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  };

   searchLinear = (e) => {
     e.preventDefault();
    const searchArray = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

    function indexOf(searchArray, inputValue) {
      // console.log('input', inputValue);
      let count = 0;
      for (let i = 0; i < searchArray.length; i++) {
        count++;
        if (searchArray[i] == inputValue) {
          return `After checking ${count} times we found ${inputValue} in the array`;
        }
      }
      return `After checking ${count} times we realize that ${inputValue} is not in the array`;
    };

    let inputValue = this.state.searchInput;
    return indexOf(searchArray, inputValue);

   }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.searchLinear}>
          <label>
            Search:
            <input type="text" name="search" value={this.state.searchInput} onChange={this.handleChange}></input>
          </label>
          <input type="submit" value="Submit"></input>
        </form>
        <div>{this.searchLinear}</div>
      </div>
    );
  }
}

export default App;
