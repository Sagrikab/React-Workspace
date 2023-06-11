import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//user components
import NavigationComponent from '../other/Navigation';
import HomeComponent from '../other/Home';
import RestaurentComponent from '../other/Restaurent';
import SignUpComponent from '../other/SignUp';
import SignInComponent from '../other/SignIn';

import {carouselimages, globalrestaurents, orders} from '../db/FakeDatabase';
import BodyComponent from '../other/Body';

function App() {

  let [carouselimagesState, updateCarouselState] = useState(carouselimages);
  let [globalrestaurentsState, updateRestaurentState] = useState(globalrestaurents);
  let [ordersState, updateOrdersState] = useState(orders);

  return (
    <div className="App">
          <NavigationComponent />
     
          <Router>
            <Routes>
                <Route path="/" element={<HomeComponent data={carouselimagesState}/>} />
                <Route path="/restaurent" element={<BodyComponent data={{key1:globalrestaurentsState, key2:ordersState}} />} />
                <Route path="/customer/signup" element={<SignUpComponent />} />
                <Route path="/customer/signin" element={<SignInComponent />} />
                
            </Routes>
          </Router>
    </div>
  );
}

export default App;