

let CartComponent = () => {
    return (
        <div>
            <button type="button" className="btn btn-light position-relative float-end mx-3 col-1">
            <i className="fa-solid fa-cart-shopping text-danger float-end"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                    1
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>
            

        </div>
    )
}

export default CartComponent;