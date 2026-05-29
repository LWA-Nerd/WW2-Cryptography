import { HashRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<h1>Welcome to My Vite App</h1>} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
