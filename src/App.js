import './App.css';
import Page1 from './comonents/Page1';
import Page2 from './comonents/Page2';

function App() {
  return (
    <div className='full_app'>
      <div className='red_l_app'>
        <p className='line_app'></p>
        <p className='line_app'></p>
        <p className='line_app'></p>
        <p className='line_app'></p>
      </div>
      <div className='components_app'>
        <Page1/>
        <Page2/>
      </div> 
      <div className='footer'>
        <button></button>
      </div>
      
    </div>
  ); 
}

export default App;
