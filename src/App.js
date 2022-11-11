import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import Body from './body';
import { Carousel } from 'bootstrap';
import ContactForm from './contactform';

function App() {
  return (
    <div className="App">
        <div>
          <Header/>
        </div>
        <div>
            <Body/>
        </div>
        <ContactForm/>
        <div>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
