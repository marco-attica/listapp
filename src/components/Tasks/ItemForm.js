import React, { useState } from 'react';
import './ItemForm.css';

const ItemForm = props => {
    const [enteredText, setEnteredText] = useState('');
    const [enteredTotal, setEnteredTotal] = useState('');

    const onSubmitHandler = event => {
        event.preventDefault();
        props.onAddItem({ text: enteredText, total: enteredTotal });
    }

    return (
        <form className="item-form" onSubmit={onSubmitHandler}>
            <label>item</label>
            <input type="text" id="item-input" value={enteredText} onChange={event => { setEnteredText(event.target.value) }} /><br />
            <label>total</label>
            <input type="number" id="item-input" value={enteredTotal} onChange={event => { setEnteredTotal(event.target.value) }} /><br />
            <input type="submit" value="Submit" />
        </form >
    );
};

export default ItemForm;