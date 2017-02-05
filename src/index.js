import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyC3-6qXpEyG4llhDmEfew9-vjdA7mLdNlc'
//by the way the way this app loads the page loads
//first thing it does it run the constructor, makes the AJAX call
//while it does that, it also renders shortly after.
//it renders before the AJAX call completes, so the state of videos
//is still set at an empty array.
//because of this, when we have this.state.videos[0] originally
//it causes an error
//order: set state, AJAX while rendering, but state is first.
//these issues of rendering instantly create issues constantly
//to handle this load of child component, add a check in child component
//so it checks before it renders


//we want to create a new component
//this component should produce some HTML
//this is all javascript promise

//THIS IS A CLASS
//IT CREATES INSTANCES OF THE COMPONENTS!!!!!!!!!!!!
//creating an instance is really easy!
//now written in ES6 (new way of
//declaring a function)
class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
     // this.setState({ videos: videos })
     //if key value is the same you can clean it up like :)
     this.setState({ videos })
    })
  }

  render(){
  return (
      <div>
         <SearchBar />
         <VideoDetail video={this.state.videos[0]} />
         <VideoList videos={ this.state.videos }/>
      </div>

    );
  //^that is actually calling react.createElement for us
  //component name/class, using it inside JSX
  //is a component instance :)
  //<app> creates an instance of it
  //since it has nothing between <app></app>
  //can do <App />
}}

//need to see how this goes in the DOM somehow
//take this component's generated HTML and
//put it on the page! AKA in the DOM
//first thing that wont work:
//we need to tell that we need react!
//needs a second argument to tell it where to insert the HTML
ReactDOM.render(<App />, document.querySelector('.container'));

//^that now creates an instance of app that allows it to render!
