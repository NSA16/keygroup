import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import Body from './body';
import ContactForm from './contactform';
import Entry from './3itemcarousel';
import Admin from './adminform';

function App() {
  return (
    <div className="App">
        <div className='headerPosition'>
          <Header/>
        </div>
        <div className='mainContent'>
          <div>
            <h1>This is where the h1 goes</h1>
          </div>
          <div>
            <h2>H2 goes here</h2>
          </div>
          <div>
            <p>Write an excerpt of the company</p>
          </div>
        </div>
        <div>
            <Admin/>
        </div>
        <div className='homeimage w-50 mx-auto'>
        <ContactForm/>
        </div>
        <div className='slideslide w-50 mx-auto'>
            <Entry/>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
