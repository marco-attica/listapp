import React from 'react';

const List = props => {
    console.log("Object✌: ", props.items);
    return (
        <section className="tasks-list">
            {/* <span>{props.items.text}</span> */}
        </section>
    );
};

export default List;