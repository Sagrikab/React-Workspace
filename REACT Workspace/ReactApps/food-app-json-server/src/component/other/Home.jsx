import { useEffect, useState } from "react";
import { getAllMenus } from '../services/MenuService';


let HomeComponent = (props) => {

    let [carouselImagesState, changeState] = useState(props.data);
    let [menuitems, setMenuItems] = useState([]);

    useEffect(() => {
        let pobj = getAllMenus();

        pobj.then((response) => {
            setMenuItems(response.data);
        });

        pobj.catch((error) => {
            console.log(JSON.stringify(error, null, 3));
        })

    }, []);

    return (
        <div>
            {console.log(menuitems)}

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carouselImagesState[0]} className="d-block w-100" alt="..." />
                    </div>

                    {carouselImagesState.map((item, index) =>
                        <div className="carousel-item" key={index}>
                            <img src={item} className="d-block w-100" alt="..." />
                        </div>
                    )}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="row row-cols-4">
                {menuitems.map((item, index) =>
                    <div className="col">
                    <div className="card m-3" style={{ "width": "18rem" }}>
                        <span className="mx-2">{item.stock ? 
                            <span>
                                <i class="fa-solid fa-circle-arrow-right text-success fw-bold me-3"></i>
                                <span classsName="text-secondary">In Stock</span>
                            </span>:

                            <span>
                                <i class="fa-solid fa-layer-group text-danger me-3"></i>
                                <span classsName="text-danger">Out of Stock</span>
                            </span>
                            }
                        </span>
                        <img src="https://picsum.photos/id/163/150/80" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.menu}</h5>
                            <p className="card-text">
                                <i class="fa-solid fa-mug-hot mx-2"></i>
                                {item.description}
                                <span className="mx-2 fw-bold text-success">{item.price}</span>
                                <span className="mx-2 fw-bold text-danger">- {item.discount}</span>
                            </p>

                            <input type="number" placeholder="qtys" min="1" max="10" className="form-control text-center col-1 my-2"/>

                            {item.stock?
                                <button id={item.id} className="btn btn-primary">
                                    <i class="fa-solid fa-plus mx-2"></i>                                    
                                    Add to Cart</button>:
                                <button id={item.id} className="btn btn-primary" disabled>
                                    <i class="fa-solid fa-plus mx-2"></i>
                                    Add to Cart</button>}
                            
                        </div>
                    </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomeComponent;