import RestaurentComponent from "./Restaurent";
import {useState} from 'react';
import CartComponent from "./Cart";
import OrderDashboardComponent from "./OrderDashboard";

let BodyComponent = (props) => {
    
    let [restaurents, modifyRestaurents] = useState(props.data.key1);
    let [orders, modifyOrders] = useState(props.data.key2);

    let show = () => {
        console.log(restaurents);
    }

    let showorders = () => {
        console.log(JSON.stringify(orders));
    }
    return (
        <div>
            <div className="row my-2">
                <div className="col-md-8">
                    <button className="mx-3 btn btn-sm btn-secondary" onClick={show}>Show Records</button>
                    <button className="mx-3 btn btn-sm btn-secondary" onClick={showorders}>Show Orders</button>
                    {/* {JSON.stringify(orders)} */}
                </div>
                <div className="col-md-4">
                    <a href="#" className="">
                        <CartComponent />
                    </a>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                        <RestaurentComponent data={{records:restaurents, cb:modifyRestaurents}} />
                </div>

                <div className="col-md-9">
                    <OrderDashboardComponent data={{records:orders, cb:modifyOrders}} />
                </div>
            </div>
        </div>
    )
}

export default BodyComponent;

