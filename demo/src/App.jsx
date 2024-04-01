// Desc: Main App component
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import info from '../info';
import './App.css';

function App() {
  return (
    <div className='d-flex flex-column min-vh-100 text-bg-dark'>
      <Header />
      <div className='flex-grow-1'>
        <div className='container-fluid d-flex align-items-center justify-content-center h-100'>
          <div className='row'>
            <div className='col'>
                <Card info={info} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
