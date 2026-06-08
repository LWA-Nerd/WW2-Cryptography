import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/navbar'
import Home from './pages/home/home'
import Enigma from './pages/enigma/engima'
import BletchleyPark from './pages/bletchley-park/bletchley';
import Sigaba from './pages/sigaba/sigaba';
import Purple from './pages/purple/purple';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enigma" element={<Enigma />} />
          <Route path="/bletchley-park" element={<BletchleyPark />} />
          <Route path="/sigaba" element={<Sigaba />} />
          <Route path="/purple" element={<Purple />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
