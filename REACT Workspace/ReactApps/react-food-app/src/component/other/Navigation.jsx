

let NavigationComponent = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="/">
                        <span className="mx-1 text-danger bg-light p-2 rounded-3">Food</span> 
                        <span className="mx-1">Delivery</span>
                        <span className="mx-1">App</span>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/restaurent">Restaurents</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Reviews</a>
                            </li>
                           
                        </ul>
                        <form className="d-flex" role="search">
                            <a className="btn btn-sm btn-light  fw-bold mx-2" href="/customer/signup">Sign Up</a>
                            <a className="btn btn-sm btn-light  fw-bold" href="/customer/signin">Sign In</a>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationComponent;