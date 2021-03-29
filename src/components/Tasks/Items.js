import React, { useState } from 'react';
import ItemForm from './ItemForm';
import List from './List';
import './Items.css';



const Items = props => {
    const [userItems, setUserItems] = useState([]);

    const onAddItemHandler = item => {
        setUserItems(prevItems => {
            return [
                ...prevItems, item
            ]
        }
        );
        console.log("item: ⚡", item);
    }

    return (
        <div className="items">
            <ItemForm onAddItem={onAddItemHandler} />
            <List items={userItems} />

            {/* <div className="item">
                <li>
                    <span>{props.description}</span>
                    <span>{props.total}</span>
                </li>
            </div> */}
        </div>
    )
}

export default Items;