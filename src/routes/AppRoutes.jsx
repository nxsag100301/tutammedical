import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import PrivateRoute from './PrivateRoute'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route element={<PrivateRoute />}>
        {/* Thêm private route vào đây */}
      </Route>
    </Routes>
  )
}

export default AppRoutes
