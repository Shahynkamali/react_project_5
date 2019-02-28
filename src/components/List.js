import React from 'react';

const List = props =>(
<div>
    <ul>
        {
            props.list.map((name)=>{
            return(
                <li key={name.key} id={name.key}>{name.name}
                    <button onClick={()=>props.removeFromList(name.key)}>Remove</button>
                </li>
            )
            }) 
        }
    </ul>
</div>
)

export default List