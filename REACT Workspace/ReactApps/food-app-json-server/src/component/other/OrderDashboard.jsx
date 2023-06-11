

let OrderDashboardComponent = (props) => {

    let { records, cb } = props.data;

    let handleChange = (event) => {
        let response = records.map(item=>{
            if(item.id==event.target.id)
                item.status=event.target.value;

            return item;
        })

        cb(response);
    }

    return (
        <div>
            <table className="table table-hover mx-3">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Date</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Qtys</th>
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {records.map((item,index)=>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.date}</td>
                            <td>{item.menu}</td>
                            <td>{item.price}</td>
                            <td>{item.price}</td>
                            <td>{item.total}</td>
                            <td>
                                <select className="form-select" id={item.id} value={item.status} key={item.id} onChange={handleChange}>
                                    <option value="new">new</option>
                                    <option value="in progress">in progress</option>
                                    <option value="ready">ready</option>
                                </select>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default OrderDashboardComponent;