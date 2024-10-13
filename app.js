import React from 'react';
import ReactDOM from 'react-dom/client';
import {Navbar} from './src/components/Navbar';
import {Body} from './src/components/Body';

  
const App = () => { 
    return(
        <div>     
            <Navbar />
            <Body />  
        </div>
    )
}

const root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);
rootElement.render(<App />);
