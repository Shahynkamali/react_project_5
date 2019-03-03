import React from 'react';

const List = props =>{
    


return (
    <div>
        <h1>YOUR LIST</h1>
        {

            props.list.map((listItem, i) => {
                console.log(i)
                return (
                    <div  index={i} key={listItem.key} id={listItem.id} className="restaurant_list">
                        <h2>{listItem.name}</h2>
                        <span>{listItem.address}</span>
                        <h3>{listItem.city}</h3>
                        <button onClick={()=>props.removeFromList(listItem.key)}>Remove</button> 
                    </div>
                )
            })

        }
    </div>

    )
}

export default List

