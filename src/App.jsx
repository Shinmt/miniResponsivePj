import HomePage from "./Components/HomePage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Schedule from "./Components/Schedule"
import Troubleshoot from "./Components/Troubleshoot"

function App() {
  return (
    <Router>
      <div className="main">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/schedule" element={<Schedule />} />
          <Route exact path="/troubleshoot" element={<Troubleshoot />} />
        </Routes>
      </div>
      </Router>
  )
}

export default App
