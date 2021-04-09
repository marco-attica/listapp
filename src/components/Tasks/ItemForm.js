import React, { useState } from 'react';
import './ItemForm.css';

const ItemForm = props => {
  const [enteredText, setEnteredText] = useState('');
  const [enteredTotal, setEnteredTotal] = useState('');
  const [index, setIndex] = useState(10);

  const onSubmitHandler = event => {
    event.preventDefault();
    props.onAddItem({ text: enteredText, total: enteredTotal, index });
    setIndex(index + 1);
  }

  return (
    <form className="item-form m-4" onSubmit={onSubmitHandler}>
      <label>item</label>
      <input type="text" id="item-input" value={enteredText} className="m-2" onChange={event => { setEnteredText(event.target.value) }} /><br />
      <label>total</label>
      <input type="number" id="item-input" value={enteredTotal} className="m-2" onChange={event => { setEnteredTotal(event.target.value) }} /><br />
      <input type="submit" value="Submit" id="submit-btn" className="m-4" />
    </form >
  );
};

export default ItemForm;