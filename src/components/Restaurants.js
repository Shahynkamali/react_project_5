import React from 'react'



const Restaurants = props =>(   
    <div>
        {

        props.restaurant.map((place) =>{
        return (
        <div key={place.id} className="restaurant_block">
            <h2>{place.name}</h2>
            <span>{place.address}</span>
            <h3>{place.city}</h3>
            <img src={place.image_url} alt={place.name}/>
            <button onClick={()=>props.addToList(place.name)}>Add to the list!</button>
        </div>
            )
    })

        }
    </div>



)

export default Restaurants