import './App.css';
import Main from './components/main';
import Menu from './components/Menu';
import Socials from './components/socials';
function App() {
  return (
    <div className="App">
      <header>
        <div className='container'>
          <div className='headerNav flex ac jc'>
            {/* <div className='flex ac'>
              <span className='header-mail'>Theme : </span>
              <input type='checkbox' className='m0'/>
            </div> */}
            <a href="mailto:bhupendraptlk@gmail.com" className='header-mail'>bhupendraptlk@gmail.com</a>
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
