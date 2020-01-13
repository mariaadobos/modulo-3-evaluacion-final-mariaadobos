import React from 'react';
import CharactersList from './CharactersList';
import Search from './Search';
import {FetchAPI} from '../services/FetchAPI';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacters: []
    }
  }
  componentDidMount(){
    FetchAPI()
    .then (data => {
      this.setState({
        allCharacters: data.results
      })
    })
  }
  render() {
    return (
      <React.Fragment>
        <Search/>
        <CharactersList allCharacters={this.state.allCharacters}/>
      </React.Fragment>
    );
  }
}

export default App;
