import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import { Home, About, Services, Gallery, Contact, Consultancy, Training } from './Components/Home';
import {Header} from './Components/Header'
import { FetchDataClassExample } from './Components/AJAX/FetchDataClassExample';
import { FetchDataFunctionalExample } from './Components/AJAX/FetchDataFunctionalExample';
import { PersonList } from './Components/AJAX/PersonList';
import { PersonListFunctional } from './Components/AJAX/PersonListFunctional';
import { PersonListPost} from './Components/AJAX/PersonListPost';
import  Table  from './Components/MUI/Table';

function App() {
  const city = "Chennai";
  return (
    <>
    <Router>
      <Header/>
      <div className="middle_region">
        <div className="menu">Menu
          <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="about">About us</Link></li>
            <li><Link to="services">Services</Link></li>
            <li><Link to="gallery">Gallery</Link></li>
            <li><Link to="contact">Contact us</Link></li>
            <li><Link to="fetchClass">Fetch Class Example</Link></li>
            <li><Link to="fetchFunctional">Fetch Functional component Example</Link></li>
            <li><Link to="axiosClass">Axios Class Example</Link></li>
            <li><Link to="axiosFunctional">Axios Functional component Example</Link></li>
            <li><Link to="axiosPost">Axios Post Example</Link></li>
            <li><Link to="mui">Material UI Example</Link></li>
          </ul>
        </div>
        <div className="content">
            <h2>Content Region</h2>

            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/about" element={<About city={city}/>}></Route>
              <Route path="services" element={<Services/>}></Route>
              <Route path="/gallery" element={<Gallery/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/fetchClass" element = {<FetchDataClassExample/>}></Route>
              <Route path="/fetchFunctional" element={<FetchDataFunctionalExample/>}></Route>
              <Route path="/axiosClass" element ={<PersonList/>}></Route>
              <Route path="/axiosFunctional" element ={<PersonListFunctional/>}></Route>
              <Route path="/axiosPost" element={<PersonListPost/>}></Route>
              <Route path="/mui/*" element={<Table/>}></Route>
            </Routes>
        </div>
      </div>
      <div className="footer">Footer</div>
    </Router>
    </>
  );
}

export default App;
