import About from '../About/About';
import './Home.css';

function Home() {
    return (
        <div>
        <h1> Welcome to my home page</h1>
            <div className='about-me'>
        <About/>
            </div>
        </div>
    )
}
export default Home;