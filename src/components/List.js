import React from 'react';

const List = props =>{
    


return (
<React.Fragment>
        <h1>YOUR LIST</h1>
        {

            props.list.map((listItem, index) => {
    
                return (
                    <div index={index} key={listItem.key} id={listItem.id} className="restaurant_list">
                        <div className="list_name">
                            <h2>{listItem.name.length < 15 ? `${listItem.name}` : `${listItem.name.substring(0, 20)}...`}</h2>
                            <i className="fas fa-utensils"></i>
                        </div>
                        <div className="list_location">
                            <h3>{listItem.city}</h3>
                            <span>{listItem.address}</span> 
                        </div>
                        <button onClick={() => props.removeFromList(listItem.key)}>Remove</button>
                    </div>
                )
            })

        }
</React.Fragment>

    )
}

export default List

