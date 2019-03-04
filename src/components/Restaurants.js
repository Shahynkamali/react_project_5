import React from 'react'




const Restaurants = props =>(   
    <React.Fragment>
        {

        props.restaurant.map((place, i) =>{
        return (
        <div index={i} key={place.id} className="restaurant_block">
            <h2>{place.name}</h2>
            <span>{place.address}</span>
            <div className="restaurant_image">
                <img src={place.image_url} alt={place.name}/>
            </div>
            <button disabled={props.listIsFull} onClick={()=>props.addToList({
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
</React.Fragment>



)

export default Restaurants