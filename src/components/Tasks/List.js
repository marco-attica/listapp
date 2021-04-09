import React from 'react';
import './List.css';

const List = props => {
  console.log("props.items: ", props.items);
  return (
    <section className="tasks-list">
      <h1 className="text-info">Items</h1>
      <ul className="list-group">
        {props.items.map((item) => {
          return (
            <React.Fragment key={item.index}>
              <li className="list-group-item d-flex align-items-center" >
                <span className="mr-auto">{item.text}</span>
                <span className="badge badge-primary badge-pill text-white flex-end">{item.total}</span>
                <button type="button" className="close ml-3" aria-label="Close" onClick={props.onRemoveItem.bind(this, item.index)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </li>
            </React.Fragment>
          )
        })}
      </ul>
    </section >
  );
};

export default List;