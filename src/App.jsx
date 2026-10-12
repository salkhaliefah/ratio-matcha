import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Events from './pages/Events'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>

      {/* Navigation Bar */}
      <nav>
        <h2>RATIO</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App