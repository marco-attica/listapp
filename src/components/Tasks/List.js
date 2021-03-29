import React from 'react';
import './List.css';

const List = props => {
    console.log("✌: ", props.items);
    return (
        <section className="tasks-list">
            {props.items.map((item) => {
                // console.log('🚀', item);
                // console.log('👌', index);
                return (
                    <React.Fragment>
                        <span>{item.text}</span>
                        <span>{item.total}</span><br />
                    </React.Fragment>
                )
            })}
        </section >
    );
};

export default List;