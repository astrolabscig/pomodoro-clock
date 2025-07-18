import LengthControl from './components/LengthControl'
import Timer from './components/Timer'
import Controls from './components/Controls'
//import './App.css'

function App() {
  

  return (
    <div className="p-5 d-flex justify-content-center align-items-center bg-light" >
      <div className='card shadow p-4 rounded-4'style={{ maxWidth: '400px', width: '100%' }}>
      <h1 className='text-center mb-4 fw-bold '>25 + 5 Clock</h1>
      <div className='d-flex justify-content-between'>
        <LengthControl labelType='Break' />
        <LengthControl labelType='Session'/>
      </div>
      <Timer />
      <Controls />
      </div>
    </div>
  )
}

export default App
