//import logo from './logo.svg';
import { useState } from 'react';
import MyComponent from './components/MyComponent';

import './App.css';

function App() {
  // state object
  // A state variable can be type number, bollean, object and array 
  const [data, setState] = useState({
    nav: '',
    content: ''
  })

  const navigationAction = (actionName)=>{
    setState({
      nav: actionName.nav,
      content: actionName.content
    });
  }

  return (
    <div className="App">
      <div className="nav">
        <button onClick={() => navigationAction({ nav: 'home', content: 'This our home page'})}>Home</button>
        <button onClick={() => navigationAction({ nav: 'contact', content: 'This is our contact page'})}>Contact</button>
      </div>
      <MyComponent data={data} />

    </div>
  );
}

export default App;
