import React from "react";
import { useContext } from "react";
import { Context } from "../../context";

const List = () => {
    const context = useContext(Context);
    
    return (
        <div className="list-wrapper">
            <ul className="list-user-items">
                {context.users.map((item, i) => {
                    return (
                        <li className="list-user-item" key={item.id} onClick={() => context.itemHandler(item.id)}>{item.name}</li>
                    );
                })}
            </ul>
            
        </div>
    );
};

export default List;