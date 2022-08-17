import './App.css';
import Main from './components/main';
import Menu from './components/Menu';
import Socials from './components/socials';
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
      <div className='flex js'>
        <Menu />
        <Main />
        <Socials />
      </div>
    </div>
  );
}

export default App;
