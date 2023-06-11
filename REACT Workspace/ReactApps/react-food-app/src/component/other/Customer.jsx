
import { useState } from "react";
let CustomerComponent = () => {
   
        let {info}=this.props.data;
        return (
        <div className="App">
            
            {info.map((item, index) =>

<div className="list-group-item list-group-item-action" key={item.id}>
    {item.menu}
      <table>
        <tr>
          <th>Order ID</th>
          <th>Date</th>
          <th>Menu</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>{item.id}</td>
          <td>{item.date}</td>
          <td>{item.menu}</td>
          <td>{item.qty}</td>
          <td>{item.price}</td>
          <td>{item.total}</td>
          <td>{item.status}</td>
        </tr>
        
      </table>
    </div>
            )}
            </div>
    )
}


export default CustomerComponent;