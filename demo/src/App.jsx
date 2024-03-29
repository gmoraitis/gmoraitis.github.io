import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import info from '../info';
import './App.css'

function App() {

  return (
    <div className='d-flex h-100 w-100 text-center text-bg-dark position-absolute top-50 start-50 translate-middle'>
      <div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'>
      <Header />
      <Card info={info} />
      <Footer />
    </div>
    </div>
  )
}

export default App
