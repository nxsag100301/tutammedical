import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import PrivateRoute from './PrivateRoute'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<PrivateRoute />}>
          {/* Thêm private route vào đây */}
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes
