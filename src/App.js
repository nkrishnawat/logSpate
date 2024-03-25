import React from 'react';
import Paste from './left/Paste';
import './App.css';

const App = () => {
  const greeting_key = 'Log SPATE';
  const greeting = 'Log SPATE  - Scratch space for YOU';
  const backgroundStyle = {
    backgroundColor: 'black', // Set your desired background color here
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1 // Make sure it's behind other content
  };

  return <div style={backgroundStyle}>
            <Headline value={greeting} />
            <Paste />
        </div>;
};

const Headline = ({ value }) => {
  return <h1 style={{marginLeft: '1%'}}><text value={value} style={{color: 'OldLace', fontFamily: 'Sans-serif' , fontSize: 18}}>{value}</text></h1>;
};

export default App;