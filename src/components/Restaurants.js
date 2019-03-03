import React from 'react'



const Restaurants = props =>(   
    <div>
        {

        props.restaurant.map((place, i) =>{
            console.log(i)
        return (
        <div index={i}  key={place.id} className="restaurant_block">
            <h2>{place.name}</h2>
            <span>{place.address}</span>
            <h3>{place.city}</h3>
            <img src={place.image_url} alt={place.name}/>
            <button onClick={()=>props.addToList({
                name:place.name,
                address:place.address,
                city:place.city,
                id:place.id,
                index:i
            })}>Add to the list!</button>
        </div>
            )
    })

        }
    </div>



)

export default Restaurants