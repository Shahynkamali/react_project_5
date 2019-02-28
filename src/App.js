import React, { Component } from 'react';
import Form from './components/Form';
import Restaurants from './components/Restaurants'
import './App.css';




class App extends Component {

  constructor(){
    super();
    this.state= {
      restaurant: [],
    }
  }




getRestaurant = async (e) =>{
  e.preventDefault();
  const restaurantName = e.target.restaurantName.value;
  const cityName = e.target.cityName.value;
  const endpoint = await fetch(`http://opentable.herokuapp.com/api/restaurants?name=${restaurantName}&city=${cityName}`)
  const data = await endpoint.json();
  
  this.setState({
    restaurant: data.restaurants,
  })
}


  render() {
    return (
      <div className="App">
      <header><h1>Restaurant Top 10 list!</h1></header>
      <Form
        getRestaurant={this.getRestaurant}
      />
      <Restaurants
      restaurant={this.state.restaurant} 
      />
      
      </div>
    );
  }
}

export default App;
