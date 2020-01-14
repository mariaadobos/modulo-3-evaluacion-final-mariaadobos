import React from 'react';
import Header from './Header';
import CharactersList from './CharactersList';
import Search from './Search';
import Details from './Details';
import Loader from './Loader';
import { Route, Switch } from 'react-router-dom';
import { FetchAPI, FetchDetails } from '../services/FetchAPI';
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
    this.FetchDetails = this.FetchDetails.bind(this);
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
  FetchDetails(id){
    if (id !== this.state.singleCharacter.id){
      FetchDetails(id)
    .then(data => {
      this.setState({
        singleCharacter: data
      })
    })
    }
  }
  renderDetails (props){
    this.FetchDetails(props.match.params.id)
    return <React.Fragment>
      <Header/>
      {this.state.singleCharacter==='' ? <Loader/> : <Details characterDetails={this.state.singleCharacter}/>}
    </React.Fragment>
    
  }
  render() {
    console.log(this.state.singleCharacter)
    return (
      <Switch>
        <Route exact path="/">
          <Header/>
          <Search value={this.state.query} getInputValue={this.getInputValue}/>
          {this.state.allCharacters==='' ? <Loader/> : <CharactersList allCharacters={this.state.allCharacters} query={this.state.query}/>}
        </Route>
        <Route path="/details/:id" render={this.renderDetails}></Route>
      </Switch>
    );
  }
}

export default App;
