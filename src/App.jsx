import Navbar from './components/Navbar'
import BodyContent from './components/BodyContent'

function App () {
  return (
    <div className='main'>
      <img src='../src/assets/images/bg-desktop-dark.jpg' alt='' className='bg-img' />
      <div className='wrapper'>
        <Navbar />
        <BodyContent />
      </div>
    </div>
  )
}

export default App
