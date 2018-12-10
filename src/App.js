import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/navbar/NavBar";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      age: '',
      numberOfImages: 3,
      apiUrl: 'https://pixabay.com/api',
      apiKey: '10934107-8af2a8ca536178650b1ab0efc',
      images: []
    }
  }


  handleImages = () => {
    console.log("a");
    axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}?q=${this.state.searchText}&image_type=photo&per_page=${this.state.numberOfImages}&safesearch=true`)
    .then(res => this.setState({ images: res.data.hits }))
    .catch(err => console.log(err));
  }

  onTextChange = ({ target }) => {

    this.setState({
      searchText: target.value
    }, this.handleImages);
  }

  
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value },this.handleImages);
  };



  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <NavBar
            numberOfImages={this.state.numberOfImages}
            searchText={this.statesearchText}
            handleChange={this.handleChange}
            onTextChange={this.onTextChange}
          />
          {JSON.stringify(this.state)}
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
