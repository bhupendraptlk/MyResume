import './App.css';
import Main from './components/Main';
import Menu from './components/Menu';
import Socials from './components/Socials';
function App() {
  return (
    <div className="App">
      <header>
        <div className='container'>
          <div className='headerNav flex ac js'>
            <div className='flex ac'>
              <span>Theme : </span>
              <input type='checkbox' className='m0'/>
            </div>
            <div>bhupendraptlk@gmail.com</div>
          </div>
        </div>
      </header>
      <div className='mainWrapper'>
        <Menu />
        <Socials />
        <Main />
      </div>
    </div>
  );
}

export default App;
