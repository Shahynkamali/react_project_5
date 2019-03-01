import React, { Component } from 'react';
import Form from './components/Form';
import Restaurants from './components/Restaurants'
import firebase from './components/firebase';
import List from './components/List';
import './App.scss';




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
    console.log(data);
    const newList  = [];
  
    for (let key in data){
      console.log(data[key])
      newList.push({
      
        name:data[key].name,
        address:data[key].address,
        city:data[key].city,
        id:data[key].id,
        key:key

      })
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
      
      />
      <List
      list={this.state.list}
      removeFromList={this.removeFromList}
      />
      </div>
    );
  }
}

export default App;
