import React from 'react';

const Form = props =>(
    
    <form onSubmit={props.getRestaurant}>
        <input 
        type="text"
        name="restaurantName"
        required
        placeholder="name of restaurant"
        />
        <input 
        type="text"
        name="cityName"
        required
        placeholder="name of city"
        />
        <button>Search!</button>
    </form>

);

export default Form;