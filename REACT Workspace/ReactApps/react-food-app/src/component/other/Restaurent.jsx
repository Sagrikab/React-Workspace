import { useState } from "react";

let RestaurentComponent = (props) => {

    let { records, cb } = props.data;

    let btnCancel = (event) => {
        console.log(event.target.id);
        cb(records.filter(item => item.id != event.target.id));
    }

    return (
        <div>
            <div className="list-group">

                {records.map((item, index) =>

                    <div className="list-group-item list-group-item-action" key={item.id}>
                        {item.cafename}

                        <button onClick={btnCancel} id={item.id} className="float-end ms-3 border border-2" style={{ "border": "none", "backgroundColor": "transparent" }}>
                            <i className="fa-solid fa-xmark text-danger " onClick={btnCancel} style={{"width":"cover"}}></i>
                        </button>

                        <span className="float-end badge bg-dark">{item.reviews}</span>

                    </div>

                )}
            </div>
        </div>
    )
}

export default RestaurentComponent;