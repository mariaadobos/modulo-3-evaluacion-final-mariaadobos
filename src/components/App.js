import React from 'react';
import Header from './Header';
import CharactersList from './CharactersList';
import Search from './Search';
import Details from './Details';
import { Route, Switch } from 'react-router-dom';
import { FetchAPI } from '../services/FetchAPI';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacters: [],
      query: '',
      singleCharacter: {}
    }
    this.getInputValue = this.getInputValue.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
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
  renderDetails (props){
    const selectedId = props.match.params.id;
    console.log(selectedId)
    console.log(this.state.allCharacters)

    for (const character of this.state.allCharacters){
      if (character.id===selectedId){
        this.setState({singleCharacter: character}) 
        console.log(this.state.singleCharacter)
        console.log(selectedId)
      }
    }
    return <Details characterDetails={this.state.singleCharacter}/>
  }
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Header/>
          <Search value={this.state.query} getInputValue={this.getInputValue}/>
          <CharactersList allCharacters={this.state.allCharacters} query={this.state.query}/>
        </Route>
        <Route path="/details/:id" render={this.renderDetails}></Route>
      </Switch>
    );
  }
}

export default App;
