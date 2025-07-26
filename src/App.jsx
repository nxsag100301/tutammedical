import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import AppRoutes from './routes/AppRoutes'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  )
}

export default App
