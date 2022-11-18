import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import Body from './body';
import ContactForm from './contactform';
import Entry from './3itemcarousel';
import Admin from './adminform';
import SuperUser from './pages/superuser';
import Slider from './3itemcarousel';

function App() {
  return (
    <div className="App">
        <div className='headerPosition'>
          <Header/>
        </div>
        <div className='mainContent homeimage w-50 mx-auto'>
          <div>
            <h1>We are the top real estate brokers in Ohio!</h1>
          </div>
          <div>
            <h2>With </h2>
          </div>
          <div>
            <p>Years of experience, trials and tribulations, and the constant pursuit of creating the best real estate team has culminated to the point we are at today.  Whether you are looking to buy your first home, purchase a short-term vacation rental, expand your commercial operations, or leverage our team to expand your business…we welcome you!  We are honored to be a part of your journey and look forward working with you!</p>
          </div>
        </div>

        <div className='slideslide w-50 mx-auto'>
            <Slider/>
        </div>
        <div className='w-50 mx-auto'>
        <ContactForm/>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
