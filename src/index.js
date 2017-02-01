import React from 'react';
import ReactDOM from 'react-dom';

//we want to create a new component
//this component should produce some HTML
//this is all javascript promise

//THIS IS A CLASS
//IT CREATES INSTANCES OF THE COMPONENTS!!!!!!!!!!!!
//creating an instance is really easy!
const App = function() {
  return <div> Hi! </div>
  //^that is actually calling react.createElement for us
  //component name/class, using it inside JSX
  //is a component instance :)
  //<app> creates an instance of it
  //since it has nothing between <app></app>
  //can do <App />
}

//need to see how this goes in the DOM somehow
//take this component's generated HTML and
//put it on the page! AKA in the DOM
//first thing that wont work:
//we need to tell that we need react!
ReactDOM.render(<App />);

//^that now creates an instance of app that allows it to render!
