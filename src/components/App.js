import React from 'react';
import CharactersList from './CharactersList';
import Search from './Search';
import {FetchAPI} from '../services/FetchAPI';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacters: [],
      query: ''
    }
    this.getInputValue = this.getInputValue.bind(this);
  }
  componentDidMount(){
    FetchAPI()
    .then (data => {
      this.setState({
        allCharacters: data.results
      })
    })
  };
  getInputValue(value){
    this.setState({
      query: value
    })
  };
  render() {
    console.log(this.state.query)
    return (
      <React.Fragment>
        <Search getInputValue={this.getInputValue}/>
        <CharactersList allCharacters={this.state.allCharacters} query={this.state.query}/>
      </React.Fragment>
    );
  }
}

export default App;
