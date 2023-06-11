import RestaurentComponent from "./Restaurent";
import {useState} from 'react';
import CartComponent from "./Cart";
import CustomerComponent from "./Customer";

let BodyComponent = (props) => {
    
    let [restaurents, modifyRestaurents] = useState(props.data);
    //let [customer,modifyCustomers]=useState(props.data);

    let show = () => {
        console.log(restaurents);
    }

    return (
        <div>
            <div className="row my-2">
                <div className="col-md-8">
                    <button className="mx-3 btn btn-sm btn-seconday" onClick={show}>Show Records</button>
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
                 <CustomerComponent/>
                </div>
            </div>
        </div>
    )
}

export default BodyComponent;

