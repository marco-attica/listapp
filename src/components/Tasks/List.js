import React from 'react';
import './List.css';

const List = props => {
    console.log("✌: ", props.items);
    return (
        <section className="tasks-list">
            <ul className="list-group">
                {props.items.map((item, i) => {
                    // console.log('🚀', item);
                    // console.log('👌', index);
                    return (
                        <React.Fragment>
                            <li key={i} className="list-group-item d-flex align-items-center" >
                                <span className="mr-auto">{item.text}</span>
                                <span className="badge badge-primary badge-pill text-white flex-end">{item.total}</span>
                                <button type="button" className="close ml-3" aria-label="Close">
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