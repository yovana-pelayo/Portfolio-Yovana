import About from '../About/About';
import './Header.css';

function Header () {
     return ( 
      <div className='header'>
        <h1>Hello! I'm Yovana Pelayo!</h1>
        <h2>Full Stack Software Developer 
        </h2>
        <h3> Portland, OR</h3>
        <About/>
      </div>
     )
}
export default Header;