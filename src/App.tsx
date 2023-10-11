import './App.css'
import Navbar from './components/Navbar'
import DataLoder from './data/DataLoder'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
    <Navbar />
    <div className='container grid grid-4-col p-5'>
     <DataLoder  />
     </div>
    
    </>
  )
}

export default App
