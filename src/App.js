import React, { Component } from 'react';
import Form from './components/Form';
import Restaurants from './components/Restaurants'
import firebase from './components/firebase';
import './App.css';




class App extends Component {

  constructor(){
    super();
    this.state= {
      restaurant: [],
      list: [],
    }
  }


componentDidMount(){
  const dbRef = firebase.database().ref();
  dbRef.on(`value`, response =>{
    const data = response.val();
    const newList  = [];
  
    for (let key in data){
      newList.push({
        key:key,
        name:data[key]
      });
    
    }
    console.log(newList);
    this.setState({
      list: newList,
    })

  })
}


addToList=(restaurantName)=>{
  const dbRef = firebase.database().ref()
  dbRef.push(restaurantName);
}

removeFromList = (name) =>{
  const dbRef = firebase.database().ref(name)
  dbRef.remove();
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
      addToList={this.addToList}
      list={this.state.list}
      removeFromList={this.removeFromList}
      />
      
      </div>
    );
  }
}

export default App;
