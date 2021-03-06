import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends Component {
  constructor(props){
    super(props);
//term is the property of the object, state:
//state is a plain JS object htat exists on any component
//that is a class based component
//initialize with constructor method
//and setting it with this.state (below)
    this.state= { term: 'Search here yo'};

  }
//define a new class called SB, and give it
//access to all of the functioanlity that
//react.component has!
//basically just gives it a bunch of functionallity
//from react library
//then render function/method:

  render() {
  //all input tags have a change even that fires when you entire
  //its a vanilla thing
//onChange is a special react property
//this method informs react that the state changed
return (
<div className="search-bar">
     <input
     value={this.state.term}
     onChange={ event=>this.onInputChange(event.target.value) }/>

 </div>
  )}
//good practice for naming:
//on input change do this function!
//then we need to pass it to the element we are monitoring
//all browswer events that get triggered by HTML elements
//whenever we add an event handler it has an argument (event)
//event object describes the event that occurred
//in this case, since its an input element it gets access to the value
//of the input! the text that changes. p cool.
//event object then .target.value is an introspect to get more info on what we just did
//if you console log just event you'd see everything
//right now the event handler is written as a method on the class

  // onInputChange(event) {
  //   console.log(event.target.value)
  // }

  onInputChange(term){
    //set the state with a term but also call the callback on index with the search term
    this.setState ({term})
    //dont forget this is just term: term
    this.props.onSearchTermChange(term)
  }
}


// const SearchBar = () => {
//   return <input />
// }

export default SearchBar;
//any file that imports search bar will get this component!
