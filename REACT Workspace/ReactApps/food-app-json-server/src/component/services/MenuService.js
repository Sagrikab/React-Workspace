import axios from 'axios';

const rootURL = "http://localhost:4500/menuitems";


let getAllMenus = () => {
    let pobj = axios.get(rootURL);
    return pobj;
}


export {getAllMenus};