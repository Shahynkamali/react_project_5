import React, { Component } from 'react';
import Form from './components/Form';
import Restaurants from './components/Restaurants'
import firebase from './components/firebase';
import List from './components/List';
import './App.scss'
;

class App extends Component {

  constructor(){
    super();
    this.state= {
      restaurant: [],
      list: [],
      listIsFull: false
      
    }
  }




componentDidMount(){
  const dbRef = firebase.database().ref();
  dbRef.on(`value`, response =>{
    const data = response.val();
    const newList  = [];
  
    for (let key in data){
      newList.push({
        name:data[key].name,
        address:data[key].address,
        city:data[key].city,
        id:data[key].id,
        key:key,

    

      })
    }


      this.setState({
        list: newList
      })


  })
}


addToList=(restaurantName)=>{
  const dbRef = firebase.database().ref()
  dbRef.push(restaurantName);

  const newList = this.state.list;

  if (newList.length >9) {
    this.setState({
      listIsFull: true
    })
  } else {
    this.setState({
      listIsFull:false
    })
  }
  
}

removeFromList = (name) =>{
  const dbRef = firebase.database().ref(name)
  dbRef.remove();
}



getRestaurant = async (e) =>{
  e.preventDefault();
  const restaurantName = e.target.restaurantName.value;
  const cityName = e.target.cityName.value;
  const endpoint = await fetch(`https://opentable.herokuapp.com/api/restaurants?name=${restaurantName}&city=${cityName}`)
  const data = await endpoint.json();
  
  this.setState({
    restaurant: data.restaurants,
  })
}



  render() {
    return (
      <div className="app">
        <header>
            <div className="header">
              <h1>Restaurant Top 10 list!</h1>
              <p>Find your favorite restaurants and create your top 10 list!</p>
            </div>
        </header>
        <div className="main">
          <div className="wrapper">
            <div className="form">
              <Form
                getRestaurant={this.getRestaurant}
              />
            </div>
          </div>
        <div className="wrapper">
            <div className="restaurants">
              <Restaurants
                restaurant={this.state.restaurant}
                addToList={this.addToList}
                listIsFull={this.state.listIsFull}
              />
            </div>
            <div className="list">
              <List
                list={this.state.list}
                removeFromList={this.removeFromList}
              />
            </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
