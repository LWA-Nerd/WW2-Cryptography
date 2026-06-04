import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/navbar'
import Home from './pages/home/home'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
